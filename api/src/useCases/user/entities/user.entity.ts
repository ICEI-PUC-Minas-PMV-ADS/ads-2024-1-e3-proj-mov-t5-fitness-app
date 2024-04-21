import { User } from '@prisma/client';

export interface IUserEntity extends Omit<User, 'createdAt' | 'updatedAt'> {
    createdAt?: Date;
    updatedAt?: Date;
}
