import mongoose from "mongoose";
import candidateBadgeModel from "../../../database/models/candidateBadgeModel.js";
import providerModel from "../../../database/models/providerModel.js";
import AppErr from "../../utils/AppErr.js";
import catchAsync from "../../utils/catchAsync.js";
import examinerModel from "../../../database/models/examinerModel.js";

export const getAllPendingBadges = catchAsync(async (req, res, next) => {
    try {
      const allPendingBadges = await candidateBadgeModel.aggregate([
        {
          $match: {
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
          $lookup: {
            from: 'providers',
            localField: 'providerId',
            foreignField: '_id',
            as: 'provider',
          },
        },
        {
          $unwind: '$provider',
        },
        {
          $project: {
            _id: 0,
            candidateId: '$candidate._id',
            candidateName: {
              $concat: [
                '$candidate.firstName',
                ' ',
                { $ifNull: ['$candidate.middleName', ''] },
                ' ',
                '$candidate.familyName',
              ],
            },
            examinerId: '$examiner._id',
            country: '$candidate.country',
            examinerName: {
              $concat: [
                '$examiner.firstName',
                ' ',
                { $ifNull: ['$examiner.middleName', ''] },
                ' ',
                '$examiner.familyName',
              ],
            },
            providerId: '$provider._id',
            organizationName: '$provider.OrganizationName',
            candidateBadgeId: '$_id',
          },
        },
      ]);
  
      if (!allPendingBadges.length) {
        console.log('No pending badges found.');
        return next(new AppErr('No pending badges yet', 404));
      }
  
      return res.status(200).json({ status: 'success', allPendingBadges });
    } catch (error) {
      return next(new AppErr('Internal server error', 500));
    }
  });
  



  export const getAllPublishedBadges = catchAsync(async (req, res, next) => {
    try {
      const allPendingBadges = await candidateBadgeModel.aggregate([
        {
          $match: {
            status: 'published',
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
          $lookup: {
            from: 'providers',
            localField: 'providerId',
            foreignField: '_id',
            as: 'provider',
          },
        },
        {
          $unwind: '$provider',
        },
        {
          $project: {
            _id: 0,
            candidateId: '$candidate._id',
            candidateName: {
              $concat: [
                '$candidate.firstName',
                ' ',
                { $ifNull: ['$candidate.middleName', ''] },
                ' ',
                '$candidate.familyName',
              ],
            },
            examinerId: '$examiner._id',
            country: '$candidate.country',
            examinerName: {
              $concat: [
                '$examiner.firstName',
                ' ',
                { $ifNull: ['$examiner.middleName', ''] },
                ' ',
                '$examiner.familyName',
              ],
            },
            providerId: '$provider._id',
            organizationName: '$provider.OrganizationName',
            candidateBadgeId: '$_id',
          },
        },
      ]);
  
      if (!allPendingBadges.length) {
        console.log('No pending badges found.');
        return next(new AppErr('No pending badges yet', 404));
      }
  
      return res.status(200).json({ status: 'success', allPendingBadges });
    } catch (error) {
      return next(new AppErr('Internal server error', 500));
    }
  });





  export const getAllProvidersInfo = catchAsync(async (req, res, next) => {
    try {
      const providersInfo = await providerModel.aggregate([
        {
          $lookup: {
            from: 'badges',
            localField: '_id',
            foreignField: 'providerId',
            as: 'badges',
          },
        },
        {
          $project: {
            _id: 1,
            OrganizationName: 1,
            Logo: 1,
            country: 1,
            status: 1,
            numIssuedBadges: { $size: '$badges' },
          },
        },
      ]);
      if (!providersInfo.length) 
        return next(new AppErr('No academy found.', 404));
      
      return res.status(200).json({ status: 'success', providersInfo });
    } catch (error) {
      return next(new AppErr('Internal server error', 500));
    }
  });
  


  export const deleteProvider = catchAsync(async (req, res, next) => {
    const providerId = req.params.providerId;
    if (!mongoose.Types.ObjectId.isValid(providerId)) {
      return next(new AppErr('Invalid provider ID', 400));
    }
    const deletedProvider = await providerModel.findByIdAndDelete(providerId);

    if (!deletedProvider) {
      return next(new AppErr('Provider not found', 404));
    }
    return res.status(204).json({ status: 'success', data: null });
});



export const getProvider = catchAsync(async (req, res, next) => {
    const providerId = req.params.providerId;


    if (!mongoose.Types.ObjectId.isValid(providerId)) {
      return next(new AppErr('Invalid provider ID', 400));
    }

    // Find the provider by ID
    const provider = await providerModel.findById(providerId);

    if (!provider) {
      return next(new AppErr('Provider not found', 404));
    }

    return res.status(200).json({ status: 'success', data: provider });
});



export const editProvider = catchAsync(async (req, res, next) => {
    const providerId = req.params.providerId;

    if(req.file?.filename) req.body.logo = req.file.filename

    if (!mongoose.Types.ObjectId.isValid(providerId)) {
      return next(new AppErr('Invalid provider ID', 400));
    }

    // Find and update the provider by ID
    const updatedProvider = await providerModel.findByIdAndUpdate(providerId,req.body,{ new: true, runValidators: true }
    );

    if (!updatedProvider) {
      return next(new AppErr('Provider not found', 404));
    }

    return res.status(200).json({ status: 'success', data: updatedProvider });
});


///////////////////////////////////////////




export const deleteExaminer = catchAsync(async (req, res, next) => {
  const examinerId = req.params.examinerId;

  if (!mongoose.Types.ObjectId.isValid(examinerId)) {
    return next(new AppErr('Invalid examiner ID', 400));
  }

  const deletedExaminer = await examinerModel.findByIdAndDelete(examinerId);

  if (!deletedExaminer) {
    return next(new AppErr('Examiner not found', 404));
  }

  return res.status(204).json({ status: 'success', data: null });
});


export const getExaminer = catchAsync(async (req, res, next) => {
  const examinerId = req.params.examinerId;

  if (!mongoose.Types.ObjectId.isValid(examinerId)) {
    return next(new AppErr('Invalid examiner ID', 400));
  }

  // Find the examiner by ID
  const examiner = await examinerModel.findById(examinerId);

  if (!examiner) {
    return next(new AppErr('Examiner not found', 404));
  }

  return res.status(200).json({ status: 'success', data: examiner });
});


export const editExaminer = catchAsync(async (req, res, next) => {
  const examinerId = req.params.examinerId;

  if(req.file?.filename) req.body.examinerProfilePhoto = req.file.filename;

  if (!mongoose.Types.ObjectId.isValid(examinerId)) {
    return next(new AppErr('Invalid examiner ID', 400));
  }

  // Find and update the examiner by ID
  const updatedExaminer = await examinerModel.findByIdAndUpdate(
    examinerId,
    req.body,
    { new: true, runValidators: true }
  );

  if (!updatedExaminer) {
    return next(new AppErr('Examiner not found', 404));
  }

  return res.status(200).json({ status: 'success', data: updatedExaminer });
});