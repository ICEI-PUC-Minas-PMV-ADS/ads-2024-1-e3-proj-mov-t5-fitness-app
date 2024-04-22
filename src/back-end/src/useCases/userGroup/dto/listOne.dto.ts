import { Optional } from '@prisma/client/runtime/library';
import { IUserGroupEntity } from '../entities/userGroup.entity';

export type IListOneUserGroupDto = Optional<
    Pick<IUserGroupEntity, 'id' | 'name'>
>;

export type IListOneUserGroupRes = IUserGroupEntity;
