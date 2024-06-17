import { ILanguage } from '../interface';

class Ingles implements ILanguage {
    internalServerError = 'Internal server error. Please try again later.';
    errorCreatedUser = 'User could not be registered';
    errorUserAlreadyExist =
        'The email you entered has already been registered. Try logging in or registering with another email';
    errorUserNotExist = 'User not exist';
    authPasswordIsRequired = 'Password is required!';
    authVerifyPassOrEmail =
        'The password/email you entered is incorrect. Please check your details and try again';
    authSuccessfullyLogin = 'Success Login!';
    authSuccessfullyLogout = 'User successfully logged out!';
    authSuccessfullyRefresh: 'Success Fully Refresh Token Generated!';
    successCreatedUser = 'User successfully registered!';
    errorUpdatedUser = 'User data could not be updated';
    successUpdatedUser = 'User data updated successfully!';
    errorDeletedUser = 'The user entered could not be deleted';
    successDeletedUser = 'Successful deletion of user!';
    errorListUser = 'User could not be listed';
    successListUser = 'User successfully listed!';
    errorListUserAll = 'Unable to list users';
    successListUserAll = 'Users listed successfully';
    errorCreatedAgenda =
        'It was not possible to register a new agenda for the user';
    errorAgendaAlreadyExist =
        'There is already a schedule registered for this user';
    successCreatedAgenda = 'Agenda successfully registered';
    successDeletedAgenda = 'Agenda successfully deleted';
    errorDeletedAgenda = 'The selected agenda could not be deleted';
    errorListAgendaAll = 'It was not possible to list your agenda';
    successListAgendaAll = 'Agenda listed successfully!';
    errorListAgenda = 'Error listing agenda';
    successListAgenda = 'Agenda listed successfully!';
    errorAgendaNotExist = 'We could not find an agenda linked to this user!';
    errorUpdatedAgenda = 'Your agenda could not be updated!';
    successUpdatedAgenda = 'Agenda updated successfully!';
    exerciseNotReported =
        'Your schedule must have at least one exercise linked';
    daysNotReported = 'You need to enter a day to register a new schedule';
    errorExerciseAlreadyExist =
        'This exercise has already been registered in the system!';
    nameExerciseIsRequired =
        'Attention! You must enter a name for the exercise';
    errorCreatedExercise = 'Error trying to register a new exercise!';
    successCreatedExercise = 'Exercise registered successfully!';
    errorDeletedExercise = 'Exercise could not be deleted';
    successDeletedExercise = 'Exercise successfully deleted!';
    errorListExerciseAll = 'Error listing exercises!';
    successListExerciseAll = 'Exercises listed successfully!';
    errorListExercise = 'Error listing exercise!';
    successListExercise = 'Exercise listed successfully!';
    errorExerciseNotExist = 'The selected exercise could not be found';
    errorUpdatedExercise = 'Error updating the exercise!';
    successUpdatedExercise = 'Exercise updated successfully!';
}

export const ingles = new Ingles();
