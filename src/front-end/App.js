import { UserContextProvider } from './context/userContext';
import { RoutesConfig } from './routes';

export default function App() {
  return (
    <UserContextProvider>
      <RoutesConfig />
    </UserContextProvider>
  ) 
}
