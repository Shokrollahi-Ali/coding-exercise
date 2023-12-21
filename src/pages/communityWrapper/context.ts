import { createContext } from 'react';
import { Community, Home } from 'models';

export default createContext<{
  community: Community;
  home: Home;
  isLoading: boolean;
}>({
  community: new Community(),
  home: new Home(),
  isLoading: false,
});
