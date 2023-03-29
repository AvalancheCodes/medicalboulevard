import { FirebaseApp } from "firebase/app";
import { Firestore, doc, setDoc } from 'firebase/firestore';
import FirebaseServiceBase from "./FirebaseServiceBase";
import FirestorePathsService from "../../../shared/services/firebase/FirestorePathsService";
import userProfileModelSchema from "../../../shared/yup/userProfileModelSchema";
import IUserProfileEntity from "../../../shared/entities/IUserProfileEntity";
import normalizeBeforeSave from "../../../../utils/normalizeBeforeSave";

export default class FirestoreUserProfileService extends FirebaseServiceBase {
  private readonly _db: Firestore;
  private readonly _firestorePathsService: FirestorePathsService;

  constructor(firebaseApp: FirebaseApp, firestorePathsService: FirestorePathsService, db: Firestore) {
    super(firebaseApp);
    this._firestorePathsService = firestorePathsService;
    this._db = db;
  }

  public async createUser(userId: string, data: Omit<IUserProfileEntity, "createdAtMs">) {
    try {
      const normalized = normalizeBeforeSave(data);
      const userProfileData: IUserProfileEntity = {
        ...normalized,
        createdAtMs: Date.now()
      }
      await userProfileModelSchema.validate(userProfileData, { strict: true });
      const docRef = doc(this._db, this._firestorePathsService.getUserProfileDocumentPath(userId));
      await setDoc(docRef, userProfileData);
    } catch (e) {
      console.error('Firebase createUserWithEmailAndPassword auth error:', e);
      throw e;
    }
  }

}
