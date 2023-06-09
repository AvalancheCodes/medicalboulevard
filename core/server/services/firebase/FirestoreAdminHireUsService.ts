import { Firestore } from 'firebase-admin/firestore'
import FirestorePathsService from "../../../shared/services/firebase/FirestorePathsService";
import IHireUsRequestEntity from "../../../shared/entities/IHireUsRequestEntity";
import hireUsRequestEntitySchema from "../../../shared/yup/hireUsRequestEntitySchema";
import normalizeBeforeSave from "../../../../utils/normalizeBeforeSave";

export default class FirestoreAdminHireUsService {
  private readonly _db: Firestore;
  private readonly _firestorePathsService: FirestorePathsService;

  constructor(firestorePathsService: FirestorePathsService, db: Firestore) {
    this._firestorePathsService = firestorePathsService;
    this._db = db;
  }

  public async saveRequest(data: Omit<IHireUsRequestEntity, "createdAtMs">): Promise<void> {
    try {
      const normalized = normalizeBeforeSave(data);
      const hireUsData: IHireUsRequestEntity = {
        ...normalized,
        createdAtMs: Date.now()
      }
      await hireUsRequestEntitySchema.validate(hireUsData, { strict: true });
      // TODO: change to API request to server and add Send Email to David.
      const colRef = this._db.collection(this._firestorePathsService.getHireUsCollectionReference())
      await colRef.add(hireUsData);
    } catch (e) {
      console.error('Firebase sendHireUsRequest error:', e);
      throw e;
    }
  }
}
