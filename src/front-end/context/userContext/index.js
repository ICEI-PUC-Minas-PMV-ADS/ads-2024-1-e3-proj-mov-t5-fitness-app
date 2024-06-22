import React, { createContext, useState } from 'react';
import { userDataDefault } from './defaultData';

export const UserContext = createContext(userDataDefault);

export const UserContextProvider = ({ children }) => {
  const [state, setState] = useState(userDataDefault);

  const handleSetAgenda = (agenda) => {
    setState({
      ...state,
      agenda,
    })
  };

  const handleLogin = ({
    email,
    isAuth,
    userGroup,
    userId,
  }) => {
    setState({
      email,
      isAuth,
      userGroup,
      userId,
    });
  };

  const handleLogout = () => {
    setState(userDataDefault);
  };

  return (
    <UserContext.Provider value={{ ...state, handleLogout, handleLogin, handleSetAgenda }}>
      {children}
    </UserContext.Provider>
  );
};
