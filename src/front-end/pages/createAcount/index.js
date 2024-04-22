import { useState } from 'react';
import { Pressable, Text, TextInput, View } from 'react-native';
import { Link, useNavigate } from 'react-router-native';
import { axiosInstance } from '../../config/axios.js';
import { createAcountStyles } from './styleds.js';

export const CreateAcount = () => {
  const [email, onChanveEmail] = useState('');
  const [name, onChanveName] = useState('');
  const [password, onChanvePassword] = useState('');

  const navigate = useNavigate();

  const onCreateUser = async () => {
    try {
      if (email && password) {
        const { data } = await axiosInstance.post('/user/create', {
          name,
          email,
          password,
        });

        if (data.statusCode === 201) {
          navigate('/login')
        } else alert(data.message)
      };
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={createAcountStyles.container}>
      <View style={createAcountStyles.goBackLinkContainer} >
        <Link
          to="/"
        >
          <Text style={createAcountStyles.goBackLink} >X</Text>
        </Link>
      </View>
      <View style={createAcountStyles.containerTitle} >
        <Text style={createAcountStyles.titleGren} >Cadastre </Text>{"   "}
        <Text style={createAcountStyles.titleWhite} >sua conta</Text>
      </View>
      <View style={createAcountStyles.containerInputs} >
        <TextInput
          style={createAcountStyles.input}
          onChangeText={onChanveName}
          value={name}
          placeholder="Nome"
          keyboardType="name-phone-pad"
        />
        <TextInput
          style={createAcountStyles.input}
          onChangeText={onChanveEmail}
          value={email}
          placeholder="E-mail"
          keyboardType="email-address"
        />
        <TextInput
          style={createAcountStyles.input}
          onChangeText={onChanvePassword}
          value={password}
          placeholder="Senha"
          keyboardType="visible-password"
        />
      </View>
      <Pressable
        onPress={onCreateUser}
        style={createAcountStyles.button}
        accessibilityLabel="Botão de cadastro de usuários"
      >
        <Text style={createAcountStyles.buttonText} >Cadastrar</Text>
      </Pressable>
    </View >
  );
}
