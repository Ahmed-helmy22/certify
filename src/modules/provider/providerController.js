
import {signToken, decodeToken} from '../../utils/createToken.js'
import { sendEmail } from '../../utils/email.js';
import { emailTemplate } from '../../utils/emailHtml.js';
import { resetPsswordTemplate } from '../../utils/resetPasswordHtml.js';
import AppErr from '../../utils/AppErr.js';
import providerModel from '../../../database/models/providerModel.js';
import catchAsync from '../../utils/catchAsync.js';
import { generateAuthCode } from '../../utils/generateAuthCode.js';
import { deleteMultipleFiles } from '../../utils/deletePhotos.js';
import bcrypt from 'bcrypt';
import mongoose from 'mongoose';
import badgeModel from '../../../database/models/badgeModel.js';
import candidateBadgeModel from '../../../database/models/candidateBadgeModel.js';
import { createSendToken } from '../../utils/createSendToken.js';



export const signup = catchAsync(async (req, res, next) => {
  const { userAgreement } = req.body;
  console.log(req.files, 'sssssssssssssssssssssssss');
  if (!userAgreement) {
    return next(new AppErr('Please mark user agreement button if you agree to our terms', 400));
  }

  const provider = await providerModel.findOne({email : req.body.email});
  if (provider) {
   return next(new AppErr('your email is already exist', 400)) 
  }

  const authCode = generateAuthCode();
  if(req.files?.logo)req.body.logo = req.files?.logo[0]?.filename;
  
  req.body.verificatinCode = authCode;
  req.body.verificationCodeExpires = new Date(Date.now() + 24 * 60 * 60 * 1000) // Set expiration to 24 hours from now

  req.body.providerAdminInfo = {
    firstName: req.body.firstName,
    middleName: req.body.middleName,
    familyName: req.body.familyName,
    adminGender: req.body.adminGender,
    DOBirth: req.body.DOBirth,
    adminRole: req.body.adminRole,
    adminPhoneNumber: req.body.adminPhoneNumber,
    adminAddress: req.body.adminAddress,
    adminCountry: req.body.adminCountry,
    adminPOBox: req.body.adminPOBox,
    adminCity: req.body.adminCity,
    adminPassportNumber: req.body.adminPassportNumber,
    adminPassportPhoto: req.body.adminPassportPhoto,
    adminVerificationPhoto: req.body.adminVerificationPhoto,
    adminProfilePhoto: req.body.adminProfilePhoto,
  };

  delete req.body.firstName;
  delete req.body.middleName;
  delete req.body.familyName;
  delete req.body.adminGender;
  delete req.body.DOBirth;
  delete req.body.adminRole;
  delete req.body.adminPhoneNumber;
  delete req.body.adminAddress;
  delete req.body.adminCountry;
  delete req.body.adminPOBox;
  delete req.body.adminCity;
  delete req.body.adminPassportNumber;
  delete req.body.adminPassportPhoto;
  delete req.body.adminVerificationPhoto;
  delete req.body.adminProfilePhoto;

  console.log(req.files , 'filessssssssssssssssssssssssss');
  
  const newProvider= await providerModel.create(req.body);
  if(!newProvider)
      return next(new AppErr('fail to signup try again later', 400));

 
  try {
    await sendEmail({ email: req.body.email, template: emailTemplate(authCode) });

  } catch (err) {
     await deleteMultipleFiles('provider' ,
      [req.body.logo])
      await providerModel.findByIdAndDelete(newProvider._id)
        return next(new AppErr('Sorry, there is a problem with sending the verification email', 400));
  }


  return res.status(201).json({
    status: 'success',
    message : 'you are signed up successfully , please verify your email',
  });
});







  export const getAllCandidatesWithBadgesForProvider = catchAsync(async (req, res, next) => {
    try {
      const allBadgeHolders = await candidateBadgeModel.aggregate([
        {
          $match: {
            providerId: req.user?._id,
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
   {
        $group: {
          _id: {
            candidateId: '$candidateId',
          },
          firstName: { $first: '$candidate.firstName' },
          middleName: { $first: '$candidate.middleName' },
          familyName: { $first: '$candidate.familyName' },
          country : { $first: '$candidate.country' },
          dateOfBirth : { $first: '$candidate.DOBirth' },
          pendingCount: {
            $sum: {
              $cond: {
                if: { $eq: ['$status', 'pending'] },
                then: 1,
                else: 0,
              },
            },
          },
          publishedCount: {
            $sum: {
              $cond: {
                if: { $eq: ['$status', 'published'] },
                then: 1,
                else: 0,
              },
            },
          },
        },
      },
      {
        $project: {
          _id: 0,
          candidateId: '$_id.candidateId',
          firstName: '$firstName',
          middleName : '$middleName',
          familyName: '$familyName',
          country : '$country' ,
          dateOfBirth : '$dateOfBirth',
          pendingCount: '$pendingCount',
          publishedCount: '$publishedCount',
        },
      },
      ]);
  
      if (!allBadgeHolders.length) {
        return next(new AppErr('No candidates hold badges yet', 404));
      }
      return res.status(200).json({ status: 'success', allBadgeHolders });
    } catch (error) {
      return next(new AppErr('An error occurred while fetching candidates with badges', 500));
    }
  });
  
  
  
  
  
  // export const  getAllCandidatesWithpendingBadgesForProvider = catchAsync(async(req, res , next)=>{
  //         const allBadgeHoldersWithPending =  await candidateBadgeModel.aggregate([
  //                 {
  //                         $match: {
  //                           providerId : req.user?._id,
  //                           status: "pending",
  //                         },
  //                       },
  //                       {
  //                         $lookup: {
  //                           from: 'candidates',
  //                           localField: 'candidateId',
  //                           foreignField: '_id',
  //                           as: 'candidate',
  //                         },
  //                       },
  //                       {
  //                         $unwind: '$candidate',
  //                       },
  //                       {
  //                         $match: {
  //                           'candidate.isActive': true,
  //                         },
  //                       },
  //                       {
  //                         $lookup: {
  //                           from: 'badges',
  //                           localField: 'badgeId',
  //                           foreignField: '_id',
  //                           as: 'badge',
  //                         },
  //                       },
  //                       {
  //                         $unwind: '$badge',
  //                       },
  //                       {
  //                         $match: {
  //                           'badge.isActive': true,
  //                         },
  //                       },
  //                       {
  //                         $group: {
  //                           _id: {
  //                             candidateId: '$candidateId',
  //                             status: '$status',
  //                           },
  //                           count: { $sum: 1 },
  //                         },
  //                       },
  //                       {
  //                         $facet: {
  //                           pending: [
  //                             {
  //                               $match: {
  //                                 '_id.status': 'pending',
  //                               },
  //                             },
  //                             {
  //                               $project: {
  //                                 _id: 0,
  //                                 candidateId: '$_id.candidateId',
  //                                 count: '$count',
  //                               },
  //                             },
  //                           ],
  //                           published: [
  //                             {
  //                               $match: {
  //                                 '_id.status': 'published',
  //                               },
  //                             },
  //                             {
  //                               $project: {
  //                                 _id: 0,
  //                                 candidateId: '$_id.candidateId',
  //                                 count: '$count',
  //                               },
  //                             },
  //                           ],
  //                         },
  //                       },
  //                       {
  //                         $project: {
  //                           _id: 0,
  //                           candidateId: '$pending.candidateId',
  //                           firstName: '$candidate.firstName',
  //                           lastName: '$candidate.familyName',
  //                           pendingCount: '$pending.count',
  //                           publishedCount: '$published.count',
  //                         },
  //                       },
  //         ])
  // if(!allBadgeHoldersWithPending.length) return next(new AppErr('no pendeng badges yet' , 404))
  // return res.status(200).json({status : 'success' , data : allBadgeHoldersWithPending})
  // })
  
  export const  getAllCandidatesWithpendingBadgesForProvider =  catchAsync(async (req, res, next) => {
    try {
      const declinedBadges = await candidateBadgeModel.aggregate([
        {
          $match: {
            providerId: req.user?._id,
            status: 'pending',
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
            from: 'examiners',
            localField: 'examinerId',
            foreignField: '_id',
            as: 'examiner',
          },
        },
        {
          $unwind: '$examiner',
        },
        {
          $project: {
            _id: 1,  // Include the _id of the CandidateBadge document
            candidateId: '$candidate._id',
            candidateFirstName: '$candidate.firstName',
            candidateMiddleName: '$candidate.middleName',
            candidateFamilyName: '$candidate.familyName',
            candidateCountry: '$candidate.country',
            candidateDateOfBirth: '$candidate.DOBirth',
            examinerId: '$examiner._id',
            examinerFirstName: '$examiner.firstName',
            examinerMiddleName: '$examiner.middleName',
            examinerLastName: '$examiner.familyName',
            internalBadgeNum: '$internalBadgeNum',  // Include internalBadgeNum
            grade: '$grade',  // Include grade
            issueDate: '$issueDate',  // Include issueDate
            dueDate: '$dueDate',  // Include dueDate
            note: '$note',  // Include note
          },
        },
      ]);
  
      if (!declinedBadges.length) {
        return next(new AppErr('No pending badges found', 404));
      }
      
      console.log('ssssssssssssss',declinedBadges);
      return res.status(200).json({ status: 'success', data: declinedBadges });
    } catch (error) {
      return next(new AppErr('An error occurred while fetching pending badges', 500));
    }
  });
  
  export const getDeclinedBadgesForProvider = catchAsync(async (req, res, next) => {
    try {
      const declinedBadges = await candidateBadgeModel.aggregate([
        {
          $match: {
            providerId: req.user?._id,
            status: 'declined',
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
            from: 'examiners',
            localField: 'examinerId',
            foreignField: '_id',
            as: 'examiner',
          },
        },
        {
          $unwind: '$examiner',
        },
        {
          $project: {
            _id: 1,  // Include the _id of the CandidateBadge document
            candidateId: '$candidate._id',
            candidateFirstName: '$candidate.firstName',
            candidateMiddleName: '$candidate.middleName',
            candidateFamilyName: '$candidate.familyName',
            candidateCountry: '$candidate.country',
            candidateDateOfBirth: '$candidate.DOBirth',
            examinerId: '$examiner._id',
            examinerFirstName: '$examiner.firstName',
            examinerMiddleName: '$examiner.middleName',
            examinerLastName: '$examiner.familyName',
            internalBadgeNum: '$internalBadgeNum',  // Include internalBadgeNum
            grade: '$grade',  // Include grade
            issueDate: '$issueDate',  // Include issueDate
            dueDate: '$dueDate',  // Include dueDate
            note: '$note',  // Include note
          },
        },
      ]);
  
      if (!declinedBadges.length) {
        return next(new AppErr('No declined badges found', 404));
      }
  
      return res.status(200).json({ status: 'success', data: declinedBadges });
    } catch (error) {
      return next(new AppErr('An error occurred while fetching declined badges', 500));
    }
  });
  
  
  
  export const deleteCandidateBadgeForProvider = catchAsync(async(req, res, next)=> {
          const {candidateBadgeId} = req.params
          const candidateBadge = await candidateBadgeModel.findOne({_id : candidateBadgeId , providerId :req.user?._id})
          if(!candidateBadge) return next(new AppErr('no badge for this candidate' , 404))
          if(candidateBadge.status === 'published')return next(new AppErr('you have no permission to delete published badges' , 401))
          await candidateBadgeModel.findByIdAndDelete(candidateBadgeId);
          return res.status(200).json({status : 'success' , message : 'badge deleted successfully'})
  })
  

  
  export const editCandidateBadgeForProvider  = catchAsync(async(req, res, next)=>{
          const {candidateBadgeId} = req.params
          const candidateBadge = await candidateBadgeModel.findOne({_id : candidateBadgeId , providerId :req.user?._id})
          if(!candidateBadge) return next(new AppErr('no badge for this candidate' , 404))
          if(candidateBadge.status === 'published') return next(new AppErr('you have no permission to edit published badges' , 401));
          candidateBadge.note = req.body.note ? req.body.note : candidateBadge.note;
          candidateBadge.issueDate = req.body.issueDate ? req.body.issueDate : candidateBadge.issueDate;
          candidateBadge.dueDate = req.body.dueDate ? req.body.dueDate : candidateBadge.dueDate;
          candidateBadge.grade = req.body.grade ? req.body.grade : candidateBadge.grade ;
          candidateBadge.internalBadgeNum = req.body.internalBadgeNum ? req.body.internalBadgeNum : candidateBadge.internalBadgeNum;
          candidateBadge.examinerId = req.body.examinerId ? req.body.examinerId : candidateBadge.examinerId;
          candidateBadge.status = 'pending'
          await candidateBadge.save();
          return res.status(200).json({status : 'success' , message : 'badge updated successfully'})
  });


  export const viewCandidateBadgeForProvider  = catchAsync(async(req, res, next)=>{
    const {candidateBadgeId} = req.params;
    const candidateBadge = await candidateBadgeModel.findOne({_id : candidateBadgeId ,providerId :req.user?._id  })
    if(!candidateBadge) return next(new AppErr('no badge for this candidate' , 404));
    return res.status(200).json({status : 'success' , data : candidateBadge})
  })



