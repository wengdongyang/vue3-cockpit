/** @format */
import axios from 'axios';
import NProgress from 'nprogress';
// apis
// hooks
// types
import type { AxiosError, AxiosRequestConfig, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
// stores
// configs
import { ENV } from '@src/configs';
// components
const request = axios.create({
  withCredentials: true,
  baseURL: ENV.MODE === 'development' ? '/mock' : '/',
});
// 请求拦截器
request.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    NProgress.start();
    const { headers = {} } = config;
    const token = sessionStorage.getItem(ENV.TOKEN) || '';

    return Promise.resolve(
      Object.assign({}, config, { headers: Object.assign({ Authorization: `Bearer ${token}` }, headers) }),
    );
  },
  (error: AxiosError) => {
    NProgress.done();
    return Promise.reject(error);
  },
);
// 请求完成后的拦截器
request.interceptors.response.use(
  async (response: AxiosResponse<any>) => {
    NProgress.done();
    const { status, data } = response;
    if (status === 200) {
      return Promise.resolve(data);
    } else {
      return Promise.reject(response);
    }
  },
  (error: AxiosError) => {
    NProgress.done();
    return Promise.resolve(error);
  },
);

export const requestGet = async <T = any>(option: AxiosRequestConfig) => {
  const res = await request(Object.assign({ method: 'GET' }, option));
  return res as unknown as T;
};

export const requestPost = async <T = any>(option: AxiosRequestConfig) => {
  const res = await request(Object.assign({ method: 'POST' }, option));
  return res as unknown as T;
};

export const requestDelete = async <T = any>(option: AxiosRequestConfig) => {
  const res = await request(Object.assign({ method: 'DELETE' }, option));
  return res as unknown as T;
};

export const requestPut = async <T = any>(option: AxiosRequestConfig) => {
  const res = await request(Object.assign({ method: 'PUT' }, option));
  return res as unknown as T;
};

export const requestDownload = async <T = any>(option: AxiosRequestConfig) => {
  const res = await request(Object.assign({ method: 'GET', responseType: 'blob' }, option));
  return res as unknown as T;
};

export const requestUpload = async <T = any>(option: AxiosRequestConfig) => {
  const res = await request(Object.assign({ method: 'POST', headersType: 'multipart/form-data' }, option));
  return res as unknown as T;
};

export { request };
