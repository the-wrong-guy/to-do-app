import firebase,{firestore} from  'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyClZCqjlwvjkVXEu-tpvB83m3uvjoxvL3A",
    authDomain: "to-do-app-189b6.firebaseapp.com",
    databaseURL: "https://to-do-app-189b6.firebaseio.com",
    projectId: "to-do-app-189b6",
    storageBucket: "to-do-app-189b6.appspot.com",
    messagingSenderId: "378372883337",
    appId: "1:378372883337:web:bda38f0535fb24d6c61758",
    measurementId: "G-X807SVNDBW"
  };
  firebase.initializeApp(firebaseConfig)
  firebase.firestore()

  export default firebase;