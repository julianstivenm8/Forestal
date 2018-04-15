import * as firebase from 'firebase'

class Firebase {

  static init(){
    firebase.initializeApp({
      apiKey: "AIzaSyAIIClJYnmvo5Ja0nbC9wr_0r9W3WNXXQ4",
      authDomain: "proyectosilvopastoril-5e2c2.firebaseapp.com",
      databaseURL: "https://proyectosilvopastoril-5e2c2.firebaseio.com",
      projectId: "proyectosilvopastoril-5e2c2",
      storageBucket: "proyectosilvopastoril-5e2c2.appspot.com",
    });
  }
}
module.exports = firebase
