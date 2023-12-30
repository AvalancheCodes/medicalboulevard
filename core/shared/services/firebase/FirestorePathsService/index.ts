export default class FirestorePathsService {
  private readonly _userProfilesCollectionName: string = "user-profiles";
  private readonly _hireUsCollectionName: string = "hire-us"
  private readonly _medicalSpaceCoordinatorsCollectionName: string = "medical-property-coordinators";

  //#region UserProfiles
  getUserProfilesCollectionPath(): string {
    return this._userProfilesCollectionName;
  }

  getUserProfileDocumentPath(userId: string): string {
    return this.getUserProfilesCollectionPath() + "/" + userId;
  }

  //#endregion UserProfiles

  //#region HireUs
  getHireUsCollectionReference(): string {
    return this._hireUsCollectionName;
  }

  getHireUsDocumentReference(itemId: string): string {
    return this.getHireUsCollectionReference() + "/" + itemId;
  }

  //#endregion HireUs

  //#region Medical Space Coordinators
  getMedicalSpaceCoordinatorsCollectionReference(): string {
    return this._medicalSpaceCoordinatorsCollectionName;
  }

  getMedicalSpaceCoordinatorDocumentReference(itemId: string): string {
    return this.getMedicalSpaceCoordinatorsCollectionReference() + "/" + itemId;
  }

  //#endregion Medical Space Coordinators
}
