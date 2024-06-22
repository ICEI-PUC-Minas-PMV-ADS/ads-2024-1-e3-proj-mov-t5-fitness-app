import { NativeRouter, Route, Routes } from "react-router-native";
import { CreateAcount } from "../pages/createAcount";
import { Gateway } from "../pages/gateway";
import { GridAgenda } from "../pages/gridAgenda";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/login";

export const RoutesConfig = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/"  element={<HomePage />} />
        <Route path="/register"  element={<CreateAcount />} />
        <Route path="/login"  element={<LoginPage />} />
        <Route path="/gateway"  element={<Gateway />} />
        <Route path="/grid-agenda"  element={<GridAgenda />} />
      </Routes>
    </NativeRouter>
  )
};