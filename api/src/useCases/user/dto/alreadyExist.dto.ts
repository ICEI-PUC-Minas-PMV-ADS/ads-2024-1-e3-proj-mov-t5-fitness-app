import { Optional } from '@prisma/client/runtime/library';
import { IUserEntity } from '../entities/user.entity';

export type IAlreadyExistUserDto = Optional<Pick<IUserEntity, 'email' | 'id'>>;
