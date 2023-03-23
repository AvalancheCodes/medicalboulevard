import { getApp, initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { FirebaseAuthService } from './FirebaseAuthService';
import { FirestoreUserProfileService } from "./FirestoreUserProfileService";
import { FirestorePathsService } from "../../../shared/services/firebase/FirestorePathsService";
import firebaseConfig from "../../../../utils/firebaseConfig";

function createFirebaseApp(config) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

const firestorePathsService = new FirestorePathsService();
const firestoreUserProfileService = new FirestoreUserProfileService(firebaseApp, firestorePathsService, db);
const firebaseAuthService = new FirebaseAuthService(firebaseApp, auth);

export {
  firestorePathsService,
  firestoreUserProfileService,
  firebaseAuthService,
};
