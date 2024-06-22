import { useContext, useEffect, useState } from "react";
import { Pressable, Text, View } from "react-native";
import { Link, useNavigate } from "react-router-native";
import { axiosInstance } from "../../../config/axios";
import { UserContext } from "../../../context/userContext";
import { convertDay } from "../../../utils/convertDay";
import { AgendaMock } from "../agendaMock";
import { homePageStyles } from "./styleds";

export const CreateView = () => {

  const { agenda, userId } = useContext(UserContext);

  const [dataGrid, setDataGrid] = useState(AgendaMock);

  const navigate = useNavigate();

  const toogleDay = (key) => {
    const newDataGrid = dataGrid.map((day) => {
      if (day.key === key) day.active = !day.active;
      return day;
    });

    setDataGrid(newDataGrid);
  };

  const generateDataGrid = () => {
    const newDataGrid = dataGrid.map((day) => {
      if (agenda && agenda.some((agend) => agend.days.includes(day.key))) day.active = true;
      return day
    });

    setDataGrid(newDataGrid);
  };

  const handleCreate = async () => {
    try {
      
      const daysData = dataGrid.filter((day) => {
        if (day.active) return day;
      }).map((day) => day.key);

      const { data } = await axiosInstance.post('agenda/create', {
        days: daysData,
        userId
      });

      if (data.statusCode === 201) {
        alert(data.message);
        navigate('/gateway');
      } else alert(data.message);
    } catch (error) {
      console.error(error);
      alert('Erro interno do servidor');
    }
  };

  useEffect(() => {
    if (agenda && agenda.length >= 1) generateDataGrid();
  }, [agenda]);

  return (
    <View style={homePageStyles.container}>
      <Text style={homePageStyles.title} >
        Cadastre sua Agenda
      </Text>
      <Text style={homePageStyles.description} >
        Quantas vezes por semana você deseja treinar?
      </Text>
      <View style={homePageStyles.containerGrid} >
        {
          dataGrid.map(({ active, key }, index) => (
            <Pressable
              key={index}
              onPress={() => {
                toogleDay(key)
              }}
              style={{
                ...homePageStyles.buttonDay,
                shadowColor: active ? 'rgb(12, 251, 140)' : '',
                shadowOffset: { width: 0.1, height: 0.1 },
                shadowOpacity: 1,
                shadowRadius: 5,
                border: active ? '1px solid #0cfb8c' : '',
              }}
              accessibilityLabel="Botão de Data"
            >
              <Text style={{ ...homePageStyles.buttonDayText, color: active ? '#0cfb8c' : '#ffffff' }} >{convertDay(key)}</Text>
            </Pressable>
          ))
        }
      </View>
      <Pressable
        onPress={handleCreate}
        style={homePageStyles.button}
        accessibilityLabel="Botão de Cadastro de Agenda"
      >
        <Text style={homePageStyles.buttonText} >Cadastrar</Text>
      </Pressable>
      <Text style={homePageStyles.subTitle} >
        <Link
          to="/gateway"
          style={homePageStyles.link}
        >
          <Text>Cancelar e Voltar</Text>
        </Link>
      </Text>
    </View>
  );
};