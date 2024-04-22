import { Image, Text, View } from 'react-native';
import { Link } from "react-router-native";
import imageHomePage from '../../assets/homePageImage.jpg';
import { homePageStyles } from './styleds.js';


export const HomePage = () => {
  return (
    <View style={homePageStyles.container}>
      <Image style={homePageStyles.image} source={imageHomePage} />
      <Link to="/login" style={homePageStyles.button}>
        <Text style={homePageStyles.buttonText} >Iniciar</Text>
      </Link>
      <Text style={homePageStyles.title} >
        Não possui uma conta? {' '}  
        <Link
          to="/register"
          style={homePageStyles.link}
        >
          <Text>Cadastre-se</Text>
        </Link>
      </Text>
    </View>
  );
}
