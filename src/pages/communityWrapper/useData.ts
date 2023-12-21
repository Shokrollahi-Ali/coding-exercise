import { useQuery } from 'react-query';
import { Community, Home } from 'models';
import service, { ServerError } from 'services';
import useMessage from 'hooks/useMessage';

export const useData = () => {
  const { setServiceMessage } = useMessage();
  const handleCommunityList = () => service.community.getCommunityList();

  const { data: communityList, isLoading: communityLoading } = useQuery(
    ['community-list'],
    handleCommunityList,
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      onError: (error = {}) => {
        const { message } = error as ServerError;
        setServiceMessage(message ?? 'Network Error!!');
      },
    }
  );

  const handleHomeList = () => service.home.getHomeList();

  const { data: homeList, isLoading: homeLoading } = useQuery(
    ['home-list'],
    handleHomeList,
    {
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      onError: (error = {}) => {
        const { message } = error as ServerError;
        setServiceMessage(message ?? 'Network Error!!');
      },
    }
  );

  const community = new Community(communityList);
  const home = new Home(homeList);

  return { community, home, isLoading: communityLoading || homeLoading };
};
