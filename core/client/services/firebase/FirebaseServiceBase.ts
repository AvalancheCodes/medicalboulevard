import { FirebaseApp } from "firebase/app";

export abstract class FirebaseServiceBase {
  protected readonly _firebaseApp: FirebaseApp;

  protected constructor(firebaseApp: FirebaseApp) {
    this._firebaseApp = firebaseApp;
  }
}
