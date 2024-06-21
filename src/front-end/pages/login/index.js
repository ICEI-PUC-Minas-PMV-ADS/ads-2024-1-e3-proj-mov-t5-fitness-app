import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Link, useNavigate } from 'react-router-native';
import { axiosInstance } from '../../config/axios.js';
import { useDataUserValidate } from '../../hooks/userDataValidate.js';
import { loginStyles } from './styleds.js';

export const LoginPage = () => {
  const [email, onChanveEmail] = useState('');
  const [password, onChanvePassword] = useState('');

  const navigate = useNavigate();
  const validate = useDataUserValidate();

  const onLogin = async () => {
    try {
      const { error, isValid } = validate({ email });

      if (isValid) {
        const { data } = await axiosInstance.post('/auth/login', {
          email,
          password,
        });

        
        if (data.statusCode === 200) {
          console.log(data);
          navigate('/hello')
        } else alert(data.message);
        
      } else alert(error);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={loginStyles.container}>
      <View style={loginStyles.goBackLinkContainer} >
        <Link
          to="/"
        >
          <Text style={loginStyles.goBackLink} >X</Text>
        </Link>
      </View>
      <View style={loginStyles.containerTitle} >
        <Text style={loginStyles.titleGren} >Login </Text>{"   "}
        <Text style={loginStyles.titleWhite} >com sua conta</Text>
      </View>
      <View style={loginStyles.containerInputs} >
        <TextInput
          style={loginStyles.input}
          onChangeText={onChanveEmail}
          value={email}
          placeholder="E-mail"
          keyboardType="email-address"
        />
        <TextInput
          style={loginStyles.input}
          onChangeText={onChanvePassword}
          value={password}
          placeholder="Senha"
          keyboardType="visible-password"
        />
      </View>
      <Pressable
        onPress={onLogin}
        style={loginStyles.button}
        accessibilityLabel="Botão de login de usuários"
      >
        <Text style={loginStyles.buttonText} >Login</Text>
      </Pressable>
    </View >
  );
}
