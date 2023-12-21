import { FC } from 'react';
import { Typography, Stack, Paper } from '@mui/material';
import { AddHomeWork, AddHome, MapsHomeWork, House } from '@mui/icons-material';
import { formatPrice } from 'utils/helperFunctions';

interface IHomeCard {
  price?: number;
  area?: number;
  type?: string;
}

const getHomeIcon = (homeType: string | undefined) => {
  let Icon = AddHome;
  switch (homeType) {
    case 'House':
      Icon = House;
      break;
    case 'Townhome':
      Icon = AddHome;
      break;
    case 'Condo':
      Icon = AddHomeWork;
      break;
    case 'Duplex':
      Icon = MapsHomeWork;
      break;
    default:
      Icon = AddHome;
  }
  return <Icon />;
};

const HomeCard: FC<IHomeCard> = ({ price = 0, area, type }) => {
  return (
    <Paper sx={{ px: 2, py: 1 }}>
      <Stack flexDirection='row' justifyContent='space-between'>
        <Stack>
          <Typography>Pice</Typography>
          <Typography
            variant='subtitle2'
            color='primary.light'
            fontWeight='bold'
          >
            {formatPrice(price)}
          </Typography>
        </Stack>
        <Stack>
          <Typography>area (sqft)</Typography>
          <Typography
            variant='subtitle2'
            color='primary.dark'
            fontWeight='bold'
          >
            {area}
          </Typography>
        </Stack>
        <Stack alignItems='end'>
          <Typography>{type}</Typography>
          {getHomeIcon(type)}
        </Stack>
      </Stack>
    </Paper>
  );
};

export default HomeCard;
