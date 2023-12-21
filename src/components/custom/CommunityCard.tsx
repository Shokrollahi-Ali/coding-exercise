import { FC } from 'react';
import { Typography, Stack } from '@mui/material';
import { CommunityItemModel } from 'models';
import { Card } from 'components';
import { formatPrice } from 'utils/helperFunctions';

interface ICommunityCard extends Partial<CommunityItemModel> {
  communityAveragePrice?: string;
  isClickable?: boolean;
}

export const CommunityCard: FC<ICommunityCard> = ({
  imgUrl,
  name,
  group,
  communityAveragePrice = '0',
  isClickable = false,
}) => {
  return (
    <Card
      sx={
        isClickable
          ? {
              '&:hover': {
                transform: 'scale(1.008)',
                boxShadow: '0px 0px 12px rgba(86, 175, 203, 0.9)',
              },
            }
          : undefined
      }
      imgUrl={imgUrl}
      title={name}
      cardContent={
        <>
          <Typography gutterBottom variant='h5' component='div'>
            {name}
          </Typography>
          <Stack flexDirection='row'>
            <Typography variant='subtitle2' sx={{ mr: 0.5 }}>
              Average Price:
            </Typography>
            <Typography
              variant='subtitle2'
              color='primary.light'
              fontWeight='bold'
            >
              {formatPrice(communityAveragePrice)}
            </Typography>
          </Stack>
          <Stack flexDirection='row'>
            <Typography variant='subtitle2' sx={{ mr: 0.5 }}>
              Group:
            </Typography>
            <Typography
              variant='subtitle2'
              color='primary.light'
              fontWeight='bold'
            >
              {group}
            </Typography>
          </Stack>
        </>
      }
    />
  );
};
