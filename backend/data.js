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
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/4.3.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 6),
          description: 'Posing!',
        },
      ],
    },
    {
      name: 'Vouge Grill Pan',
      attributes: ['Durable','Cheap'],
      description: 'Square pan with a classic grill pattern. Made of cast aluminium, which makes pan heat up quickly and evenly - both on the bottom and on the sides of the pan.',
      img: [
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/1.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 5, 1),
          description: 'Clean Like always',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/1.1.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 2),
          description: 'Filled with meat :)',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/1.2.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 15),
          description: 'Flat Flat Flat',
        },
      ],
    },
    {
      name: 'Vouge Crepe',
      attributes: ['Cheap','Light'],
      description: 'Serve up delicious crepes that look as good as they taste by using this aluminium crepe pan from Vogue. Made from high quality aluminium',
      img: [
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/2.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 11),
          description: 'Crepes are better then pancakes',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/2.1.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 4),
          description: 'Uh look at me',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/2.0.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 4),
          description: 'I love wathching movies',
        },
      ],
    },
    {
      name: 'Goren Sauce pan',
      attributes: ['Expensive','Light'],
      description: 'Serve up delicious crepes that look as good as they taste by using this aluminium crepe pan from Vogue. Made from high quality aluminium',
      img: [
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/3.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 11),
          description: 'I just want to dance and eat pizza!',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/3.0.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 4),
          description: 'My handle is better then yours!',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/3.1.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 4),
          description: 'I love netflix and amazon prime!',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/3.2.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 4),
          description: 'Follow my other socials aswell',
        },
      ],
    },
    {
      name: 'Polish Wok',
      attributes: ['Expensive','Durable'],
      description: 'Add new and different flavours to your menu, with the help of this flat base wok from Kitchen Craft. With high, sloping walls the wok allows you to easily move food around the surface without spilling it over the sides.',
      img: [
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/5.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 11),
          description: 'I miss someone holding me like this',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/5.1.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 4),
          description: 'My handle is better then yours!',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/5.2.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 4),
          description: 'Me and my friend just having fun',
        },
      ],
    },
    {
      name: 'Paella Pan',
      attributes: ['Light','Durable'],
      description: '2 handled dishes specifically for the production of paella, ensuring ease of movement and heat distribution during the cooking process.',
      img: [
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/6.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 11),
          description: 'Plain but not boring!',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/6.1.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 4),
          description: 'Im responding to messeges today!',
        },
        {
          data: fs.readFileSync(
            path.join(__dirname + '/resources/Pan/images/6.2.jpg'),
            { encoding: 'base64' }
          ),
          contentType: 'image/png',
          date: new Date(2020, 0, 4),
          description: 'Close Up shot! i like that',
        },
      ],
    },
  ],
};

export default data;
