import { StyleSheet } from "react-native";

export const homePageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2e',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    color: "#fff",
    fontSize: '1.3rem'
  },
  description: {
    fontSize: '.9rem',
    textAlign: 'center',
    color: '#c3c3c3'
  },
  image: {
    width: '50%',
    height: '25%'
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
    fontSize: '1rem'
  },
  subTitle: {
    fontSize: '.8rem',
    color: "#fff"
  },
  link: {
    color: '#0cfb8c',
    fontWeight: 'bold',
    marginBottom: 15
  }
});