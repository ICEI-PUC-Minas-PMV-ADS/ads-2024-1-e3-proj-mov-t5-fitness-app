import { IUserEntity } from '../entities/user.entity';

export interface ICreateUserDto
    extends Omit<IUserEntity, 'id' | 'userGroup' | 'userGroupId'> {
    userGroupId?: number;
}

export type ICreateUserRes = Omit<IUserEntity, 'password'>;
