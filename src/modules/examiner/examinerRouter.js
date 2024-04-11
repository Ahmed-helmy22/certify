import express from 'express';
import * as examinerController from './examinerController.js';
import * as authController from '../authModule/authController.js';
import { multiFileUpload } from '../../middelwares/fileUpload.js'
import { createProtectMiddleware, restrictTo } from '../../middelwares/authMiddleware.js';
import examinerModel from '../../../database/models/examinerModel.js';


const examinerRouter = express.Router();

examinerRouter.post('/signup', multiFileUpload(
  [
    { name: 'examinerPassportPhoto', maxCount: 1 },
    { name: 'examinerVerificationPhoto', maxCount: 1 },
    { name: 'examinerProfilePhoto', maxCount: 1 },
  ],
  'examiner'
), examinerController.signup);


examinerRouter.post('/verifyEmail', authController.verifyEmail(examinerModel))
examinerRouter.post('/login', authController.login(examinerModel));

examinerRouter.post('/forgetPassword', authController.forgetPassword(examinerModel));
examinerRouter.patch('/resetPassword/:token', authController.resetPassword(examinerModel)
);
examinerRouter.patch('/updatePassword', createProtectMiddleware(examinerModel), authController.updatePassword(examinerModel));


examinerRouter.get('/candidateBadges', createProtectMiddleware(examinerModel), restrictTo('examiner'),
  examinerController.getAllExaminerCandidateBadges);


examinerRouter.get('/approveCandidateBadge/:candidateBadgeId', createProtectMiddleware(examinerModel), restrictTo('examiner'),
  examinerController.ExaminerApproveCandidateBadge)

examinerRouter.get('/declineCandidateBadge/:candidateBadgeId', createProtectMiddleware(examinerModel), restrictTo('examiner'),
  examinerController.ExaminerDeclineCandidateBadge);

examinerRouter.get('/viewCandidateBadge/:candidateBadgeId', createProtectMiddleware(examinerModel), restrictTo('examiner'),
  examinerController.examinerViewCandidateBadge)
examinerRouter.post('/updateMyProfile', createProtectMiddleware(examinerModel), restrictTo('examiner'),
  examinerController.updateMyProfile)


export default examinerRouter;