import { IUserEntity } from '../entities/user.entity';

export type IListOneUserDto = Pick<IUserEntity, 'id'>;

export type IListOneUserRes = Omit<IUserEntity, 'password'>;
