import { FirebaseApp } from "firebase/app";

export default abstract class FirebaseServiceBase {
  protected readonly _firebaseApp: FirebaseApp;

  protected constructor(firebaseApp: FirebaseApp) {
    this._firebaseApp = firebaseApp;
  }
}
