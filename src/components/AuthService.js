import firebase from 'firebase/app';
import 'firebase/auth';
import {Observable} from 'rxjs';
import {share} from 'rxjs/operators';

class AuthService {
  constructor() {
    this.firebaseAuth = firebase.auth();
    this._currentUser$ = Observable.create(observer => {
      this.firebaseAuth.onAuthStateChanged(user => {
        observer.next(user);
      });
    }).pipe(share());
  }

  get currentUser$() {
    return this._currentUser$;
  }

  signIn() {}

  async signOut() {
    await this.firebaseAuth.signOut();
  }
}

export default AuthService;
