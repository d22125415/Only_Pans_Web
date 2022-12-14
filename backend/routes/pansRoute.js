import express from 'express';
import Pan from '../models/pansModel.js';

const pansRouter = express.Router();

pansRouter.get('/', async (req, res) => {
  Pan.find({}, (err, pans) => {
    if (err) {
      throw new Error('no Pans at DB');
    } else {
      let pans_with_only_first_picture = pans.map((pan) => {
        return {
          id: pan._id,
          image: pan.img[0],
          name: pan.name,
          attributes: pan.attributes,
          description: pan.description,
        };
      });
      res.send(pans_with_only_first_picture);
    }
  });
});

export default pansRouter;
