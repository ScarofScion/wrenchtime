import firebase from "firebase/app";
import "firebase/firestore";
import { Observable } from "rxjs";
import { share } from "rxjs/operators";

class Store {
  constructor() {
    this.db = firebase.firestore();

    this.db.settings({
      timestampsInSnapshots: true
    });

    this._destinations$ = Observable.create(observer => {
      const unsubscribe = this.db
        .collection("destinations")
        .onSnapshot(querySnapshot => {
          const destinations = [];
          querySnapshot.forEach(doc =>
            destinations.push({
              id: doc.id,
              ...doc.data()
            })
          );
          observer.next(destinations);
        });
      return unsubscribe;
    }).pipe(share());
  }

  get destinations$() {
    return this._destinations$;
  }

  async createDestination(dest) {
    await this.db.collection("destinations").add(dest);
  }

  deleteDestination(id) {
    return this.db
      .collection("destinations")
      .doc(id)
      .delete();
  }
}

export default Store;
