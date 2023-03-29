import { FirebaseApp } from "firebase/app";
import { Firestore } from 'firebase/firestore';
import { FirebaseServiceBase } from "./FirebaseServiceBase";
import { FirestorePathsService } from "../../../shared/services/firebase/FirestorePathsService";
import IRoomAmenityEntity from "../../../shared/entities/IRoomAmenityEntity";

import amenities from "../../../../data/amenities.json";
import { EntityWithId } from "../../../shared/entities/utils/EntityWithId";

export class FirestoreRoomAmenitiesService extends FirebaseServiceBase {
  private readonly _db: Firestore;
  private readonly _firestorePathsService: FirestorePathsService;

  constructor(firebaseApp: FirebaseApp, firestorePathsService: FirestorePathsService, db: Firestore) {
    super(firebaseApp);
    this._firestorePathsService = firestorePathsService;
    this._db = db;
  }

  public async getAll(): Promise<EntityWithId<IRoomAmenityEntity>[]> {
    const entities = amenities;
    return Promise.resolve(entities);
  }

  public async getById(id: string): Promise<EntityWithId<IRoomAmenityEntity> | undefined> {
    const item = amenities.find(x => x._id === id);
    if (!item) {
      console.warn(`Unable to find Room Amenity with id '${id}'`);
      return Promise.resolve(undefined);
    }
    return Promise.resolve(item);
  }
}
