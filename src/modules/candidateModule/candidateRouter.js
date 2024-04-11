import express from 'express';
import * as candidateController from './candidateController.js';
import * as authController from '../authModule/authController.js';
import {multiFileUpload} from '../../middelwares/fileUpload.js'
import candidateModel from '../../../database/models/candidateModel.js';
import { createProtectMiddleware, restrictTo } from '../../middelwares/authMiddleware.js';


const candidateRouter = express.Router();

candidateRouter.post('/signup', multiFileUpload(
    [
      { name: 'candidatePassportPhoto', maxCount: 1 },
      { name: 'candidateVerificationPhoto', maxCount: 1 },
      { name: 'candidateProfilePhoto', maxCount: 1 },
    ],
    'candidate'
  ), candidateController.signup);

  candidateRouter.post('/verifyEmail', authController.verifyEmail(candidateModel))
  candidateRouter.post('/login', authController.login(candidateModel));
  
  candidateRouter.post('/forgetPassword', authController.forgetPassword(candidateModel) );
  candidateRouter.patch('/resetPassword/:token',authController.resetPassword(candidateModel)
  );
  candidateRouter.patch( '/updatePassword', createProtectMiddleware(candidateModel) , authController.updatePassword(candidateModel));

  candidateRouter.get('/getMyProfile', createProtectMiddleware(candidateModel),restrictTo('candidate'), candidateController.getMyProfile);

  candidateRouter.post('/getCandidateProfile',candidateController.getCandidateProfile);

  // candidateRouter.get('/getMyValidBadges', createProtectMiddleware(candidateModel) ,restrictTo('candidate') ,candidateController.getMyValidBadges);

  // candidateRouter.get('/getValidBadges/:candidateId' ,candidateController.getCandidateValidBadges);
  candidateRouter.get('/getAllBadges/:candidateId' , candidateController.getAllBadgesForCandidate);
  candidateRouter.get('/getMyAllBadges' , createProtectMiddleware(candidateModel),restrictTo('candidate') , candidateController.getMyAllBadges);

  // candidateRouter.get('/getInvalidBadges/:candidateId' ,candidateController.getCandidateInvalidBadges);

  // candidateRouter.get('/getMyInvalidBadges' , createProtectMiddleware(candidateModel),restrictTo('candidate') , candidateController.getMyInvalidBadges);

export default candidateRouter;