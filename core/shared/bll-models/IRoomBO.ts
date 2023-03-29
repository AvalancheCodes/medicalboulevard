import IRoomEntity from "../entities/IRoomEntity";
import IRoomAmenityEntity from "../entities/IRoomAmenityEntity";
import IMedicalSpaceCoordinatorEntity from "../entities/IMedicalSpaceCoordinatorEntity";
import { EntityWithId } from "../entities/utils/EntityWithId";

export default interface IRoomBO extends EntityWithId<IRoomEntity> {
  _amenitiesIncluded: EntityWithId<IRoomAmenityEntity>[];
  _amenitiesNotIncluded: EntityWithId<IRoomAmenityEntity>[];
  _medicalSpaceCoordinator: EntityWithId<IMedicalSpaceCoordinatorEntity>;
}
