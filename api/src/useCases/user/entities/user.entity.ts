import { User } from '@prisma/client';
import { IUserGroupEntity } from 'src/useCases/auth/entities/userGroup.entity';

export interface IUserEntity extends Omit<User, 'createdAt' | 'updatedAt'> {
    userGroup: IUserGroupEntity;
    createdAt?: Date;
    updatedAt?: Date;
}
