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
      description: 'the number 1 under the Pans',
      img: [
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/pan1.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 1),
          description: 'uh lock at that sun',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/pan5.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 5),
          description: 'uh lock at that sun',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/pan6.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 6),
          description: 'uh lock at that sun',
        },
      ],
    },
    {
      name: 'pan_2',
      attributes: ['a1', 'a3'],
      description: 'the number 2 under the Pans',
      img: [
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/pan2.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 5, 1),
          description: 'uh lock at that sun',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/pan3.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 2),
          description: 'uh lock at that sun',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/pan9.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 15),
          description: 'uh lock at that sun',
        },
      ],
    },
    {
      name: 'pan_3',
      attributes: ['a3', 'a2'],
      description: 'the number 3 under the Pans',
      img: [
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/pan8.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 11),
          description: 'uh lock at that sun',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/pan4.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 4),
          description: 'uh lock at that sun',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/pan7.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 8),
          description: 'uh lock at that sun',
        },
      ],
    },
  ],
};

export default data;
