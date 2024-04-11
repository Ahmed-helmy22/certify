import AppErr from "./AppErr.js";
import catchAsync from "./catchAsync.js";
import { createSendToken } from "./createSendToken.js";

// Factory function for creating email verification middleware
export const verifyEmail= (UserModel) => {
    return catchAsync(async (req, res, next) => {
      const { verificationCode } = req.body;
    
      const user = await UserModel.findOne({ verificationCode });
  
      // Check if the user and the verification code are valid
      if (!user || !user.verificationCodeExpires || Date.now() > user.verificationCodeExpires) {
        return next(new AppErr('Invalid or expired verification code', 400));
      }

      user.isEmailVerified = true;
      user.verificatinCode = undefined;
      user.verificationCodeExpires = undefined;
      await user.save();

      
      createSendToken(user, 200, res);
    });
  };
  