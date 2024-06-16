import { Image, Text, View } from 'react-native';
import { Link } from 'react-router-native';
import imageGraphic from '../../assets/graphic.png';
import { homePageStyles } from './styleds.js';

export const Hello = () => {
  return (
    <View style={homePageStyles.container}>
      <Text style={homePageStyles.title} >
        Registro
      </Text>
      <Image style={homePageStyles.image} source={imageGraphic} />
      <Text style={homePageStyles.description} >
        Anotando pesos e <br /> repetições de cada treino, <br /> vai te dar mais oportunidade <br /> e motivação para atingir os seus objetivos!
      </Text>
      <Link to="/login" style={homePageStyles.button}>
        <Text style={homePageStyles.buttonText} >Vá Para Os Treinos</Text>
      </Link>
    </View>
  );
}
