import { IUserEntity } from 'src/useCases/user/entities/user.entity';
import { IUserGroupEntity } from '../entities/userGroup.entity';

type IAuthDataReq = Pick<IUserEntity, 'email' | 'password'>;

export type IAuthLoginReqDto = IAuthDataReq;

export type IAuthLoginResDto = string;

export interface IUserAlreadyExistRes {
    exist: boolean;
    value?: {
        id: number;
        user: string;
        email: string;
        password: string;
        birthDate: Date;
        cpf: string;
        motherName: string;
        groupId: number;
        group: IUserGroupEntity;
        createdAt: Date;
        updatedAt: Date;
    };
}

export interface ICreateLoginAuditReq {
    source: string;
    date: string;
    operation: string;
    process: string;
    user: string;
    token: string;
}
