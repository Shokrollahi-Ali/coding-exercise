import { Stack, CircularProgress } from '@mui/material';

export const Loading = () => {
  return (
    <Stack alignItems='center' sx={{ mt: 5 }}>
      <CircularProgress />
    </Stack>
  );
};
