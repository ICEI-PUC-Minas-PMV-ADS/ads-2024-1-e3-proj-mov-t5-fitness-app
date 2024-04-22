import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2e',
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  containerTitle: {
    flexDirection: 'row',
    gap: 3,
    width: '90vw',
  },
  titleGren: {
    fontSize: '1.3rem',
    color: '#0cfb8c',
    fontWeight: 'bold'
  },
  titleWhite: {
    fontSize: '1.3rem',
    fontWeight: 'bold',
    color: '#fff'
  },
  goBackLinkContainer: {
    width: '90%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  goBackLink: {
    fontWeight: 'bold',
    color: '#fff',
    fontSize: '1.2rem'
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
  input: {
    backgroundColor: '#1e1e1e',
    color: '#818182',
    fontSize: '1rem',
    width: '90vw',
    padding: 16,
    borderRadius: '10px'
  },
  containerInputs: {
    gap: 15
  }
});