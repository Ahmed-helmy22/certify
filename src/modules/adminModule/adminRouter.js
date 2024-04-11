import Express from 'express';
import {  deleteExaminer, deleteProvider, editExaminer, editProvider, getAllPendingBadges, getAllProvidersInfo, getAllPublishedBadges, getExaminer, getProvider } from './adminController.js';
import { fileUpload } from '../../middelwares/fileUpload.js';


const adminRouter = Express.Router();

adminRouter.get('/getPendingBadges' , getAllPendingBadges )
adminRouter.get('/getpublishedBadges' , getAllPublishedBadges )
adminRouter.get('/getAllProvidersInfo' , getAllProvidersInfo )
adminRouter.delete('/deleteProvider/:providerId' , deleteProvider)
adminRouter.get('/ViewProvider/:providerId' , getProvider)
adminRouter.patch('/editProvider/:providerId' , fileUpload('logo' , 'provider') , editProvider)
adminRouter.delete('/deleteExaminer/:examinerId' , deleteExaminer)
adminRouter.get('/ViewExaminer/:examinerId' , getExaminer)
adminRouter.patch('/editExaminer/:examinerId' , fileUpload('examinerProfilePhoto' , 'examiner') , editExaminer)


export default adminRouter;