This is a project inspired by [the Net Ninja](https://youtu.be/CkePdocytWM)

A React project mixed with Redux and Firebase.

## Screen shot
![picture](public/img/shot1.png)
![picture](public/img/shot2.png)
![picture](public/img/shot3.png)
![picture](public/img/shot4.png)


## Functions

  - Sign up and Sign in
  - Create project 
  - firebase setup and connect with security


## Available Scripts

In the project directory, you can run:

### `npm install`

Install all packages for this app.


### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### config

create a config folder in /src , inside the config folder, create fbConfig.js.

copy this to the .js file.

``
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// Initialize Firebase
var config = {
      // config are here
  };
  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true});

  export default firebase;

``

Go to Firebase, search the tap 'Add Firebase to your web app' ,
copy the var config and paste in the .js.
Everything it's ready.



