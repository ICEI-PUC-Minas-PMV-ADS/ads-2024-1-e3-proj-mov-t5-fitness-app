import { IUserGroupEntity } from '../entities/userGroup.entity';

export type ICreateUserGroupDto = Omit<IUserGroupEntity, 'id'>;

export type ICreateUserGroupRes = IUserGroupEntity;
