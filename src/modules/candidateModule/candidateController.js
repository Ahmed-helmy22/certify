
import {signToken, decodeToken} from '../../utils/createToken.js'
import { sendEmail } from '../../utils/email.js';
import { emailTemplate } from '../../utils/emailHtml.js';
import { resetPsswordTemplate } from '../../utils/resetPasswordHtml.js';
import AppErr from '../../utils/AppErr.js';

import catchAsync from '../../utils/catchAsync.js';
import { generateAuthCode } from '../../utils/generateAuthCode.js';
import { deleteMultipleFiles } from '../../utils/deletePhotos.js';
import bcrypt from 'bcrypt';
import candidateModel from '../../../database/models/candidateModel.js';
import candidateBadgeModel from '../../../database/models/candidateBadgeModel.js';
import mongoose from 'mongoose';




export const signup = catchAsync(async (req, res, next) => {
  const { userAgreement } = req.body;

  if (!userAgreement) {
    return next(new AppErr('Please mark user agreement button if you agree to our terms', 400));
  }

  const candidate = await candidateModel.findOne({email : req.body.email});
  if (candidate) {
    return next(new AppErr('your email is already exist', 400)) 
  }

  const authCode = generateAuthCode();
  console.log(req.files)
  if (req.files?.candidatePassportPhoto) req.body.candidatePassportPhoto = req.files?.candidatePassportPhoto[0].filename;
  if (req.files?.candidateVerificationPhoto)req.body.candidateVerificationPhoto = req.files?.candidateVerificationPhoto[0]?.filename;
  if (req.files?.candidateProfilePhoto) req.body.candidateProfilePhoto = req.files?.candidateProfilePhoto[0]?.filename;
  req.body.verificatinCode = authCode;
  req.body.verificationCodeExpires = new Date(Date.now() + 24 * 60 * 60 * 1000) 
 
  const newcandidate = await candidateModel.create(req.body);

  if(!newcandidate)
      return next(new AppErr('fail to signup try again later', 400));


  try { 
    await sendEmail({ email: req.body.email, template: emailTemplate(authCode) });
  } catch (err) {
     await deleteMultipleFiles('candidate' ,
      [req.body.candidatePassportNumber ,
        req.body.candidatePassportPhoto,
        req.body.candidateVerificationPhoto,
        req.body.candidateProfilePhoto]);
        await candidateModel.findByIdAndDelete(newcandidate._id)
    return next(new AppErr('Sorry, there is a problem with sending the verification email', 400));
  }

  return res.status(201).json({
    status: 'success',
    message : 'you are signed up successfully , please verify your email'
  });
});





export const getCandidateProfile=catchAsync(async(req, res, next)=>{
  const {candidateId , email}= req.body

  if(!candidateId && !email )
     return next(new AppErr('please enter email or registration number', 400))
  if(candidateId && email )
    return next(new AppErr('please search by one field', 400));
    const candidateFilter = (!email && candidateId)
    ? { _id: candidateId }
    : (email && !candidateId)
      ? { email }
      : null;
  
  if (!candidateFilter) {
    return next(new AppErr('Invalid parameters for candidate lookup', 400));
  }
  
  const candidate = await candidateModel.findOne({
    $and: [
      candidateFilter,
      { status: 'approved' }
    ]
  }).select('_id firstName middleName familyName DOBirth gender phoneNumber occupation email address qualification city country POBox candidateProfilePhoto');
  
  if (!candidate) {
    return next(new AppErr('This candidate does not exist or is not activated', 400));
  }


  return res.status(200).json({
    status: 'success',
    candidate
  });
  
})


export const getMyProfile=catchAsync(async(req, res, next)=>{
  if (!req?.user || req?.user.status !== 'approved') 
   return next(new AppErr('you are no logged in or your email is not activated, please login or wait your account to be activated', 401))
  const candidate = await candidateModel.findById(req.user._id).select('_id firstName middleName familyName DOBirth gender phoneNumber occupation email address qualification city country POBox candidateProfilePhoto');
        return res.status(200).json({
          status: 'success',
          candidate
        });
});



export const getMyValidBadges = catchAsync(async (req, res, next) => {
  const currentDate = new Date()
  const allValidBadges = await candidateBadgeModel.aggregate([
    {
      $match: {
       status : 'published',
        candidateId : req.user?._id ,
        dueDate: { $gte: currentDate }
      },
    },
    {
      $addFields: {
        year: { $year: '$createdAt' },
      },
    },
    {
      $sort: { year: 1 },
    },
    {
      $group: {
        _id: '$year',
        documents: { $push: '$$ROOT' },
      },
    },
  ]);
 
  if (!allValidBadges.length) {
    return next(new AppErr('No valid badges found', 404));
  }

  return res.status(200).json({ status: 'success', allValidBadges });
});


export const getCandidateValidBadges = catchAsync(async (req, res, next) => {
  const candidateId =new mongoose.Types.ObjectId(req.params.candidateId);
  if(!candidateId) return next(new AppErr("please send the id of the candidate to get it's invalid Badges", 400));;
  const currentDate = new Date();
  const allValidBadges = await candidateBadgeModel.aggregate([
    {
      $match: {
        status : 'published',
        candidateId: candidateId,
        $or: [
          { dueDate: null },
          { dueDate: { $gte: currentDate } }, 
        ],
      },
    },
    {
      $addFields: {
        year: { $year: '$createdAt' },
      },
    },
    {
      $sort: { year: 1 },
    },
    {
      $group: {
        _id: '$year',
        documents: { $push: '$$ROOT' },
      },
    },
  ]);
  console.log(allValidBadges);
  if (!allValidBadges.length) {
    return next(new AppErr('No valid badges found', 404));
  }

  return res.status(200).json({ status: 'success', data: allValidBadges });
});


export const getAllBadgesForCandidate = catchAsync(async (req, res, next) => {
  const candidateId = new mongoose.Types.ObjectId(req.params.candidateId);
  if (!candidateId) return next(new AppErr("Please send the ID of the candidate to get their badges", 400));

  const allBadges = await candidateBadgeModel.aggregate([
    {
      $match: {
        candidateId: candidateId,
      },
    },
    {
      $addFields: {
        year: { $year: '$createdAt' },
      },
    },
    {
      $sort: { year: 1 },
    },
    {
      $group: {
        _id: '$year',
        documents: { $push: '$$ROOT' },
      },
    },
  ]);

  const candidate = await candidateModel.findById(candidateId); // Assuming you have a model named candidateModel for candidate data

  console.log(allBadges);

  if (!candidate) {
    return next(new AppErr('Candidate not found', 404));
  }

  return res.status(200).json({ status: 'success', data: { candidate, badges: allBadges } });
});

export const getMyAllBadges = catchAsync(async (req, res, next) => {

  const allBadges = await candidateBadgeModel.aggregate([
    {
      $match: {
        candidateId: req.user._id,
      },
    },
    {
      $addFields: {
        year: { $year: '$createdAt' },
      },
    },
    {
      $sort: { year: 1 },
    },
    {
      $group: {
        _id: '$year',
        documents: { $push: '$$ROOT' },
      },
    },
  ]);

  const candidate = await candidateModel.findById(req.user._id); // Assuming you have a model named candidateModel for candidate data

  return res.status(200).json({ status: 'success', data: { candidate, badges: allBadges } });
});

export const getCandidateInvalidBadges = catchAsync(async (req, res, next) => {
  const candidateId =new mongoose.Types.ObjectId(req.params.candidateId);
  if(!candidateId) return next(new AppErr("please send the id of the candidate to get it's invalid Badges", 400));
  const currentDate = new Date();
  const allInvalidBadges = await candidateBadgeModel.aggregate([
    {
      $match: {
       status : 'published',
        candidateId : candidateId ,
        dueDate: { $lt: currentDate }
      },
    },
    {
      $addFields: {
        year: { $year: "$dueDate" },
      },
    },
    {
      $sort: { year: 1 },
    },
    {
      $group: {
        _id: "$year",
        documents: { $push: "$$ROOT" },
      },
    },
  ]);

  if (!allInvalidBadges.length) return next(new AppErr('No invalid badges yet', 404));

  return res.status(200).json({ status: 'success', data: allInvalidBadges });
});


export const getMyInvalidBadges = catchAsync(async (req, res, next) => {
  const currentDate = new Date();
  const allInvalidBadges = await candidateBadgeModel.aggregate([
    {
      $match: {
       status : 'published',
        candidateId :req.user?._id,
        dueDate: { $lt: currentDate }
      },
    },
    {
      $addFields: {
        year: { $year: "$dueDate" },
      },
    },
    {
      $sort: { year: 1 },
    },
    {
      $group: {
        _id: "$year",
        documents: { $push: "$$ROOT" },
      },
    },
  ]);
  
  console.log(allInvalidBadges);

  if (!allInvalidBadges.length) return next(new AppErr('No invalid badges yet', 404));

  return res.status(200).json({ status: 'success', data: allInvalidBadges });
});
