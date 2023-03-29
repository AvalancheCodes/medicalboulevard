import IBaseEntity from "../abstractions/IBaseEntity";

export type EntityWithId<T extends IBaseEntity> = T & { _id: string };
