import mongoose from 'mongoose';

// const attributeSchema = new mongoose.Schema({
//   attribute: { type: String },
// });

const panSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    img: [
      {
        data: Buffer,
        contentType: String,
        date: Date,
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
