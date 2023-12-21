import { FC } from 'react';
import { Link, generatePath } from 'react-router-dom';
import { Grid, Skeleton, Stack } from '@mui/material';
import { CommunityCard } from 'components';
import { COMMUNITY_ITEM_ROUTE } from 'constants/routes';
import { useData } from './useData';

const CommunityList: FC = () => {
  const { isLoading, communities, getCommunityAveragePrice } = useData();

  const renderSkeleton = () => (
    <Stack spacing={1}>
      <Skeleton variant='rectangular' width='100%' height={205} />
      <Skeleton variant='rectangular' width='100%' height={25} />
      <Skeleton variant='rectangular' width='100%' height={25} />
    </Stack>
  );
  return (
    <Grid container spacing={3}>
      {communities.map(({ id, group, imgUrl, name }) => (
        <Grid key={id} item xs={12} sm={6} md={4} lg={3}>
          {isLoading ? (
            renderSkeleton()
          ) : (
            <Link
              to={generatePath(COMMUNITY_ITEM_ROUTE, { communityId: id })}
              style={{ textDecoration: 'none' }}
            >
              <CommunityCard
                id={id}
                group={group}
                imgUrl={imgUrl}
                name={name}
                communityAveragePrice={getCommunityAveragePrice(id)}
                isClickable
              />
            </Link>
          )}
        </Grid>
      ))}
    </Grid>
  );
};

export default CommunityList;
