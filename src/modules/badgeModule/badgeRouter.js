import Express from 'express';
import * as badgeController from './badgeController.js';
import {fileUpload , multiFileUpload} from '../../middelwares/fileUpload.js'
import { createProtectMiddleware } from '../../middelwares/authMiddleware.js';
import providerModel from '../../../database/models/providerModel.js';

const badgeRouter = Express.Router();

// { name: 'badgePhoto', maxCount: 1 },
badgeRouter.post('/addBadge', createProtectMiddleware(providerModel),fileUpload('badgePhoto', 'badge'), badgeController.addBage);
badgeRouter.post('/addBadgeToCandidate', createProtectMiddleware(providerModel) , badgeController.addBadgeTocandidate);
badgeRouter.get('/getMyBadges',createProtectMiddleware(providerModel) ,  badgeController.getAllBadgesForProvider);
badgeRouter.get('/getMyBadgesInList',createProtectMiddleware(providerModel) ,  badgeController.getAllBadgesForProviderInList);

badgeRouter.patch('/updateBadge/:badgeId',createProtectMiddleware(providerModel) ,  badgeController.updateBadge);
badgeRouter.delete('/deleteBadge/:badgeId',createProtectMiddleware(providerModel) ,  badgeController.deleteBadge);
badgeRouter.get('/viewBadge/:badgeId',createProtectMiddleware(providerModel) ,  badgeController.viewBadge);
badgeRouter.patch('/updateBadgePhoto/:badgeId',createProtectMiddleware(providerModel)  , fileUpload('newBadgePhoto' , 'badge'),  badgeController.updateBadgePhoto);

export default badgeRouter;