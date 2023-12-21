import { Outlet } from 'react-router-dom';
import Context from './context';
import { useData } from './useData';

const CommunityWrapper = () => {
  const data = useData();

  return (
    <Context.Provider value={data}>
      <Outlet />
    </Context.Provider>
  );
};

export default CommunityWrapper;
