import { lazy } from 'react';
import { useRoutes, Navigate } from 'react-router-dom';
import {
  COMMUNITY_WRAPPER_ROUTE,
  COMMUNITY_LIST_ROUTE,
  COMMUNITY_ITEM_ROUTE,
  NOT_FOUND_ROUTE,
} from 'constants/routes';

const CommunityWrapper = lazy(() => import('pages/communityWrapper'));
const CommunityList = lazy(
  () => import('pages/communityWrapper/communityList')
);
const CommunityItem = lazy(
  () => import('pages/communityWrapper/communityItem')
);
const NotFoundPage = lazy(() => import('pages/notFoundPage'));

export const Routes = () =>
  useRoutes([
    {
      path: '/',
      element: <Navigate replace to={COMMUNITY_LIST_ROUTE} />,
    },
    {
      path: COMMUNITY_WRAPPER_ROUTE,
      element: <CommunityWrapper />,
      children: [
        {
          path: COMMUNITY_LIST_ROUTE,
          element: <CommunityList />,
        },
        {
          path: COMMUNITY_ITEM_ROUTE,
          element: <CommunityItem />,
        },
      ],
    },
    {
      path: NOT_FOUND_ROUTE,
      element: <NotFoundPage />,
    },
  ]);
