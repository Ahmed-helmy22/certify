import mongoose from 'mongoose';
const badgeSchema = mongoose.Schema(
  {
    title: { type: String, required: [true, 'badge title is required'] },
    department : {type : String} , 
    badgePhoto : {type : String , required: [true, 'badgePhoto is required']},
    providerId : {
        type : mongoose.Types.ObjectId,
        ref : 'Provider',
        required: [true, 'academy of the badge is required']
    }
  },
  {
    timestamps: true,
  }
);
const badgeModel = mongoose.model('Badge', badgeSchema);

export default badgeModel;