import { getFirestore, addDoc, Timestamp } from 'firebase/firestore';
import { FirebaseServiceBase } from "./FirebaseServiceBase";
import hireUsFormSchema from "../../utils/yup/hireUsFormSchema";

export class FirebaseHireUsService extends FirebaseServiceBase {
  _db = null;
  _referencesService = null;

  constructor(firebaseApp, referencesService) {
    super(firebaseApp);
    this._referencesService = referencesService;
    this._db = getFirestore(this._firebaseApp);
  }

  async sendHireUsRequest({
                            firstName,
                            lastName,
                            email,
                            companyName,
                            budget,
                            projectInfo
                          }) {
    try {
      const hireUsData = {
        firstName: firstName?.trim(),
        lastName: lastName?.trim(),
        email: email?.trim(),
        companyName: companyName?.trim(),
        budget: budget, // no need to trim, comes from select options
        projectInfo: projectInfo?.trim()
      }
      await hireUsFormSchema.validate(hireUsData, {strict: true});
      // TODO: change to API request to server and add Send Email to David.
      return await addDoc(this._referencesService.getHireUsCollectionReference(), {
        ...hireUsData,
        createdAt: Timestamp.now()
      })
    } catch (e) {
      console.error('Firebase sendHireUsRequest error:', e);
      throw e;
    }
  }
}
