import { IUserEntity } from '../entities/user.entity';

export type ICreateUserDto = Omit<IUserEntity, 'id'>;

export type ICreateUserRes = Omit<IUserEntity, 'password'>;
