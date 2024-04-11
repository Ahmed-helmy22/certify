
import examinerModel from '../../../database/models/examinerModel.js';
import candidateModel from '../../../database/models/candidateModel.js';
import badgeModel from '../../../database/models/badgeModel.js';
import AppErr from '../../utils/AppErr.js';
import catchAsync from '../../utils/catchAsync.js';
import candidateBadgeModel from '../../../database/models/candidateBadgeModel.js';
import { deleteMultipleFiles } from '../../utils/deletePhotos.js';
import mongoose from 'mongoose';
import providerModel from '../../../database/models/providerModel.js';



export const addBage = catchAsync(async (req, res, next) => {
        const { title, department } = req.body
        const badgePhoto = req.file?.filename


        const providerId = req.user._id

        if (!badgePhoto || !providerId)
                return next(new AppErr('error in uploading padge photo , try again please!!', 400))
        const newBadge = await badgeModel.create({ title, department, badgePhoto, providerId });
        if (!newBadge)
                return next(new AppErr('fail to create new badge', 400))
        return res.status(201).json({ status: 'success', data: newBadge })
})

export const addBadgeTocandidate = catchAsync(async (req, res, next) => {
        const { candidateId, badgeId, grade, issueDate, dueDate, examinerId, internalBadgeNum, note } = req.body;
        const providerId = req.user?._id.toString()

        const candidateExists = await candidateModel.findById(candidateId);
        if (!candidateExists)
                return next(new AppErr('candidate is not found please ensure the data', 400));
        const badgeExists = await badgeModel.findById(badgeId);
        if (!badgeExists)
                return next(new AppErr('badge  is not found please , ensure the data', 400));
        const examinerExists = await examinerModel.findById(examinerId);
        if (!examinerExists)
                return next(new AppErr('the examiner is not found please , ensure the data', 400));
        const newCandidateBadge = await candidateBadgeModel.create({ candidateId, badgeId, providerId, grade, issueDate, dueDate, examinerId, internalBadgeNum, note });
        if (!newCandidateBadge)
                return next(new AppErr('fail to award badge to candidate', 400))
        return res.status(201).json({ status: 'success', data: newCandidateBadge })
})



export const getAllBadgesForProvider = catchAsync(async (req, res, next) => {
        const allBadges = await badgeModel.aggregate([
                {
                        $match: { providerId: req.user?._id }
                },
                {
                        $addFields: {
                                year: { $year: "$createdAt" }
                        }
                },
                {
                        $sort: { "year": 1 }
                },
                {
                        $group: {
                                _id: "$year", // Group by year
                                documents: { $push: "$$ROOT" } // Push documents into an array
                        }
                }
        ])
        if (!allBadges.length) return next(new AppErr('no badges yet', 404))

        return res.status(200).json({ status: 'success', data: allBadges })
})

export const getAllBadgesForProviderInList = catchAsync(async (req, res, next) => {
        const allBadges = await badgeModel.find({providerId : req.user?._id})
        if (!allBadges) return next(new AppErr('no badges yet', 404))

        return res.status(200).json({ status: 'success', data: allBadges })
})




// Update Badge
export const updateBadge = catchAsync(async (req, res, next) => {
        const { title, department } = req.body;
        const badgeId = req.params.badgeId;
        const badge = await badgeModel.findById(badgeId);

        if (!badge) {
                return next(new AppErr('Badge not found', 404));
        }

        badge.title = title || badge.title;
        badge.department = department || badge.department;

        const updatedBadge = await badge.save();

        return res.status(200).json({ status: 'success', updatedBadge });
});



// Delete Badge
export const deleteBadge = catchAsync(async (req, res, next) => {
        const badgeId = req.params.badgeId;
        const badge = await badgeModel.findByIdAndDelete(badgeId);

        if (!badge) {
                return next(new AppErr('Badge not found', 404));
        }

        return res.status(204).json({ status: 'success', message: "badge is deleted successflly" });
});

// View Badge
export const viewBadge = catchAsync(async (req, res, next) => {
        const badgeId = req.params.badgeId;
        const badge = await badgeModel.findById(badgeId);

        if (!badge) {
                return next(new AppErr('Badge not found', 404));
        }

        return res.status(200).json({ status: 'success', badge });
});



// Update Badge Photo
export const updateBadgePhoto = catchAsync(async (req, res, next) => {
        const badgeId = req.params.badgeId;
        const badge = await badgeModel.findById(badgeId);

        if (!badge) {
                return next(new AppErr('Badge not found', 404));
        }

        const newBadgePhoto = req.file?.filename;
        if (!newBadgePhoto) {
                return next(new AppErr('No badge photo provided', 400));
        }

        if (badge.badgePhoto) {
                deleteMultipleFiles('badge', [badge.badgePhoto])
        }

        // Update the badge with the new photo
        badge.badgePhoto = newBadgePhoto;

        const updatedBadge = await badge.save();

        return res.status(200).json({ status: 'success', updatedBadge });
});



