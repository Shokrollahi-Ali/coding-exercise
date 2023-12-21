import { useContext } from 'react';
import { sortByProperty } from 'utils/helperFunctions';
import context from '../context';

export const useData = () => {
  const { community, home, isLoading } = useContext(context);

  return {
    isLoading,
    communities: sortByProperty(community.getCommunityList(), 'name', 'asc'),
    getCommunityAveragePrice: (communityId: string) =>
      community.getCommunityAveragePrice(communityId, home),
  };
};
