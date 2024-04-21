import { IUserEntity } from '../entities/user.entity';

export type IUpdateUserDto = Omit<IUserEntity, 'userGroup'>;

export type IUpdateUserRes = Omit<IUserEntity, 'password'>;
