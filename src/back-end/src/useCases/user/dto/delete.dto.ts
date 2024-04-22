import { IUserEntity } from '../entities/user.entity';

export type IDeleteUserDto = Pick<IUserEntity, 'id'>;

export type IDeleteUserRes = Omit<IUserEntity, 'password'>;
