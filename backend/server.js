import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import multer from 'multer';
import Pan from './models/pansModel.js';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log('connected to db');
  })
  .catch((err) => {
    console.log(err.message);
  });

let storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now());
  },
});

let upload = multer(storage);

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  Pan.find({}, (err, items) => {
    if (err) {
      throw new Error('no Pans at DB');
    } else {
      res.send({ items: items });
    }
  });
});

app.post('/', upload.single('image'), (req, res, next) => {
  console.log('Link:  ');
  console.log(path.join(__dirname, '/resources/Pan/images/pan1.jpg'));
  let obj = {
    name: 'pan 1',
    attribute: ['a1', 'a2'],
    img: {
      data: fs.readFileSync(
        path.join(__dirname + '/resources/Pan/images/pan1.jpg')
      ),
      contentType: 'image/png',
    },
  };
  Pan.create(obj, (err, item) => {
    if (err) {
      throw Error('could not add Pan');
    } else {
      //item.save();
      //res.redirect('/');
    }
  }).then((result) => console.log(result));
});

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.stack });
});

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`serve at http://localhost:${port}`);
});
