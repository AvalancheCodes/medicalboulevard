import {
  collection,
  CollectionReference,
  doc,
  DocumentReference,
  Firestore,
} from "firebase/firestore";
import { FirebaseServiceBase } from "./FirebaseServiceBase";
import { FirebaseApp } from "firebase/app";

export class FirebaseReferencesService extends FirebaseServiceBase {
  private readonly _db: Firestore;

  private readonly _userProfilesCollectionName: string = "UserProfiles";
  private readonly _hireUsCollectionName: string = "HireUs"

  constructor(firebaseApp: FirebaseApp, db: Firestore) {
    super(firebaseApp);
    this._db = db;
  }


  //#region UserProfiles
  getUserProfilesCollectionReference(): CollectionReference {
    return collection(this._db, this._userProfilesCollectionName);
  }

  getUserProfileDocumentReference(userId: string): DocumentReference {
    return doc(this.getUserProfilesCollectionReference(), userId);
  }

  //#endregion UserProfiles

  //#region HireUs
  getHireUsCollectionReference(): CollectionReference {
    return collection(this._db, this._hireUsCollectionName);
  }

  getHireUsDocumentReference(itemId: string): DocumentReference {
    return doc(this.getHireUsCollectionReference(), itemId);
  }

  //#endregion HireUs
}
