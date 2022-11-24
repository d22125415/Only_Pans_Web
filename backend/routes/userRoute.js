import express from 'express';
import User from '../models/userModel.js';
import expressAsyncHandler from 'express-async-handler';
import bcrypt from 'bcryptjs';
import { generateToken } from '../utils.js';

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
      userToken: generateToken(user),
    });
    return;
  })
);

export default userRouter;
