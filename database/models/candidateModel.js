import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const candidateSchema = mongoose.Schema(
    {
        firstName : {type: String, required: [true, 'first Name of candidate  is required'] } ,
        middleName : {type: String } ,
        familyName : {type: String, required: [true, 'family Name of candidate  is required'] } ,
        DOBirth : {type :Date , required : [true  ,'date of birth of candidate is required']},
        gender : {type :String , required : [true  ,'gender of candidate is required'] , enum:['male' , 'female']},
        phoneNumber: { type: String, minlength: [5, 'Phone number must be at least 5 characters'], maxlength: [30, 'Phone number cannot exceed 30 characters'], required: [true, 'Phone number is required'] },
        occupation : {type: String, required: [true, 'family Name of candidate  is required'] },
        email: { type: String, required: [true, 'Email is required'], unique: [true, 'Email is unique'] },
        address: String ,
        qualification : String ,
        city: { type: String, required: [true, 'City is required'] },
        country: { type: String, required: [true, 'Country is required'] },
        POBox: { type: String, required: [true, 'P.O. Box is required'] },
        password: { type: String, required: [true, 'Password is required'], minlength: [8, 'password must be at least 10 characters'] , select : false },
        isEmailVerified: { type: Boolean, default: false },
        verificationCodeExpires : {type : Date},
        verificatinCode:{type : String , length : [6,'verification code is 6 character']},
        status: { type: String, default: 'pending' , enum : ['approved' , 'pending' , 'suspended'] },
        role: { type: String, enum: ['candidate'],  default : 'candidate' },
        passwordResetToken: String,
        passwordResetExpires: Date,
        passwordChangedAt: Date,
        PassportNumber : {type : String , required: [true, 'passport number of the candidate  is required']},
        candidatePassportPhoto :{type : String ,  required: [true, 'passport photo of the candidate  is required']},
        candidateVerificationPhoto : {type : String ,  required: [true, ' verification photo  the candidate  is required']},
        candidateProfilePhoto : {type : String ,  required: [true, 'profile photo of the candidate is required']},
        isLogedOut: { type: Boolean, default: false },
    },
    {
      timestamps: true,
    }
  );
  
  candidateSchema.pre('save', async function (next) {
    if (!this.isModified('password')) {
      next();
    }
    this.password =await bcrypt.hash(this.password, 5);
    console.log(this.password);
    this.passwordConfirm = undefined;
    this.emailConfirm = undefined;
    next();
  });
  const candidateModel = mongoose.model('Candidate', candidateSchema);
  
  export default candidateModel;
  












