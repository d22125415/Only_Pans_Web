import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';

import seedRoutes from './routes/seedRoutes.js';
import pansRouter from './routes/pansRoute.js';
import userRouter from './routes/userRoute.js';

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

const app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ limit: '50mb', extended: true, parameterLimit: 50000}));
app.use(cors());
app.use(cors({ origin: '*' }));

app.use('/api/seed', seedRoutes);
app.use('/api/pans', pansRouter);
app.use('/api/user', userRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.stack });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
