import firebase from 'firebase';

const config = {
apiKey: "AIzaSyCEiW0RKkpl3osP2Dc0qOpqm7IRso0-LnM",
authDomain: "statureport.firebaseapp.com",
databaseURL: "https://statureport.firebaseio.com",
storageBucket: "statureport.appspot.com",
};
firebase.initializeApp(config);

export default firebase;
