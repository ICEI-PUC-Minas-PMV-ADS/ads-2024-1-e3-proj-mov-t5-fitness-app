# Registro de Testes de Software

<table>
<tr>
<td>Caso de teste
	
</td>
<td>CT-01 - Funcionamento da API(Application Programming Interface) para os usuários.
</td>
</tr>

<tr>
<td>Requisitos </br>
  Associados</td>
<td>RF-001 - A aplicação deverá permitir a inclusão de novos usuários. </br>
RF-002 - A aplicação deverá permitir a alteração dos treinos. </br>
RF-003 - A aplicação deverá permitir a exclusão dos treinos. </br>
RF-004 - A aplicação deverá permitir a inclusão de outros exercicios. 
  
</td>
</tr>

<tr>
<td>Objetivo do Teste</td>
<td>Verificar e testar o cadastro de novos alunos e instrutores juntamente com a exclusão de cadastros.</td>
</tr>

<tr>
<td>Passos</td>
<td>1 - Incluir dados no Banco de Dados NoSQL através da rota pré-definida.</br>
2 - Alterar dados no Banco de Dados NoSQL através da rota pré-definida.</br>
3 - Excluir dados no Banco de Dados NoSQL através da rota pré-definida.</br>
</tr>

<tr>
<td>Critérios de êxito</td>
<td>Os usuários devem conseguir realizar  inclusão, modificação e exclusão dos treinos no sistema.</td>
</tr>




<table>
<tr>
<td>Caso de teste
	
</td>
<td>CT-02 - Funcionamento da interface do usuário sem estar logado
</td>
</tr>

<tr>
<td>Requisitos </br>
  Associados</td>
<td>RF-001 - A aplicação não deverá permitir a visualização do usuário antes de estar logado. </br>
RF-002 - A aplicação deverá apresentar as opções de cadastro e login. </br>
RF-003 - O usuário que não possuir conta deverá conseguir realizar o cadastro na aplicação.  </br>
RF-004 - O usuário que já possuir cadastro deverá logar na aplicação.
  
</td>
</tr>

<tr>
<td>Objetivo do Teste</td>
<td>Verificar se o usuário não logado terá acesso as ferramentas de login e de cadastro.</td>
</tr>

<tr>
<td>Passos</td>
<td>1 - Acessar o aplicativo. </br>
2 - Deverá aparecer a página principal da aplicação. </br>
3 - Deverá escolher uma das opções (cadastro ou login). </br>
4 - Deverá realizar o cadastro ou login. </br>
5 - Deverá ser logado com êxito
</tr>

<tr>
<td>Critérios de êxito</td>
<td>Após o acesso ao aplicativo o usuário deverá ter acesso as opções de cadastro e login. Após a escolha deverá ser redirecionado a página respectiva da escolha. Após o preenchimento deverá ser encaminhado a página principal da aplicação</td>
</tr>






<table>
<tr>
<td>Caso de teste
	
</td>
<td>CT-03 - Funcionamento da interface do usuário após estar logado
</td>
</tr>

<tr>
<td>Requisitos </br>
  Associados</td>
<td>RF-001 - O sistema deverá permitir a alteração dos treinos. </br>
RF-002 - O sistema deverá permitir a consulta dos treinos. </br>
RF-003 - O sistema deverá permitir a alteração dos dados. </br>
RF-004 -  O sistema deverá permitir a alteração da unidade.
  
</td>
</tr>

<tr>
<td>Objetivo do Teste</td>
<td>Verificar se todas as funções estarão disponiveis para o usuário </td>
</tr>

<tr>
<td>Passos</td>
<td>1 - Verificar na barra de menu a função que desejar.</br>
2 - Clicar na opção desejada.</br>
3 - Realizar a função descrita.</br>
4 - Verificar os dados. </br>
5 - Salvar as alterações.
</tr>

<tr>
<td>Critérios de êxito</td>
<td>O usuário deverá conseguir utilizar todas as funções incluindo adicionar, editar e excluir os dados do site. </td>
</tr>
