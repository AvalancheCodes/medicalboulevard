import { FirebaseApp } from "firebase/app";
import { Firestore } from 'firebase/firestore';
import FirebaseServiceBase from "./FirebaseServiceBase";
import FirestorePathsService from "../../../shared/services/firebase/FirestorePathsService";
import IMedicalSpaceCoordinatorEntity from "../../../shared/entities/IMedicalSpaceCoordinatorEntity";
import { MEDICAL_SPACE_COORDINATORS } from "../../../../utils/dummy";
import { EntityWithId } from "../../../shared/entities/utils/EntityWithId";

export default class FirestoreMedicalSpaceCoordinatorService extends FirebaseServiceBase {
  private readonly _db: Firestore;
  private readonly _firestorePathsService: FirestorePathsService;

  constructor(firebaseApp: FirebaseApp, firestorePathsService: FirestorePathsService, db: Firestore) {
    super(firebaseApp);
    this._firestorePathsService = firestorePathsService;
    this._db = db;
  }

  public async getById(id: string): Promise<EntityWithId<IMedicalSpaceCoordinatorEntity> | undefined> {
    const item = MEDICAL_SPACE_COORDINATORS.find(x => x._id === id);
    if (!item) {
      console.warn(`Unable to find Medical Space Coordinator with id '${id}'`);
      return Promise.resolve(undefined);
    }
    return Promise.resolve(item);
  }
}
