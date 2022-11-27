import express from 'express';
import User from '../models/userModel.js';
import Pan from '../models/pansModel.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { encryptToken, generateToken } from '../utils.js';
import { Types } from 'mongoose';

const userRouter = express.Router();

userRouter.post(
  '/signin',
  expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email: email });
    if (!user) {
      res.status(401).send({ message: 'email or password is wrong' });
      return;
    }
    if (bcrypt.compareSync(password, user.password)) {
      res.status(200).send({
        name: user.name,
        email: user.email,
        _id: user._id,
        image: user?.profilePicture,
        pans: user.pans,
        userToken: generateToken(user),
      });
      return;
    }
    res.status(401).send({ message: 'email or password is wrong' });
  })
);

userRouter.post(
  '/register',
  expressAsyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (await User.exists({ email: email })) {
      res.status(409).send({ message: 'email already in use' });
      return;
    }
    const newUser = new User({
      name: name,
      email: email,
      password: bcrypt.hashSync(password),
      img: req.body?.profilePicture,
    });
    const user = await newUser.save();
    res.status(200).send({
      name: user.name,
      email: user.email,
      _id: user._id,
      image: user?.profilePicture,
      pans: user.pans,
      userToken: generateToken(user),
    });
    return;
  })
);

userRouter.post(
  '/subscribe',
  expressAsyncHandler(async (req, res) => {
    const { userToken, pan_id } = req.body;
    console.log('body ' + Object.getOwnPropertyNames(req.body));
    const userInfo = encryptToken(userToken);
    console.log(userInfo);
    try {
      const user = await User.findOneAndUpdate(
        { email: userInfo.email },
        { $addToSet: { pans: new Types.ObjectId(pan_id) } },
        { new: true }
      );
      res.status(200).send(user.pans);
    } catch (error) {
      res.status(401).send({ message: error.stack });
    }
    return;
  })
);

const getImagesOfPans = (pans) => {
  return pans
    .map((pan) => {
      return pan.img.map((img) => {
        return {
          date: img.date,
          description: img.description,
          data: img.data,
          pan: pan.name,
        };
      });
    })
    .reduce((pre, cur) => pre.concat(cur));
  res.status(200).send(pans);
};

userRouter.get(
  '/pans/:userToken',
  expressAsyncHandler(async (req, res) => {
    const userInfo = encryptToken(req.params.userToken);
    const user = await User.findOne({ email: userInfo.email }).populate(
      'pans',
      ['name', 'img']
    );
    const pansImages = getImagesOfPans(user.pans);
    res.status(200).send(pansImages);
  })
);

export default userRouter;
