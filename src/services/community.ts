import { CommunityModel } from 'models';
import ClientApi from './clientApi';
import config from './config';

const { rootAddress } = config;

const prefix = '/communities.json';

const axios = new ClientApi();

export const getCommunityList = (): Promise<CommunityModel> =>
  axios.http.get(`${rootAddress + prefix}`);
