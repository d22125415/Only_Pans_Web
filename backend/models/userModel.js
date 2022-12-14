import mongoose, { Schema } from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    img: { type: String },
    pans: [{ type: Schema.Types.ObjectId, ref: 'Pan' }],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);
export default User;
