import {
  createUserWithEmailAndPassword,
  getAuth,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { setDoc, Timestamp } from 'firebase/firestore';
import { FirebaseServiceBase } from "./FirebaseServiceBase";
import { normalizeBeforeSave } from "../../utils/normalizeBeforeSave";

export class FirebaseAuthService extends FirebaseServiceBase {
  _auth = null;
  _referencesService = null;

  constructor(firebaseApp, referencesService) {
    super(firebaseApp);
    this._referencesService = referencesService;
    this._auth = getAuth(this._firebaseApp);
  }

  async signInWithLoginPassword(email, password) {
    try {
      return await signInWithEmailAndPassword(this._auth, email, password);
    } catch (e) {
      console.error('Firebase LoginPassword auth error:', e);
      throw e;
    }
  }

  signOut() {
    return signOut(this._auth);
  }

  async sendResetPasswordEmail(email) {
    try {
      return await sendPasswordResetEmail(this._auth, email);
    } catch (e) {
      console.error('Firebase sendResetPasswordEmail auth error:', e);
      throw e;
    }
  }

  /**
   * @return {Promise<string>} User Id
   */
  async createUserWithEmailAndPassword(email, password, {firstName, lastName}) {
    try {
      const credentials = await createUserWithEmailAndPassword(this._auth, email, password);
      const dataToSave = normalizeBeforeSave({
        email: email,
        firstName: firstName,
        lastName: lastName,
        createdAt: Timestamp.now()
      });
      await setDoc(this._referencesService.getUserProfileDocumentReference(credentials.user.uid), dataToSave);
      return credentials.user.uid;
    } catch (e) {
      console.error('Firebase createUserWithEmailAndPassword auth error:', e);
      throw e;
    }
  }

  async sendEmailVerification() {
    try {
      if (!this._auth.currentUser) {
        throw new Error('Failed to send Email Verification: User needs to be logged in first');
      }
      return await sendEmailVerification(this._auth.currentUser);
    } catch (e) {
      console.error(e);
      throw e;
    }
  }
}
