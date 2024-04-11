import express from 'express';
import * as providerController from './providerController.js';
import * as authController from '../authModule/authController.js';
import {multiFileUpload} from '../../middelwares/fileUpload.js'
import { createProtectMiddleware, restrictTo } from '../../middelwares/authMiddleware.js';
import providerModel from '../../../database/models/providerModel.js';


const providerRouter = express.Router();

providerRouter.post('/signup', multiFileUpload(
    [
      { name: 'adminProfilePhoto', maxCount: 1 },
      { name: 'adminVerificationPhoto', maxCount: 1 },
      { name: 'adminPassportPhoto', maxCount: 1 },
      { name: 'logo', maxCount: 1 },
    ],
    'provider'
  ), providerController.signup);
  
providerRouter.post('/verifyEmail', authController.verifyEmail(providerModel))
providerRouter.post('/login', authController.login(providerModel));



providerRouter.post(
  '/forgetPassword',
  authController.forgetPassword(providerModel)
);
providerRouter.patch(
  '/resetPassword/:token',
  authController.resetPassword(providerModel)
);
providerRouter.patch(
  '/updatePassword', createProtectMiddleware(providerModel) , restrictTo('provider'),
  authController.updatePassword(providerModel)
);


providerRouter.get('/getCanandidatesBadges' , createProtectMiddleware(providerModel), restrictTo('provider'),
providerController.getAllCandidatesWithBadgesForProvider);


providerRouter.get('/getPendingBadges', createProtectMiddleware(providerModel),restrictTo('provider'),
providerController.getAllCandidatesWithpendingBadgesForProvider);


providerRouter.get('/getDeclinedBadges',createProtectMiddleware(providerModel),restrictTo('provider'),
 providerController.getDeclinedBadgesForProvider);


providerRouter.delete('/deleteDeclinedBadges/:candidateBadgeId',createProtectMiddleware(providerModel),restrictTo('provider'), 
providerController.deleteCandidateBadgeForProvider);

providerRouter.patch('/updateDeclinedBadges/:candidateBadgeId', createProtectMiddleware(providerModel),restrictTo('provider'),
providerController.editCandidateBadgeForProvider);

providerRouter.get('/viewCandidateBadge/:candidateBadgeId', createProtectMiddleware(providerModel),restrictTo('provider'),
providerController.viewCandidateBadgeForProvider);


export default providerRouter;