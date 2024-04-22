import { ILanguage } from '../interface';

class PortuguesBR implements ILanguage {
    // Mensagens Globais
    internalServerError =
        'Erro interno de servidor. Por favor, tente novamente mais tarde.';

    // Mensagens Entidade: User
    errorCreatedUser = 'Não foi possível cadastar o usuário';
    errorUserAlreadyExist =
        'O email informado já foi cadastrado. Tente fazer login ou se registre com outro email';
    errorUserNotExist = 'O usuário informado não existe';
    authVerifyPassOrEmail =
        'A senha/email informado está incorreto. Por favor, verifique seus dados e tente novamente.';
    authSuccessfullyLogin = 'Login realizado com sucesso';
    authPasswordIsRequired = 'Informe sua senha para prosseguir!';
    authSuccessfullyLogout = 'Usuário deslogado com sucesso!';
    authSuccessfullyRefresh: 'Refresh Token gerado com sucesso!';
    successCreatedUser = 'Usuário cadastrado com sucesso!';
    errorUpdatedUser = 'Não foi possível atualizar os dados do usuário';
    successUpdatedUser = 'Dados do usuário atualizados com sucesso!';
    errorDeletedUser = 'Não foi possível deletar o usuário informado';
    successDeletedUser = 'Sucesso ao deletar o usuário!';
    errorListUser = 'Não foi possível listar o usuário';
    successListUser = 'Usuário listado com sucesso!';
    errorListUserAll = 'Não foi possível listar os usuários';
    successListUserAll = 'Usuários listados com sucesso';
}

export const portuguesBR = new PortuguesBR();
