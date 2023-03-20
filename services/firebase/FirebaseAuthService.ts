import {
  Auth,
  createUserWithEmailAndPassword, onAuthStateChanged,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { setDoc, Timestamp } from 'firebase/firestore';
import { FirebaseServiceBase } from "./FirebaseServiceBase";
import registerUserProfileSchema from "../../utils/yup/registerUserProfileSchema";
import { FirebaseReferencesService } from "./FirebaseReferencesService";
import { FirebaseApp } from "firebase/app";

export class FirebaseAuthService extends FirebaseServiceBase {
  private readonly _auth: Auth;
  private readonly _referencesService: FirebaseReferencesService;

  constructor(firebaseApp: FirebaseApp, referencesService: FirebaseReferencesService, auth: Auth) {
    super(firebaseApp);
    this._referencesService = referencesService;
    this._auth = auth;
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

  async sendResetPasswordEmail(email: string) {
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
  async createUserWithEmailAndPassword(email: string, password: string, { firstName, lastName }) {
    try {
      const userProfileData = {
        firstName: firstName?.trim(),
        lastName: lastName?.trim()
      }
      await registerUserProfileSchema.validate(userProfileData, { strict: true });
      const credentials = await createUserWithEmailAndPassword(this._auth, email, password);
      const dataToSave = {
        ...userProfileData,
        createdAt: Timestamp.now()
      };
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

  getAuth() {
    return this._auth;
  }
}
