import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

let data = {
  pans: [
    {
      name: 'Tramontina Skillet',
      attributes: ['Seasoned','Durable'],
      description: 'It provides even and efficient heat distribution, which saves time and energy and features an ergonomic handle with a hanging hole and two pouring lips.',
      img: [
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/4.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 1),
          description: 'Basic',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/4.1.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 5),
          description: 'From the side!',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/4.2.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 6),
          description: 'How do i look?',
        },
        // {
        //   data: fs.readFileSync(
        //     path.join(__dirname + '/resources/Pan/images/4.3.jpg'),
        //     { encoding: 'base64' }
        //   ),
        //   contentType: 'image/png',
        //   date: new Date(2020, 0, 6),
        //   description: 'Posing!',
        // },
      ],
    },
    {
      name: 'Vouge Grill Pan',
      attributes: ['Durable','Cheap'],
      description: 'the number 2 under the Pans',
      img: [
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/1.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 5, 1),
          description: 'uh lock at that sun',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/1.1.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 2),
          description: 'uh lock at that sun',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/1.2.jpg'),
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
            path.join(__dirname + '/resources/Pan/images/2.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 11),
          description: 'uh lock at that sun',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/2.1.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 4),
          description: 'uh lock at that sun',
        },
      ],
    },
  ],
};

export default data;
