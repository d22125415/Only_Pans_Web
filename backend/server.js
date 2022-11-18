import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import multer from 'multer';
import Pan from './models/pansModel.js';
import cors from 'cors';

import seedRoutes from './routes/seedRoutes.js';
import pansRouter from './routes/pansRoute.js';

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

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/api/seed', seedRoutes);
app.use('/api/pans', pansRouter);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.stack });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
