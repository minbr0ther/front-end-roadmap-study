import firebase from "firebase";
import firebaseApp from "./firebase";

class AuthService {
  //github, facebook 등 각각의 플랫폼에 맞게 sign in 진행
  login(providerName) {
    const authProvider = new firebase.auth[`${providerName}AuthProvider`]();
    return firebase.auth().signInWithPopup(authProvider);
  }

  logout() {
    firebase.auth().signOut();
  }

  onAuthChange(onUserChanged) {
    //사용자가 바뀌면 무언가를 수행하는 함수
    firebase.auth().onAuthStateChanged((user) => {
      onUserChanged(user);
    });
  }
}

export default AuthService;
