import { Optional } from '@prisma/client/runtime/library';
import { IUserEntity } from '../entities/user.entity';

export interface IListOneUserDto
    extends Optional<Pick<IUserEntity, 'id' | 'email'>> {
    config?: {
        showPassword?: boolean;
    };
}

export interface IListOneUserRes extends Omit<IUserEntity, 'password'> {
    password?: string;
}
