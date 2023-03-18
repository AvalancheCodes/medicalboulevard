import { getApp, initializeApp } from 'firebase/app';
import { FirebaseAuthService } from './FirebaseAuthService';
import { FirebaseReferencesService } from './FirebaseReferencesService';
import firebaseConfig from "../../utils/firebaseConfig";

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

export {
  referencesService,
  authService,
};
