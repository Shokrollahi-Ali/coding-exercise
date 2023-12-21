import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Loading } from 'components';
import { Routes } from './routes';

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes />
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
