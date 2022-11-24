import express from 'express';
import Pan from '../models/pansModel.js';

const pansRouter = express.Router();

pansRouter.get('/', async (req, res) => {
  Pan.find({}, (err, pans) => {
    if (err) {
      throw new Error('no Pans at DB');
    } else {
      let pans_with_only_first_picture = pans.map((pan) => {
        return { id: pan._id,name: pan.name, image: pan.img[0], attributes: pan.attributes };
      });
      console.log(pans_with_only_first_picture);
      res.send(pans_with_only_first_picture);
    }
  });
});

export default pansRouter;
