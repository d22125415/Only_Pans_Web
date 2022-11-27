# Only_Pans_Web

## Small Description:

This is a project for our Web-Development class.
Goal of the project was to build a website using the MERN-Stack. \
The website it self allows logged in users to subscribe to different pants.
In their personal feed, the users see the pictures of the pans, they subscribed to. Users are able to update and delete their Account.

## For Deployment:

### Backend

add in backend folder an '.env' file and add:

> MONGODB_URI=< you're MongoDB uri > \
> PORT=3600 \
> JWT_SECRET=< a secret String>

delete package.json and node_modules folder in /backend

'cd' into backend folder and run :

```
npm install
npm start
```

load Data to DB:

use Postman to make an POST request to 'http://localhost:3600/api/seed/'

### Frontend :

delete package.json and node_modules folder in /frontend

'cd' into frontend folder and run :

```
npm install
npm run
```
