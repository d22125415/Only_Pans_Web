import mongoose from 'mongoose';

const panSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: [
      {
        data: Buffer,
        contentType: String,
        date: Date,
        _id: false,
      },
    ],
    attributes: [{ type: String }],
  },
  {
    timestamps: true,
  }
);

const Pan = mongoose.model('Pan', panSchema);
export default Pan;
