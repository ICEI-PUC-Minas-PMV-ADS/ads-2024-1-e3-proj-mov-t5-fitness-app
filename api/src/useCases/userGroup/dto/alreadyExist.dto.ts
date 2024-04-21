import { Optional } from '@prisma/client/runtime/library';
import { IUserGroupEntity } from '../entities/userGroup.entity';

export type IAlreadyExistUserGroupDto = Optional<
    Pick<IUserGroupEntity, 'name' | 'id'>
>;
