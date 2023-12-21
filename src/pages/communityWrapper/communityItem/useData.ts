import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { COMMUNITY_LIST_ROUTE } from 'constants/routes';
import context from '../context';

export const useData = () => {
  const { communityId = '' } = useParams();
  const navigate = useNavigate();
  const { community, home } = useContext(context);

  const onBackToListClicked = () => {
    navigate(COMMUNITY_LIST_ROUTE);
  };

  return {
    communities: community.getCommunityList(),
    homes: home
      .getHomeList()
      .filter((home) => home.communityId === communityId),
    communityImageUrl: community.getCommunityImageUrl(communityId),
    communityName: community.getCommunityName(communityId),
    communityGroup: community.getCommunityGroup(communityId),
    communityAveragePrice: community.getCommunityAveragePrice(
      communityId,
      home
    ),
    onBackToListClicked,
  };
};
