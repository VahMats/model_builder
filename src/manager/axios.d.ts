import { AxiosRequestConfig, AxiosResponseHeaders } from 'axios';

export interface AxiosInstanceProps {
  token?: string;
  baseURL?: string;
}

export interface IAxiosResponse<T = any, D = any> {
  data: IData<T>;
  status: IResponseStatus;
  statusText: string;
  headers: AxiosResponseHeaders;
  config: AxiosRequestConfig<D>;
  request?: any;
}

interface IResponseStatus {
  code: string;
}

interface IData<T> {
  data: T;
}
