import { FC } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';
import { ArrowBack } from '@mui/icons-material';
import { CommunityCard } from 'components';
import HomeCard from './components/HomeCard';
import { HomeItemModel } from 'models';
import { useData } from './useData';

const CommunityItem: FC = () => {
  const {
    communityImageUrl,
    homes,
    communityName,
    communityAveragePrice,
    communityGroup,
    onBackToListClicked,
  } = useData();

  const renderHomes = (homes: HomeItemModel[]) =>
    homes.map(({ id, price, area, type }) => (
      <HomeCard key={id} price={price} area={area} type={type} />
    ));

  return (
    <Stack sx={{ maxWidth: 400 }} spacing={2}>
      <Box>
        <Button onClick={onBackToListClicked} startIcon={<ArrowBack />}>
          Back to List
        </Button>
      </Box>
      <CommunityCard
        imgUrl={communityImageUrl}
        name={communityName}
        group={communityGroup}
        communityAveragePrice={communityAveragePrice}
      />
      <Typography fontWeight='bold'>Homes for this community</Typography>
      {renderHomes(homes)}
    </Stack>
  );
};

export default CommunityItem;
