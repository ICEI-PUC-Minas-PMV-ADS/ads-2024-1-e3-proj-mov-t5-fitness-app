import { UserGroup } from '@prisma/client';

export interface IUserGroupEntity
    extends Omit<UserGroup, 'createdAt' | 'updatedAt'> {
    createdAt?: Date;
    updatedAt?: Date;
}
