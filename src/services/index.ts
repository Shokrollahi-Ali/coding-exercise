import * as community from './community';
import * as home from './home';

export interface ServerError {
  statusCode: number;
  message: string;
}

const services = {
  community,
  home,
};

export default services;
