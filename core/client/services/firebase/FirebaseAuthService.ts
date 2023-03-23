import {
  Auth,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import { FirebaseApp } from "firebase/app";
import { FirebaseServiceBase } from "./FirebaseServiceBase";

export class FirebaseAuthService extends FirebaseServiceBase {
  private readonly _auth: Auth;

  public get Auth(): Auth {
    return this._auth;
  }

  constructor(firebaseApp: FirebaseApp, auth: Auth) {
    super(firebaseApp);
    this._auth = auth;
  }

  public async signInWithLoginPassword(email, password) {
    try {
      return await signInWithEmailAndPassword(this._auth, email, password);
    } catch (e) {
      console.error('Firebase LoginPassword auth error:', e);
      throw e;
    }
  }

  public async signOut(): Promise<void> {
    await signOut(this._auth);
  }

  public async sendResetPasswordEmail(email: string): Promise<void> {
    try {
      await sendPasswordResetEmail(this._auth, email);
    } catch (e) {
      console.error('Firebase sendResetPasswordEmail auth error:', e);
      throw e;
    }
  }

  /**
   * @return {Promise<string>} User Id
   */
  public async createUserWithEmailAndPassword(email: string, password: string): Promise<string> {
    try {
      const credentials = await createUserWithEmailAndPassword(this._auth, email, password);
      return credentials.user.uid;
    } catch (e) {
      console.error('Firebase createUserWithEmailAndPassword auth error:', e);
      throw e;
    }
  }
}
