import { initializeApp, getApp, cert, } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore'
import FirestoreAdminHireUsService from "./FirestoreAdminHireUsService";
import FirestorePathsService from "../../../shared/services/firebase/FirestorePathsService";
import { adminFirebaseCertText } from "../../../../utils/firebaseConfig";

const serviceAccount = JSON.parse(adminFirebaseCertText);

function createFirebaseApp() {
  try {
    return getApp();
  } catch {
    return initializeApp({
      credential: cert(serviceAccount)
    });
  }
}

const firebaseApp = createFirebaseApp();

const db = getFirestore(firebaseApp);

const firestorePathsService = new FirestorePathsService();
const firestoreAdminHireUsService = new FirestoreAdminHireUsService(firestorePathsService, db);

export {
  firestoreAdminHireUsService
}
