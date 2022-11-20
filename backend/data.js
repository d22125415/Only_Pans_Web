import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let data = {
  pans: [
    {
      name: 'pan_1',
      attributes: ['a1', 'a2'],
      img: [
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/pan1.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 1),
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/pan5.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 5),
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/pan6.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 6),
        },
      ],
    },
    {
      name: 'pan_2',
      attributes: ['a1', 'a3'],
      img: [
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/pan2.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 5, 1),
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/pan3.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 2),
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/pan9.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 15),
        },
      ],
    },
    {
      name: 'pan_3',
      attributes: ['a3', 'a2'],
      img: [
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/pan8.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 11),
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/pan4.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 4),
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/pan7.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 8),
        },
      ],
    },
  ],
};

export default data;
