import { StyleSheet } from "react-native";

export const homePageStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c2c2e',
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: '0px 10px',
  },
  containerGrid: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    border: 'solid 3px #1e1e1e50',
    borderRadius: '3px',
    flexWrap: 'wrap',
    gap: 5,
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    padding: 5,
    height: '70%'
  },
  buttonDay: {
    width: "auto",
    backgroundColor: '#1e1e1e',
    height: '50px',
    minWidth: '130px',
    borderRadius: '8px',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '10px 5px',
  },
  buttonDayText: {
    textAlign: 'center',
    justifyContent: 'center',
    fontWeight: "bold",
    fontSize: '1rem',
  },
  title: {
    color: "#fff",
    fontSize: '1.3rem',
    textAlign: 'center'
  },
  titleTraning: {
    color: "#fff",
    fontSize: '1.3rem',
    textAlign: 'center',
    width: '100%',
    height: '40px',
    justifyContent: 'center',
    alignItems: 'center',
    display: 'flex',
    borderRadius: '10px',
    backgroundColor: '#1e1e1e',
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