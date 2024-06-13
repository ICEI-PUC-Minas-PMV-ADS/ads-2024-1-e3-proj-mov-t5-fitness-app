
export const useDataUserValidate = () => {

  let dataUser = {
    type: 'default',
    isValid: true,
    error: '',
  };

  const validators = {
    email: (email) => {
      const emailRegex = /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/;
      
      if (!emailRegex.test(email)) dataUser = {
        error: 'Por favor, informe um email válido para prosseguir!',
        isValid: false,
        type: 'email',
      };
    },
    password: (password) => {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

      if (!passwordRegex.test(password)) dataUser = {
        error: 'Sua senha deve conter ao menos 8 caracteres, 1 letra maiúscula, 1 minúscula, 1 número e 1 caractere especial.',
        isValid: false,
        type: 'password',
      };
    }
  };

  return validate = ({ email, password }) => {
    if (password) validators.password(password);
    if (email) validators.email(email);
    return dataUser;
  }
};