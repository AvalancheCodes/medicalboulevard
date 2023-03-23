export class FirestorePathsService {
  private readonly _userProfilesCollectionName: string = "user-profiles";
  private readonly _hireUsCollectionName: string = "hire-us"

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
}
