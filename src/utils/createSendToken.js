import { signToken } from "./createToken.js";

export const createSendToken = (user, statusCode, res) => {
    const token = signToken({_id :user._id , isEmailVerified : user.isEmailVerified , status : user.status , role : user.role});
    const cookieOptions = {
      expiresIn: new Date(
        Date.now() + process.env.TIME_COOKIE_JWT_EXPIRES_IN * 24 * 60 * 60
      ),
      httpOnly: true,
    };
   
    if (process.env.NODE_ENV === 'production') cookieOptions.secure = true;
    user.password = undefined;
  
    res.cookie('jwt', token, cookieOptions);
    return res.status(statusCode).json({
      status: 'success',
    });
  };