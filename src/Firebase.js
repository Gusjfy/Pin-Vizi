import * as firebase from 'react-native-firebase';
import firestore from 'react-native-firebase/firestore'

const settings = {timestampsInSnapshots: true};

const config = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  databaseURL: "YOUR_DATABASE_URL",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_ID"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;