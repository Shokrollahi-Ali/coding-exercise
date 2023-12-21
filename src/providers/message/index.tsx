import { useState } from 'react';
import { Typography, Button, Dialog } from '@mui/material';
import Context from './context';

interface IMessageProvider {
  children: React.ReactNode;
}

const MessageProvider: React.FC<IMessageProvider> = ({ children }) => {
  const [serviceMessage, setServiceMessage] = useState('');
  return (
    <Context.Provider value={{ setServiceMessage }}>
      <Dialog open={Boolean(serviceMessage)} maxWidth='xs'>
        <Typography variant='h5' sx={{ p: 4 }}>
          {serviceMessage}
        </Typography>
        <Button
          variant='contained'
          onClick={() => setServiceMessage('')}
          sx={{ m: 1 }}
        >
          OK
        </Button>
      </Dialog>
      {children}
    </Context.Provider>
  );
};

export default MessageProvider;
