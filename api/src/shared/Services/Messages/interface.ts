export type TypesLanguage = 'pt-br' | 'en';

export interface ILanguage {
    // Mensagens Globais
    internalServerError: string;

    // Mensagens Entidade: User
    errorCreatedUser: string;
    errorUserAlreadyExist: string;
    errorUserNotExist: string;
    authPasswordIsRequired: string;
    authVerifyPassOrEmail: string;
    authSuccessfullyLogin: string;
    authSuccessfullyLogout: string;
    authSuccessfullyRefresh: string;
    successCreatedUser: string;
    errorUpdatedUser: string;
    successUpdatedUser: string;
    errorDeletedUser: string;
    successDeletedUser: string;
    errorListUser: string;
    successListUser: string;
    errorListUserAll: string;
    successListUserAll: string;
}
