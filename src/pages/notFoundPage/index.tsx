import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Stack, Typography } from '@mui/material';
import { COMMUNITY_WRAPPER_ROUTE } from 'constants/routes';

const NotFoundPage: FC = () => {
  const navigate = useNavigate();

  return (
    <Stack alignItems='center' spacing={5}>
      <Typography variant='h1'>Not Found</Typography>
      <Button
        variant='contained'
        onClick={() => navigate(COMMUNITY_WRAPPER_ROUTE)}
      >
        Back to Home Page
      </Button>
    </Stack>
  );
};

export default NotFoundPage;
