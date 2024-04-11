
import {signToken} from '../../utils/createToken.js'
import { sendEmail } from '../../utils/email.js';
import { emailTemplate } from '../../utils/emailHtml.js';
import AppErr from '../../utils/AppErr.js';
import catchAsync from '../../utils/catchAsync.js';
import { generateAuthCode } from '../../utils/generateAuthCode.js';
import { deleteMultipleFiles } from '../../utils/deletePhotos.js';
import bcrypt from 'bcrypt';
import examinerModel from '../../../database/models/examinerModel.js';
import candidateBadgeModel from '../../../database/models/candidateBadgeModel.js';
import { createSendToken } from '../../utils/createSendToken.js';
import mongoose from 'mongoose';




export const signup = catchAsync(async (req, res, next) => {
  const { userAgreement } = req.body;
  if (!userAgreement) {
    return next(new AppErr('Please mark user agreement button if you agree  our terms', 400));
  }

  const examiner = await examinerModel.findOne({email : req.body.email});
  if (examiner) {
   return next(new AppErr('your email is already exist', 400)) 
  }
  const authCode = generateAuthCode();
  if(req.files?.examinerPassportPhoto)req.body.examinerPassportPhoto = req.files?.examinerPassportPhoto[0]?.filename;
  if(req.files?.examinerVerificationPhoto)req.body.examinerVerificationPhoto = req.files?.examinerVerificationPhoto[0]?.filename;
  if(req.files?.examinerProfilePhoto)req.body.examinerProfilePhoto = req.files?.examinerProfilePhoto[0]?.filename;
  req.body.verificatinCode = authCode;
  req.body.verificationCodeExpires = new Date(Date.now() + 24 * 60 * 60 * 1000) // Set expiration to 24 hours from now

  const newExaminer = await examinerModel.create(req.body);
  if(!newExaminer)
      return next(new AppErr('fail to signup try again later', 400));

  try {
    await sendEmail({ email: req.body.email, template: emailTemplate(authCode) });

  } catch (err) {
     await deleteMultipleFiles('examiner' ,
      [req.body.examinerPassportNumber ,
        req.body.examinerPassportPhoto,
        req.body.examinerVerificationPhoto,
        req.body.examinerProfilePhoto])
        return next(new AppErr('Sorry, there is a problem with sending the verification email', 400));
  }


  return res.status(201).json({
    status: 'success',
    message : 'you are signed up successfully , please verify your email',
  });
});



export const login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;
  const examiner = await examinerModel.findOne({ email }).select('+password');
  if (!examiner || !(await bcrypt.compare(password, examiner.password)))
  return  next(new AppErr('invalid email or password', 400));
  if(!examiner.isEmailVerified)
      next(new AppErr('the email is not verified , please verify your email', 400))
    createSendToken(examiner , 200 , res)
});



export const  getAllExaminerCandidateBadges = catchAsync(async(req, res , next)=>{
  const ObjectId = mongoose.Types.ObjectId
  const  examinerId= new ObjectId(req.user?._id) 
  console.log(examinerId , 'assssssssssssssssssssssssss');
  const allBadgeHolders =  await candidateBadgeModel.aggregate([
          {
                  $match: {
                    examinerId,
                    status: { $in: ['pending', 'published'] },
                  },
                },
                {
                  $lookup: {
                    from: 'candidates',
                    localField: 'candidateId',
                    foreignField: '_id',
                    as: 'candidate',
                  },
                },
                {
                  $unwind: '$candidate',
                },
                {
                  $match: {
                    'candidate.status': 'approved',
                  },
                },
                {
                  $lookup: {
                    from: 'badges',
                    localField: 'badgeId',
                    foreignField: '_id',
                    as: 'badge',
                  },
                },
                {
                  $unwind: '$badge',
                },
                // {
                //   $match: {
                //     'badge.status': 'approved',
                //   },
                // },
                {
                  $group: {
                    _id: {
                      candidateId: '$candidateId',
                      status: '$status',
                    },
                    count: { $sum: 1 },
                    latestIssueDate: { $max: '$issueDate' },
                  },
                },
                {
                  $facet: {
                    pending: [
                      {
                        $match: {
                          '_id.status': 'pending',
                        },
                      },
                      {
                        $project: {
                          _id: 0,
                          candidateId: '$_id.candidateId',
                          count: '$count',
                          latestIssueDate: '$latestIssueDate',
                        },
                      },
                    ],
                    published: [
                      {
                        $match: {
                          '_id.status': 'published',
                        },
                      },
                      {
                        $project: {
                          _id: 0,
                          candidateId: '$_id.candidateId',
                          count: '$count',
                          latestIssueDate: '$latestIssueDate',
                        },
                      },
                    ],
                  },
                },
                {
                  $project: {
                    data: {
                      $concatArrays: ['$pending', '$published'],
                    },
                  },
                },
                {
                  $unwind: '$data',
                },
                {
                  $group: {
                    _id: '$data.candidateId',
                    firstName: { $first: '$data.firstName' },
                    lastName: { $first: '$data.lastName' },
                    pendingCount: { $sum: '$data.pendingCount' },
                    publishedCount: { $sum: '$data.publishedCount' },
                    latestPendingIssueDate: { $max: '$data.latestPendingIssueDate' },
                    latestPublishedIssueDate: { $max: '$data.latestPublishedIssueDate' },
                  },
                },
                {
                  $project: {
                    _id: 0,
                    candidateId: '$_id',
                    firstName: 1,
                    lastName: 1,
                    pendingCount: 1,
                    publishedCount: 1,
                    latestPendingIssueDate: 1,
                    latestPublishedIssueDate: 1,
                  },
                },
  ])
if(!allBadgeHolders.length) return next(new AppErr('no candidates holds a badges yet' , 404))
console.log(allBadgeHolders);
return res.status(200).json({status : 'success' , data : allBadgeHolders})
})



export const ExaminerApproveCandidateBadge = catchAsync(async(req,res, next)=>{
  const {candidateBadgeId} = req.params
  const ObjectId = mongoose.Types.ObjectId
  const  examinerId= new ObjectId(req.user?._id.toString()) 
  const candidateBadge = await candidateBadgeModel.findOne({_id : candidateBadgeId ,examinerId  })
  if(!candidateBadge) return next(new AppErr('no badge for this candidate' , 404));
  if(candidateBadge.status !== 'pending')return next(new AppErr(`this badge candidate is ${candidateBadge.status}` , 404));
  candidateBadge.status = "published";
  await candidateBadge.save();
  return res.status(200).json({status : 'success' , message : 'badge approved successfully'})
});




export const ExaminerDeclineCandidateBadge = catchAsync(async(req,res, next)=>{
  const {candidateBadgeId} = req.params;
  const {declineReason} = req.body
  const ObjectId = mongoose.Types.ObjectId
  const  examinerId= new ObjectId(req.user?._id) 
  const candidateBadge = await candidateBadgeModel.findOne({_id : candidateBadgeId ,examinerId  })
  if(!candidateBadge) return next(new AppErr('no badge for this candidate' , 404));
  if(candidateBadge.status !== 'pending')return next(new AppErr(`this badge candidate is ${candidateBadge.status}` , 404));
  candidateBadge.status = "declined";
  candidateBadge.declineReason = declineReason
  await candidateBadge.save();
  return res.status(200).json({status : 'success' , message : 'badge approved successfully'})
});


export const examinerViewCandidateBadge =  catchAsync(async(req,res, next)=>{
  const {candidateBadgeId} = req.params
  const ObjectId = mongoose.Types.ObjectId
  const  examinerId= new ObjectId(req.user?._id) 
  const candidateBadge = await candidateBadgeModel.findOne({_id : candidateBadgeId ,examinerId  }).poulate('candidateId').populate('badgeId')
  if(!candidateBadge) return next(new AppErr('no badge for this candidate' , 404));
  if(candidateBadge.status !== 'pending')return next(new AppErr(`this badge candidate is ${candidateBadge.status}` , 404));
  return res.status(200).json({status : 'success' , data : candidateBadge})
})



export const updateMyProfile = catchAsync(async (req, res, next) => {
    const updatedProfile = req.body;

    // Handle file uploads
    if (req.files?.examinerPassportPhoto) {
      updatedProfile.examinerPassportPhoto = req.files?.examinerPassportPhoto[0]?.filename;
    }
    if (req.files?.examinerVerificationPhoto) {
      updatedProfile.examinerVerificationPhoto = req.files?.examinerVerificationPhoto[0]?.filename;
    }
    if (req.files?.examinerProfilePhoto) {
      updatedProfile.examinerProfilePhoto = req.files?.examinerProfilePhoto[0]?.filename;
    }

    // Fetch the examiner's profile from the database
    const profile = await examinerModel.findById(req.user._id);

    // Check if fieldsToUpdate exists and initialize it if necessary
    if (!profile.fieldsToUpdate) {
      profile.fieldsToUpdate = {};
    }
    // Update fieldsToUpdate with the merged values
    Object.assign(profile.fieldsToUpdate, updatedProfile, { updatedAt: Date.now() });
    console.log(profile.fieldsToUpdate)  
    // Save the updated profile
    await profile.save();

    return res.status(200).json({
      status: 'success',
      message: 'Wait for the admin approval for these updates',
    });

});
