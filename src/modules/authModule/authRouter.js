import Express from 'express';
import * as authController from './authController.js';

const authRouter = Express.Router();

authRouter.get('/current-user' , authController.getCurrentUser)

export default authRouter;