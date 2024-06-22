import { useContext, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { Link, useNavigate } from 'react-router-native';
import imageGraphic from '../../assets/graphic.png';
import { axiosInstance } from '../../config/axios';
import { UserContext } from '../../context/userContext';
import { userDataDefault } from '../../context/userContext/defaultData';
import { homePageStyles } from './styleds.js';

export const Gateway = () => {

  const navigate = useNavigate();

  const { isAuth, userId, handleSetAgenda } = useContext(UserContext);

  const [registerAgenda, setRegisterAgenda] = useState(false);

  const getUserData = async () => {
    try {
      const { data } = await axiosInstance.get(`/agenda/list/one`, {
        params: {
          userId,
        }
      });

      if (data.statusCode === 200) {
        setRegisterAgenda(true);
        handleSetAgenda(data.value);
      } else {
        handleSetAgenda(userDataDefault);
        alert('Não foi possível localizar uma agenda vinculada a esse usuário!');
      }
    } catch (error) {
      alert('Erro interno da aplicação!');
    }
  };

  useEffect(() => {
    if (!isAuth) navigate('/login')
    else getUserData()
  }, []);

  return (
    <>
      {
        isAuth && (
          <>
            {
              registerAgenda ?
                (
                  <View style={homePageStyles.container}>
                    <Text style={homePageStyles.title} >
                      Sua Agenda
                    </Text>
                    <Image style={homePageStyles.image} source={imageGraphic} />
                    <Text style={homePageStyles.description} >
                      Anotando pesos e <br /> repetições de cada treino, <br /> vai te dar mais oportunidade <br /> e motivação para atingir os objetivos dos seus alunos!
                    </Text>
                    <Link to="/list-training" style={homePageStyles.button}>
                      <Text style={homePageStyles.buttonText} >Treino do Dia</Text>
                    </Link>
                    <Text style={homePageStyles.subTitle} >
                      <Link
                        to="/grid-agenda"
                        style={homePageStyles.link}
                      >
                        <Text>Editar sua Agenda</Text>
                      </Link>
                    </Text>
                  </View>
                )
                : (
                  <View style={homePageStyles.container}>
                    <Text style={homePageStyles.title} >
                      Registrar Nova Agenda
                    </Text>
                    <Image style={homePageStyles.image} source={imageGraphic} />
                    <Text style={homePageStyles.description} >
                      Anotando pesos e <br /> repetições de cada treino, <br /> vai te dar mais oportunidade <br /> e motivação para atingir os objetivos dos seus alunos!
                    </Text>
                    <Link to="/grid-agenda" style={homePageStyles.button}>
                      <Text style={homePageStyles.buttonText} >Cadastrar Nova Agenda</Text>
                    </Link>
                  </View>
                )
            }
          </>
        )
      }
    </>
  );
}
