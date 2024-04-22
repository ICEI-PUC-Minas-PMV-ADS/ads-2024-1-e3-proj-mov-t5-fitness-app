import { Text, View } from 'react-native';
import { homePageStyles } from './styleds.js';


export const Hello = () => {
  return (
    <View style={homePageStyles.container}>
      <Text style={homePageStyles.title} >
        Oie, seja bem vindo ao Fitnes App
      </Text>
    </View>
  );
}
