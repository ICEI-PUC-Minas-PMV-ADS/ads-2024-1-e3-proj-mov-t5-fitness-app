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
    errorCreatedAgenda =
        'Não foi possível cadastrar uma nova agenda para o usuário';
    errorAgendaAlreadyExist = 'Esse usuário já possui uma agenda cadastrada';
    successCreatedAgenda = 'Agenda cadastrada com sucesso';
    successDeletedAgenda = 'Agenda deletada com sucesso';
    errorDeletedAgenda = 'Não foi possível deletar a agenda selecionada';
    errorListAgendaAll = 'Não foi possível listar suas agendas';
    successListAgendaAll = 'Agendas listadas com sucesso!';
    errorListAgenda = 'Erro ao listar a agenda';
    successListAgenda = 'Agenda listada com sucesso!';
    errorAgendaNotExist =
        'Não foi possível localizar uma agenda vinculada a esse usuário!';
    errorUpdatedAgenda = 'Não foi possível atualizar sua agenda!';
    successUpdatedAgenda = 'Agenda atualizada com sucesso!';
    exerciseNotReported =
        'Sua agenda precisa ter ao menos um exercício vinculado';
    daysNotReported =
        'É necessário informar um dia para cadastrar uma nova agenda';
    errorExerciseAlreadyExist = 'Esse exercício já foi cadastrado no sistema!';
    nameExerciseIsRequired =
        'Atenção! É necessário informar um nome para o exercício';
    errorCreatedExercise = 'Erro ao Tentar Cadastrar um Novo Exercício!';
    successCreatedExercise = 'Exercício cadastrado com sucesso!';
    errorDeletedExercise = 'Não foi possível deletar o exercício';
    successDeletedExercise = 'Exercício deletado com sucesso!';
    errorListExerciseAll = 'Erro ao listar os exercícios!';
    successListExerciseAll = 'Exercícios listados com sucesso!';
    errorListExercise = 'Erro ao listar o exercício!';
    successListExercise = 'Exercício listado com sucesso!';
    errorExerciseNotExist =
        'Não foi possível localizar o exercício selecionado';
    errorUpdatedExercise = 'Erro ao atualizar o exercício!';
    successUpdatedExercise = 'Exercício atualizado com sucesso!';
}

export const portuguesBR = new PortuguesBR();
