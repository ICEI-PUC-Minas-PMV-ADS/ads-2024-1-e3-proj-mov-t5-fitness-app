import { IUserGroupEntity } from '../entities/userGroup.entity';

export type IDeleteUserGroupDto = Pick<IUserGroupEntity, 'id'>;

export type IDeleteUserGroupRes = IUserGroupEntity;
