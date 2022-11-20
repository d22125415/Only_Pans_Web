import express from 'express';
import data from '../data.js';
import Pan from '../models/pansModel.js';

const seedRouter = express.Router();

seedRouter.post('/', async (req, res) => {
  await Pan.remove({});
  const createPans = await Pan.insertMany(data.pans);
  res.send(createPans);
});

export default seedRouter;
