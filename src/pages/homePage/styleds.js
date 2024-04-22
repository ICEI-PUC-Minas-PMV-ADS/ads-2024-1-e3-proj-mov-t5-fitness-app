import { StyleSheet } from "react-native";

export const homePageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2e',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  image: {
    width: '100vw',
    height: '70vh'
  },
  title: {
    fontSize: '.8rem',
    color: "#fff"
  },
  button: {
    backgroundColor: '#0cfb8c',
    height: '50px',
    width: '70%',
    minWidth: '100px',
    borderRadius: '8px',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: "bold",
    fontSize: '1.2rem'
  },
  link: {
    color: '#0cfb8c',
    fontWeight: 'bold',
    marginBottom: 15
  }
});