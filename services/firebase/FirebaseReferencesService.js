import { collection, doc, getFirestore } from "firebase/firestore";
import { FirebaseServiceBase } from "./FirebaseServiceBase";

export class FirebaseReferencesService extends FirebaseServiceBase {
  _db = null;

  _userProfilesCollectionName = "UserProfiles";

  constructor(firebaseApp) {
    super(firebaseApp);
    this._db = getFirestore(this._firebaseApp);
  }


  //#region UserProfiles
  getUserProfilesCollectionReference() {
    return collection(this._db, this._userProfilesCollectionName);
  }

  getUserProfileDocumentReference(userId) {
    return doc(this.getUserProfilesCollectionReference(), userId);
  }

  //#endregion UserProfiles
}
