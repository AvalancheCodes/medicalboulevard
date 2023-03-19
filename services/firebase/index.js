import { getApp, initializeApp } from 'firebase/app';
import firebaseConfig from "../../utils/firebaseConfig";
import { FirebaseAuthService } from './FirebaseAuthService';
import { FirebaseReferencesService } from './FirebaseReferencesService';
import { FirebaseHireUsService } from "./FirebaseHireUsService";

function createFirebaseApp(config) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

const firebaseApp = createFirebaseApp(firebaseConfig);

const referencesService = new FirebaseReferencesService(firebaseApp);
const authService = new FirebaseAuthService(firebaseApp, referencesService);
const hireUsService = new FirebaseHireUsService(firebaseApp, referencesService);

export {
  referencesService,
  authService,
  hireUsService
};
