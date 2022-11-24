import mongoose from 'mongoose';

const panSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: [
      {
        data: Buffer,
        contentType: String,
        date: Date,
        description: String,
        _id: false,
      },
    ],
    attributes: [{ type: String }],
    description: String,
  },
  {
    timestamps: true,
  }
);

const Pan = mongoose.model('Pan', panSchema);
export default Pan;
