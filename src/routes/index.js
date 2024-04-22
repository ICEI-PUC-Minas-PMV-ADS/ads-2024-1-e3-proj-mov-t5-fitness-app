import { NativeRouter, Route, Routes } from "react-router-native";
import { CreateAcount } from "../pages/createAcount";
import { Hello } from "../pages/hello";
import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/login";

export const RoutesConfig = () => {
  return (
    <NativeRouter>
      <Routes>
        <Route exact path="/"  element={<HomePage />} />
        <Route path="/login"  element={<LoginPage />} />
        <Route path="/register"  element={<CreateAcount />} />
        <Route path="/hello"  element={<Hello />} />
      </Routes>
    </NativeRouter>
  )
};