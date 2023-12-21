import { useContext } from 'react';
import Context from 'providers/message/context';

const useMessage = () => useContext(Context);

export default useMessage;
