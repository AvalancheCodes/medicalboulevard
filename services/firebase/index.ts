import { FirebaseApp, getApp, initializeApp } from 'firebase/app';
import firebaseConfig from "../../utils/firebaseConfig";
import { FirebaseAuthService } from './FirebaseAuthService';
import { FirebaseReferencesService } from './FirebaseReferencesService';
import { FirebaseHireUsService } from "./FirebaseHireUsService";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

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

const referencesService = new FirebaseReferencesService(firebaseApp, db);
const authService = new FirebaseAuthService(firebaseApp, referencesService, auth);
const hireUsService = new FirebaseHireUsService(firebaseApp, referencesService, db);

export {
  referencesService,
  authService,
  hireUsService
};
