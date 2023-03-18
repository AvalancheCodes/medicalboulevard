/**
 * Abstract Class FirebaseServiceBase.
 *
 * @class FirebaseServiceBase
 */
export class FirebaseServiceBase {
  _firebaseApp = null;

  constructor(firebaseApp) {
    this._firebaseApp = firebaseApp;
  }
}
