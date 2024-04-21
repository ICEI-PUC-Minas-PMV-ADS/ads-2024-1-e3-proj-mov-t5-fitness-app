import { ILanguage } from '../interface';

class PortuguesBR implements ILanguage {
    // Mensagens Globais
    internalServerError =
        'Erro interno de servidor. Por favor, tente novamente mais tarde.';

    // Mensagens Entidade: User
    errorCreatedUser = 'Não foi possível cadastar o usuário';
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
