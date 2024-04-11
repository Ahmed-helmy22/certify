import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const providerSchema = mongoose.Schema(
    {
      OrganizationName: { type: String, unique: [true, 'Organization Name is unique'], required: [true, 'Organization Name is required'] },
      address: { type: String },
      city: { type: String, required: [true, 'City is required'] },
      country: { type: String, required: [true, 'Country is required'] },
      webSite: { type: String, unique: true, required: [true, 'Website is required'] },
      POBox: { type: String, required: [true, 'P.O. Box is required'] },
      email: { type: String, required: [true, 'Email is required'], unique: [true, 'Email is unique'] },
      password: { type: String, required: [true, 'Password is required'], minlength: [8, 'password must be at least 10 characters'] , select : false },
      isEmailVerified: { type: Boolean, default: false },
      phoneNumber: { type: String, minlength: [5, 'Phone number must be at least 5 characters'], maxlength: [30, 'Phone number cannot exceed 30 characters'], required: [true, 'Phone number is required'] },
      verificationCodeExpires : {type : Date},
      status: { type: String, default: 'pending' , enum : ['approved' , 'pending' , 'suspended'] },
      logo: String,
      role: { type: String, enum: ['provider'] , default : 'provider'},
      verificatinCode:{type : String , length : [6,'verification code is 6 character']  ,},
      providerType : {type : String ,required: [true, 'provider type is required'], enum : ["GOVERNMENT" , "NONPROFIT ORG" , "PRIVATE ACADEMY"]},
      isLogedOut: { type: Boolean, default: false },  
      passwordResetToken: String,
      passwordResetExpires: Date,
      passwordChangedAt: Date,
      providerAdminInfo : {
        firstName : {type: String, required: [true, 'first Name of academy admin is required'] } ,
        middleName : {type: String, required: [true, 'middle Name of academy admin is required'] } ,
        familyName : {type: String, required: [true, 'family Name of academy admin is required'] } ,
        adminGender : {type : String },
        DOBirth : {type :Date , required : [true  ,'date of birth of academy admin is required']},
        adminRole : {type : String , required : [true , "the title/role of the academy admin is required"]},
        adminPhoneNumber : {type : String , required : [true , "the phone number of the academy admin is required"]},
        adminAddress: { type: String },
        adminCountry: { type: String, required: [true, ' the country of the academy admin is required'] },
        adminPOBox: { type: String, required: [true, 'P.O. Box of the academy admin is required'] },
        adminCity: { type: String, required: [true, 'City of the academy admin is required'] },
        adminPassportNumber : {type : String , required: [true, 'passport number of the academy admin is required']},
        adminPassportPhoto :{type : String ,  required: [true, 'passport photo of the academy admin is required']},
        adminVerificationPhoto : {type : String ,  required: [true, 'admin verification photo of the academy admin is required']},
        adminProfilePhoto : {type : String ,  required: [true, 'admin profile photo of the academy admin is required']},
      }
    },
    {
      timestamps: true,
    }
  );
  
  providerSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      next();
    }
    this.password =await bcrypt.hash(this.password, 5);
    console.log(this.password);
    this.passwordConfirm = undefined;
    this.emailConfirm = undefined;
    next();
  });
  const providerModel = mongoose.model('Provider', providerSchema);
  
  export default providerModel;
  