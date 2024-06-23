import { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { Link } from "react-router-native";
import { axiosInstance } from "../../config/axios";
import { UserContext } from "../../context/userContext";
import { homePageStyles } from "./styleds";

export const ListTraning = () => {

  const [dataGrid, setDataGrid] = useState([]);
  const [existTraning, setExistTraning] = useState(false);

  const { userId } = useContext(UserContext);

  const generateDataGrid = async () => {
    try {
      const { data } = await axiosInstance.get(`/agenda/list-day/${userId}`);

      if (data.statusCode === 200) {
        setDataGrid(data.value.exercises);
        setExistTraning(true)
      } else setExistTraning(false);

    } catch (error) {
      alert('Erro interno da aplicação!');
    }
  };

  useEffect(() => {
    generateDataGrid();
  }, [userId]);

  return (
    <View style={homePageStyles.container}>
      <Text style={homePageStyles.title} >
        Treinos do Dia
      </Text>
      <Text style={homePageStyles.description} >
        A baixo está a sua lista de treinos do dia!
      </Text>
      <View style={homePageStyles.containerGrid} >
        {
          existTraning ?
            dataGrid.map(({ name, id }) => (
              <Text key={id} style={homePageStyles.titleTraning} >{name}</Text>
            ))
            : (
              <Text style={homePageStyles.title} >Você não possui nenhuma agenda para hoje!</Text>
          )
        }
      </View>
      <Text style={homePageStyles.subTitle} >
        <Link
          to="/gateway"
          style={homePageStyles.link}
        >
          <Text style={{ fontSize: '.9rem' }} >Voltar</Text>
        </Link>
      </Text>
    </View>
  );
};