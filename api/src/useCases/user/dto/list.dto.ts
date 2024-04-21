import { Optional } from '@prisma/client/runtime/library';
import { IPaginationOffSetProps } from 'src/shared/interfaces/IPaginationProps';
import { IUserEntity } from '../entities/user.entity';

export type IListUserDto = Optional<IPaginationOffSetProps>;

export type IListUserRes = Omit<IUserEntity, 'password'>;
