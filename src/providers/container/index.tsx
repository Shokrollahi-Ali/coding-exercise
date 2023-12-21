import { FC } from 'react';
import { Container, ContainerProps } from '@mui/material';

const ContainerProvider: FC<ContainerProps> = ({ children }) => {
  return (
    <Container maxWidth='xl' sx={{ my: 3 }}>
      {children}
    </Container>
  );
};

export default ContainerProvider;
