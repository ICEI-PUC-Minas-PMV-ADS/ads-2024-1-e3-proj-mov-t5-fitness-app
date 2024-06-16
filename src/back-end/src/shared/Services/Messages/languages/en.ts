import { ILanguage } from '../interface';

class Ingles implements ILanguage {
    // Mensagens Globais
    internalServerError = 'Internal server error. Please try again later.';

    // Mensagens Entidade: User
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
}

export const ingles = new Ingles();