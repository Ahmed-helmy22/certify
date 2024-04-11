import mongoose from 'mongoose';

const candidateBadgeSchema = mongoose.Schema(
  {
    internalBadgeNum: { type: String },
    grade: { type: String, required: [true, 'grade is required'] },
    issueDate: { type: Date, required: [true, 'badge issue date is required'] },
    dueDate: { type: Date },
    note: { type: String },
    candidateId: {
      type: mongoose.Types.ObjectId,
      ref: 'Candidate',
      required: [true, 'candidate id of the badge is required'],
    },
    badgeId: {
      type: mongoose.Types.ObjectId,
      ref: 'Badge',
      required: [true, 'Badge id is required'],
    },
    examinerId: { 
      type: mongoose.Types.ObjectId,
      ref: 'Examiner',
      required: [true, 'examiner id is required'],
    },
    providerId: {
      type: mongoose.Types.ObjectId,
      ref: 'Provider',
      required: [true, 'Provider id is required'],
    },

    status: { type: String, default: 'pending' , enum : ['pending' , 'published' , 'declined']},
    declineReason : {type : String}
  },
  {
    timestamps: true,
  }
);

// Define an index on the candidateId field
candidateBadgeSchema.index({ candidateId: 1 });
candidateBadgeSchema.index({ examinerId: 1 });
candidateBadgeSchema.index({ providerId: 1 });

const candidateBadgeModel = mongoose.model('CandidateBadge', candidateBadgeSchema);

export default candidateBadgeModel;
