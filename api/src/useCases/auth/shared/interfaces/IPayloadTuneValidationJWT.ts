import { IAuthToCollect, IPatientKeys } from './IPatientData';

export interface IPayloadTuneValidationJWT {
    user: {
        id?: string;
        type: 'patient' | 'professional';
        name?: string;
    };
    patientData: {
        mpiKey: string;
        authenticationConsent?: IAuthToCollect;
    } & IPatientKeys;
}
