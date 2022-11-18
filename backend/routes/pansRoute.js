import express from 'express';
import Pan from '../models/pansModel.js';

const pansRouter = express.Router();

pansRouter.get('/', async (req, res) => {
  Pan.find({}, (err, items) => {
    if (err) {
      throw new Error('no Pans at DB');
    } else {
      console.log(items);
      res.send({ items });
    }
  });
});

export default pansRouter;
