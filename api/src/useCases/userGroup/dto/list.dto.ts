import { Optional } from '@prisma/client/runtime/library';
import { IPaginationOffSetProps } from 'src/shared/interfaces/IPaginationProps';
import { IUserGroupEntity } from '../entities/userGroup.entity';

export type IListUserGroupDto = Optional<IPaginationOffSetProps>;

export type IListUserGroupRes = IUserGroupEntity;
