import { FirebaseApp } from "firebase/app";
import { Firestore } from 'firebase/firestore';
import { FirebaseServiceBase } from "./FirebaseServiceBase";
import { FirestorePathsService } from "../../../shared/services/firebase/FirestorePathsService";
import { ROOMS } from "../../../../utils/dummy";
import IRoomEntity from "../../../shared/entities/IRoomEntity";
import { EntityWithId } from "../../../shared/entities/utils/EntityWithId";

export class FirestoreRoomsService extends FirebaseServiceBase {
  private readonly _db: Firestore;
  private readonly _firestorePathsService: FirestorePathsService;

  constructor(firebaseApp: FirebaseApp, firestorePathsService: FirestorePathsService, db: Firestore) {
    super(firebaseApp);
    this._firestorePathsService = firestorePathsService;
    this._db = db;
  }

  public async getAll(): Promise<EntityWithId<EntityWithId<IRoomEntity>>[]> {
    const entities = ROOMS;
    return Promise.resolve(entities);
  }

  public async getById(id: string): Promise<EntityWithId<IRoomEntity> | undefined> {
    const item = ROOMS.find(x => x._id === id);
    if (!item) {
      console.warn(`Unable to find Room with id '${id}'`)
      return Promise.resolve(undefined);
    }
    return Promise.resolve(item);
  }

  public async getBySlug(slug: string): Promise<EntityWithId<IRoomEntity>> {
    const item = ROOMS.find(x => x.slug === slug);
    if (!item) return Promise.reject(`Unable to find Room with slug '${slug}'`);
    return Promise.resolve(item);
  }
}
