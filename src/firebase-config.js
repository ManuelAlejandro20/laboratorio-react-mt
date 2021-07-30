  import firebase from 'firebase'

  var firebaseConfig = {
    apiKey: "AIzaSyClJ9jfZQl4ofQaRRSEVxNov_IBnt6J8PU",
    authDomain: "testproject-f61de.firebaseapp.com",
    projectId: "testproject-f61de",
    storageBucket: "testproject-f61de.appspot.com",
    messagingSenderId: "918245015577",
    appId: "1:918245015577:web:ea858369616e687038aa88"
  };
  
  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;