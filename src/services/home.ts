import { HomeModel } from 'models';

import ClientApi from './clientApi';
import config from './config';

const { rootAddress } = config;

const prefix = '/homes.json';

const axios = new ClientApi();

export const getHomeList = (): Promise<HomeModel> =>
  axios.http.get(`${rootAddress + prefix}`);
