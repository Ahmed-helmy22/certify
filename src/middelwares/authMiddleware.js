
import AppErr from '../utils/AppErr.js';
import { decodeToken } from '../utils/createToken.js';

export const createProtectMiddleware = (model) => {
  return async (req, res, next) => {
    let token;
    if (
      req.headers.cookie &&
      req.headers.cookie.startsWith('jwt')
    ) {
      token = req.headers.cookie.split('=')[1];
    }
    if (!token) {
      return next(new AppErr('you have no token , please log in', 401));
    }
    const decoded = decodeToken(token);
    if (!decoded)return next(new AppErr('your token is expired , please login again ', 401))
    const user = await model.findOne({ _id: decoded._id });

    if (!user) return next(new AppErr('the user of this token is no longer exist', 401));
    if (!user.isEmailVerified) return next(new AppErr('your email is not verified, please verify your email', 401));
    if (user.status !== 'approved') return next(new AppErr('your account is not activated please wait the admin activation', 401))
    
    if (user.passwordChangedAt) {
     const changePassTime = parseInt(user.passwordChangedAt.getTime() / 1000, 10);
      if(decoded.iat < changePassTime)return next(new AppErr('your password is changed please login', 401))
    }

      req.user = user;
      next();
   
  };
};


export const restrictTo = (...role) => {
  return (req, res, next) => {
    if (!role.includes(req.user.role))return next(new AppErr('Not authorized. Insufficient permissions', 402));
    next();
  };
};
