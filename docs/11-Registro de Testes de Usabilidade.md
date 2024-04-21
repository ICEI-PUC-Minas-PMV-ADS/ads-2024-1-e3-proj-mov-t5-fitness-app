# Registro de Testes de Usabilidade

Após realizar os testes de usabilidade, obtém-se um relatório a partir das análises realizadas. O Registro de Testes de Usabilidade é um relatório que contém as evidências dos testes e relatos dos usuários participantes, baseado no Plano de Testes de Usabilidade desenvolvido para os casos de uso desta etapa.

<table>
  <tr>
    <th>Teste</th>
    <th>Objetivo do Teste</th>
    <th>Passos</th>
    <th>Resultado Esperado</th>
    <th>Resultado Obtido</th>
    <th>Problemas Identificados</th>
    <th>Propostas de Correções/Ajustes</th>
  </tr>
  <tr>
    <td>Cadastro/Login na plataforma (RF-01)</td>
    <td>Verificar se o usuário consegue se cadastrar e fazer login na plataforma.</td>
    <td>
      <ol>
        <li>Abrir o aplicativo.</li>
        <li>Clicar em "Iniciar".</li>
        <li>Clicar em "Criar uma conta".</li>
        <li>Preencher os campos necessários e clicar em "Cadastrar".</li>
        <li>Fazer logout.</li>
        <li>Tentar fazer login com as credenciais cadastradas.</li>
      </ol>
    </td>
    <td>O usuário deve ser capaz de se cadastrar e fazer login com sucesso.</td>
    <td>O usuário conseguiu se cadastrar, mas não conseguiu fazer login.</td>
    <td>O botão de login não estava funcionando corretamente.</td>
    <td>Corrigir o problema com o botão de login para garantir que ele funcione corretamente.</td>
  </tr>
  <tr>
    <td>Recuperação de Senha (RF-02)</td>
    <td>Verificar se o usuário consegue recuperar sua senha.</td>
    <td>
      <ol>
        <li>Abrir o aplicativo.</li>
        <li>Clicar em "Iniciar".</li>
        <li>Clicar em "Esqueceu sua senha?".</li>
        <li>Inserir o email associado à conta e seguir as instruções enviadas para esse email para redefinir a senha.</li>
      </ol>
    </td>
    <td>O usuário deve ser capaz de redefinir sua senha com sucesso.</td>
    <td>O usuário não recebeu o email com as instruções para redefinir a senha.</td>
    <td>O sistema de envio de emails estava com problemas.</td>
    <td>Corrigir o problema com o sistema de envio de emails para garantir que os emails sejam enviados corretamente.</td>
  </tr>
  <tr>
    <td>Alteração de Dados Cadastrais (RF-03)</td>
    <td>Verificar se o usuário consegue alterar seus dados cadastrais.</td>
    <td>
      <ol>
        <li>Fazer login no aplicativo.</li>
        <li>Acessar a tela de perfil do usuário.</li>
        <li>Alterar os dados desejados e salvar as alterações.</li>
      </ol>
    </td>
    <td>O usuário deve ser capaz de alterar seus dados cadastrais com sucesso.</td>
    <td>O usuário conseguiu acessar a tela de perfil, mas não conseguiu salvar as alterações.</td>
    <td>O botão de salvar estava desativado.</td>
    <td>Corrigir o problema com o botão de salvar para garantir que ele funcione corretamente.</td>
  </tr>
  <tr>
    <td>Criação de Plano de Treino (RF-06)</td>
    <td>Verificar se o treinador consegue criar um plano de treino.</td>
    <td>
      <ol>
        <li>Fazer login no aplicativo como treinador.</li>
        <li>Acessar a tela de criação de plano de treino.</li>
        <li>Adicionar exercícios de uma lista disponível e definir detalhes como o número de séries, repetições e descanso entre as séries.</li>
      </ol>
    </td>
    <td>O treinador deve ser capaz de criar um plano de treino com sucesso.</td>
    <td>O treinador conseguiu acessar a tela de criação de plano de treino, mas não conseguiu adicionar exercícios.</td>
    <td>A lista de exercícios disponíveis não estava carregando.</td>
    <td>Corrigir o problema com a lista de exercícios para garantir que ela carregue corretamente.</td>
  </tr>
  <tr>
    <td>Configurações (RF-08)</td>
    <td>Verificar se o usuário consegue configurar o local de treino, o nível de condicionamento físico e selecionar o exercício que deseja fazer do plano de treino.</td>
    <td>
      <ol>
        <li>Fazer login no aplicativo.</li>
        <li>Acessar a tela de configurações.</li>
        <li>Alterar as configurações desejadas e salvar as alterações.</li>
      </ol>
    </td>
    <td>O usuário deve ser capaz de alterar as configurações com sucesso.</td>
    <td>O usuário conseguiu acessar a tela de configurações, mas não conseguiu alterar as configurações.</td>
    <td>As configurações não estavam sendo salvas corretamente.</td>
    <td>Corrigir o problema com o salvamento de configurações para garantir que as alterações sejam salvas corretamente.</td>
  </tr>
</table>
