import { Firestore, Timestamp } from 'firebase-admin/firestore'
import { FirestorePathsService } from "../../../shared/services/firebase/FirestorePathsService";
import hireUsFormSchema from "../../../shared/yup/hireUsFormSchema";
import trimObjectStrings from "../../../../utils/trimObjectStrings";
import { IHireUsRequestEntity } from "../../../shared/entities/HireUsRequestEntity";

export class FirestoreAdminHireUsService {
  private readonly _db: Firestore;
  private readonly _firestorePathsService: FirestorePathsService;

  constructor(firestorePathsService: FirestorePathsService, db: Firestore) {
    this._firestorePathsService = firestorePathsService;
    this._db = db;
  }

  public async sendHireUsRequest(data: IHireUsRequestEntity): Promise<void> {
    try {
      const trimmedData = trimObjectStrings(data, ["budget"]);
      const hireUsData: IHireUsRequestEntity = {
        ...trimmedData,
        createdAt: Timestamp.now()
      }
      await hireUsFormSchema.validate(hireUsData, { strict: true });
      // TODO: change to API request to server and add Send Email to David.
      const colRef = this._db.collection(this._firestorePathsService.getHireUsCollectionReference())
      await colRef.add(hireUsData);
    } catch (e) {
      console.error('Firebase sendHireUsRequest error:', e);
      throw e;
    }
  }
}
