import { FirebaseApp } from "firebase/app";
import { Firestore, doc, setDoc } from 'firebase/firestore';
import { FirebaseServiceBase } from "./FirebaseServiceBase";
import { FirestorePathsService } from "../../../shared/services/firebase/FirestorePathsService";
import userProfileModelSchema from "../../../shared/yup/userProfileModelSchema";
import trimObjectStrings from "../../../../utils/trimObjectStrings";
import { IUserProfileEntity } from "../../../shared/entities/UserProfileEntity";

export class FirestoreUserProfileService extends FirebaseServiceBase {
  private readonly _db: Firestore;
  private readonly _firestorePathsService: FirestorePathsService;

  constructor(firebaseApp: FirebaseApp, firestorePathsService: FirestorePathsService, db: Firestore) {
    super(firebaseApp);
    this._firestorePathsService = firestorePathsService;
    this._db = db;
  }

  async createUser(userId: string, data: Omit<IUserProfileEntity, "createdAtMs">) {
    try {
      const dataTrimmed = trimObjectStrings(data);
      const userProfileData: IUserProfileEntity = {
        ...dataTrimmed,
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
