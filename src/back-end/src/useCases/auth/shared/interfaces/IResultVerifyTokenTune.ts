import { IPatientData } from './IPatientData';

interface IQuery {
    publicToken: string;
    date: Date;
}

export interface IResultVerifyTokenTune {
    _id: string;
    source: string;
    token: string;
    expires_in: number;
    date: Date;
    patient: {
        publicToken: string;
    };
    query?: IQuery[];
    patientData: IPatientData;
}
