export interface IBaseEntity {
}

export abstract class BaseEntity implements IBaseEntity {
  public readonly id: string;

  protected constructor(id: string) {
    this.id = id;
  }
}
