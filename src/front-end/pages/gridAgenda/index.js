import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { CreateView } from './create';
import { EditView } from './edit';

export const GridAgenda = () => {
  
  const { agenda } = useContext(UserContext);

  return agenda && agenda.length >= 1 ? <EditView /> : <CreateView />
}
