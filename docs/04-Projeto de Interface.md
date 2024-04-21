
# Projeto de Interface

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).

 Apresente as principais interfaces da plataforma. Discuta como ela foi elaborada de forma a atender os requisitos funcionais, não funcionais e histórias de usuário abordados nas <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a>.

## Diagrama de Fluxo

O diagrama apresenta o estudo do fluxo de interação do usuário com o sistema interativo e  muitas vezes sem a necessidade do desenho do design das telas da interface. Isso permite que o design das interações seja bem planejado e gere impacto na qualidade no design do wireframe interativo que será desenvolvido logo em seguida.

O diagrama de fluxo pode ser desenvolvido com “boxes” que possuem internamente a indicação dos principais elementos de interface - tais como menus e acessos - e funcionalidades, tais como editar, pesquisar, filtrar, configurar - e a conexão entre esses boxes a partir do processo de interação. Você pode ver mais explicações e exemplos https://www.lucidchart.com/blog/how-to-make-a-user-flow-diagram.

![Exemplo de Diagrama de Fluxo](img/diagramafluxo2.jpg)

As referências abaixo irão auxiliá-lo na geração do artefato “Diagramas de Fluxo”.

> **Links Úteis**:
> - [Fluxograma online: seis sites para fazer gráfico sem instalar nada | Produtividade | TechTudo](https://www.techtudo.com.br/listas/2019/03/fluxograma-online-seis-sites-para-fazer-grafico-sem-instalar-nada.ghtml)

## Wireframes
Conforme o diagrama de fluxo do projeto, apresentado no item anterior, as telas do sistema 
são apresentadas em detalhes nos itens que se seguem. Para visualizar o wireframe 
interativo, acesse o [Ambiente Figma do projeto](https://www.figma.com/file/nbflwFG3Nav2u20pyj1AdP/Untitled?type=design&node-id=0-1&mode=design)
<br>
As telas do sistema apresentam uma estrutura comum que é apresentada na Figura 7. Nesta 
estrutura, existem 3 grandes blocos, descritos a seguir. São eles:<br>
● Menu Inferior - Este é o principal meio de navegação no aplicativo. Ele permite aos usuários alternar facilmente entre diferentes seções do aplicativo. Este menu é especialmente útil em dispositivos móveis, onde o espaço da tela é limitado.<br>
● Conteúdo - apresenta o conteúdo da tela em questão;<br>
Essa estrutura simplificada facilita a navegação do usuário e torna a experiência do usuário mais intuitiva e eficiente.

<br><br>

<h2>Tela do Cliente</h2>
<br>

**Tela - Home Page**
<br>
Esta é a primeira tela que o usuário vê ao abrir o aplicativo, possui o botão “Iniciar”. Ao clicar em “Iniciar”, o usuário é direcionado para a tela de Login. Se o usuário esqueceu a senha, há um link para redefini-la. Se o usuário não for encontrado, ele será direcionado para a tela de Cadastro.
<br>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-fitness-app/assets/129282137/39fd9979-21f5-4f6f-a149-2a9c5dc40448)
<center>Figura 1 - Tela Home Page</center>

<br><br>
**Cadastro**
<br>
Nesta tela, os novos usuários podem se registrar no aplicativo, fornecendo as informações necessárias como nome, email, senha. Após o preenchimento dos dados, o usuário pode prosseguir para as próximas etapas do processo de cadastro.
<br>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-fitness-app/assets/129282137/d668ecb8-b7e6-45c5-a9ef-47dc4ebb0868)
<center>Figura 2 - Tela de Cadastro</center>

<br><br>
**Tela - Login**
<br>
Os usuários registrados podem entrar no aplicativo usando suas credenciais. Se as credenciais estiverem corretas, o usuário será direcionado para a tela inicial do aplicativo.
<br>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-fitness-app/assets/129282137/2d172313-f95b-4307-a238-903310b53596)
<center>Figura 3 - Tela de Login</center>

<br><br>
**Tela - Esqueceu sua senha?**
<br>
Se um usuário esquecer sua senha, ele pode redefini-la através desta tela. O usuário precisa fornecer o email associado à conta e seguir as instruções enviadas para esse email para redefinir a senha.
<br>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-fitness-app/assets/129282137/8d4bba6a-3569-45b2-b8de-46b3ba1322f0)
<center>Figura 4 - Tela Esqueceu sua senha?</center>

<br><br>
**Tela - Pergunta 1**
<br>
Esta tela é projetada para entender o nível de condicionamento físico do usuário. Ela apresenta uma pergunta direta sobre o nível de condicionamento físico do usuário, com opções variando de iniciante a avançado. O usuário pode selecionar a opção que melhor descreve seu nível atual de condicionamento físico. Essas informações ajudam o aplicativo a personalizar os treinos de acordo com a capacidade do usuário.
<br>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-fitness-app/assets/129282137/abad037d-1e70-4c55-ad48-3bb828fbbe8d)
<center>Figura 5 - Tela Pergunta 1</center>

<br><br>
**Tela - Pergunta 2**
<br>
Esta tela busca entender a disponibilidade do usuário para se exercitar durante a semana. Ela pergunta ao usuário quantos dias por semana ele planeja se exercitar. O usuário pode selecionar os dias da semana que pretende dedicar ao treino. Essas informações são importantes para criar um plano de treino equilibrado e gerenciável para o usuário.  
<br>
 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-fitness-app/assets/129282137/012b056a-1983-4fb7-be01-ebcbc5248ed3)
 <center>Figura 6 - Tela Pergunta 2</center>
 
<br><br>
 **Tela - Treinos**
 <br>
Esta tela apresenta os treinos disponíveis para o usuário. Cada treino é representado por uma cartão que mostra informações básicas sobre o treino. O usuário pode selecionar um treino para ver mais detalhes.
<br>
 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-fitness-app/assets/129282137/f6f242dd-2f2c-4a15-aff4-5a077a925f03)
 <center>Figura 7 - Tela de Treinos</center>
 
<br><br>
 **Tela - Verifique o seu treino**
 <br>
Aqui, o usuário pode verificar os detalhes do seu treino. A tela mostra informações como o nome do treino, a descrição, os exercícios incluídos, etc.
<br>
 ![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-fitness-app/assets/129282137/9167a45d-4dc6-4e3a-86d7-bf828f76d5b5)
 <center>Figura 8 - Tela Verifique o seu treino</center>
  
<br><br>
**Tela - Criar o seu treino**
<br>
Esta tela permite ao usuário criar um treino personalizado. O usuário pode adicionar exercícios de uma lista disponível e definir detalhes como o número de séries, repetições e descanso entre as séries.
<br>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-fitness-app/assets/129282137/c1fcd0a8-c0af-4694-9d2d-b9ef5588c06e)
<center>Figura 9 - Tela Criar o seu treino - Membros musculares</center>

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-fitness-app/assets/129282137/6eb39aef-b4ee-4a02-b78c-9a7f82ea4e2d)
<center>Figura 10 - Tela Criar o seu treino - Exercícios</center>

<br><br>
**Tela - Registro**
<br>
Esta tela informa que o treino foi registrado e possui um botão “Vá para os treinos” que direciona a tela de Treinos.
<br>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-fitness-app/assets/129282137/0b95788d-c1e1-4d06-9e27-fcc34070fa32)
<center>Figura 11 - Tela de Registro</center>
<br><br>
**Tela - Mais**
<br>
Esta tela oferece acesso a configurações adicionais e informações sobre o aplicativo. O usuário pode alterar o local da academia, o nível de condicionamento físico, a meta de treino e os dias de treino
<br>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-fitness-app/assets/129282137/58d68418-c9f5-4671-8416-d9844c3ebb5a)
 <center>Figura 12 - Tela Mais</center>
<br><br>

<h2>Tela do Usuário</h2>
<br>

**Tela - Selecionar aluno para alteração ou cadastro de treino**
<br>
 Esta tela permite ao treinador selecionar um aluno para alterar ou criar um treino. O treinador pode selecionar um aluno de uma lista disponível.
 <br>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-fitness-app/assets/129282137/c431df8a-a929-4f37-8dc9-fac052374886)
<center>Figura 13 - Tela Selecionar aluno para alteração ou cadastro de treino - Selecionar Aluno</center>

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-fitness-app/assets/129282137/27c61fd6-ff6e-4743-889d-11c5d083e1fe)
<center>Figura 14 - Tela Selecionar aluno para alteração ou cadastro de treino - Exercícios do Aluno</center>

<br><br>
**Tela - Exercicios**
<br>
Aqui, o treinador pode ver e gerenciar os exercícios disponíveis. Cada exercício é representado por um cartão que mostra informações básicas sobre o exercício. O treinador pode selecionar um exercício para ver mais detalhes.
<br>
![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-fitness-app/assets/129282137/fd5e74e5-8a57-4ca1-a1ff-e38a2bca9bd0)
<center>Figura 15 - Tela de Exercícios</center>
<br><br>

**Tela - Mais**
<br>
Esta tela oferece acesso a configurações adicionais e informações sobre o aplicativo. O treinador pode ver informações sobre colaboradores e alunos.
<br>

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-fitness-app/assets/129282137/397f0a45-50f1-49df-bbc1-912e6ecda13f)
<center>Figura 16 - Tela Mais do Usuário</center>
<br><br>

**Tela - Alterações Cadastrais**
<br>
Esta tela ao usuário alterar seus dados como cargo, telefone, email e nome.
<br>

![image](https://github.com/ICEI-PUC-Minas-PMV-ADS/ads-2024-1-e3-proj-mov-t5-fitness-app/assets/129282137/0d2d2af4-f624-4be5-a048-a3e1968a1a56)
<center>Figura 17 - Tela Alterações Cadastrais</center>

> **Links Úteis**:
> - [Protótipos vs Wireframes](https://www.nngroup.com/videos/prototypes-vs-wireframes-ux-projects/)
> - [Ferramentas de Wireframes](https://rockcontent.com/blog/wireframes/)
> - [MarvelApp](https://marvelapp.com/developers/documentation/tutorials/)
> - [Figma](https://www.figma.com/)
> - [Adobe XD](https://www.adobe.com/br/products/xd.html#scroll)
> - [Axure](https://www.axure.com/edu) (Licença Educacional)
> - [InvisionApp](https://www.invisionapp.com/) (Licença Educacional)
