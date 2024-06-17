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
    errorCreatedAgenda: string;
    errorAgendaAlreadyExist: string;
    successCreatedAgenda: string;
    successDeletedAgenda: string;
    errorDeletedAgenda: string;
    errorListAgendaAll: string;
    successListAgendaAll: string;
    errorListAgenda: string;
    successListAgenda: string;
    errorAgendaNotExist: string;
    errorUpdatedAgenda: string;
    successUpdatedAgenda: string;
    exerciseNotReported: string;
    daysNotReported: string;
    errorExerciseAlreadyExist: string;
    nameExerciseIsRequired: string;
    errorCreatedExercise: string;
    successCreatedExercise: string;
    errorDeletedExercise: string;
    successDeletedExercise: string;
    errorListExerciseAll: string;
    successListExerciseAll: string;
    errorExerciseNotExist: string;
    errorUpdatedExercise: string;
    successUpdatedExercise: string;
}
