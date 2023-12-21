import axios, { AxiosInstance } from 'axios';

import config from './config';

export default class ClientApi {
  http: AxiosInstance;

  constructor() {
    this.http = axios.create({
      baseURL: config.rootAddress,
      timeout: config.timeout,
    });

    this.http.interceptors.request.use(async (request) => {
      return request;
    });

    this.http.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        return Promise.reject(error.response);
      }
    );
  }
}
