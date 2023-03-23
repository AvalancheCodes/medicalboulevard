import { initializeApp, getApp, cert, } from 'firebase-admin/app';
import { getFirestore } from 'firebase-admin/firestore'

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_CERT_TEXT);

console.log(JSON.stringify(serviceAccount));

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

export {
  firebaseApp, db
}
