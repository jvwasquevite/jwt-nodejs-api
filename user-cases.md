# Use cases

### Create user

- ~~Não é permitido cadastrar mais de um usuário com o mesmo e-mail~~
- ~~Não é permitido cadastrar usuário sem e-mail~~

### Delete user

- ~~O usuário precisa estar autenticado na aplicação~~
- ~~O usuário precisa existir no banco de dados~~
- ~~Apenas o usuário ou admins podem deletar um usuário~~

### Update user

- ~~O usuário precisa estar autenticado na aplicação~~
- ~~Apenas o usuário ou admins podem atualizar seus dados~~
- ~~Não é permitido alterar a senha por essa requisição~~

### Update password

- O usuário precisa estar autenticado na aplicação
- Apenas o usuário pode alterar sua senha
- A alteração de senha só pode ser finalizada por meio da geração e autenticação de um token via query param

### Create tag

- ~~Não é permitido cadastrar tag sem nome~~
- ~~Não é permitido cadastrar mais de uma tag com o mesmo nome~~
- ~~Não é permitido o cadastro por usuários que não sejam administradores~~

### Create compliemt

- ~~Não é permitido um usuário cadastrar um elogio para si~~
- ~~Não é permitido cadastrar elogios para usuários inválidos~~
- ~~O usuário precisa estar autenticado na aplicação~~
