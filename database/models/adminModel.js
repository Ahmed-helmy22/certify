import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
const candidateSchema = mongoose.Schema(
  {
    firstName: { type: String, required: [true, 'first name is required'] },
    middleName: { type: String, required: [true, 'middle name is required'] },
    lastNsame: { type: String, required: [true, 'last name is required'] },
    password: {
      type: String,
      required: [true, 'password is required'],
      minLength: [8, 'min character is password is 8'],
      maxlength: [30, 'max character is password is 30'],
      select : false
    },
    country : {type : String ,required: [true, 'country is required'] } , 
    dateOfBirth : {type : Date , required: [true, 'date of birth is required']},
    email: {
      type: String,
      required: [true, 'email is required'],
      unique: [true, 'email is unique'],
    },
    verifyEmail: { type: Boolean, default: false },
    phoneNumber: {
      type: String,
      minLength: [10, 'min character is phone number is 8'],
      maxlength: [30, 'max character is phone number is 30'],
      required: [true, 'phone number is required'],
    },
    role: { type: String, enum: ['admin'] },
    active: { type: Boolean, default: false },
    userAgreement: { type: Boolean, default: false },
    profilePhoto: String,
    logedOut: { type: Boolean, default: false }
  },
  {
    timestamps: true,
  }
);
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next();
  }
  this.password = bcrypt.hash(this.password, 5);
  this.passwordConfirm = undefined;
  next();
});
const candidateModel = mongoose.model('Candidate', candidateSchema);

export default candidateModel;