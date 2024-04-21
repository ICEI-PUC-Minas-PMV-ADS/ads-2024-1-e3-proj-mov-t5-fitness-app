import { IUserEntity } from '../entities/user.entity';

export type IUpdateUserDto = IUserEntity;

export type IUpdateUserRes = Omit<IUserEntity, 'password'>;
