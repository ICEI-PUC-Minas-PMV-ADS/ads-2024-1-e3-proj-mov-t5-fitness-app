import { IUserGroupEntity } from '../../entities/userGroup.entity';

export interface IPayloadJWT {
    id: number;
    name: string;
    email: string;
    group: IUserGroupEntity;
}
