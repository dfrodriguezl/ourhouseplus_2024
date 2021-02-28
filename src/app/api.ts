import axios, { Method } from 'axios';
import { ApiOptions } from './applicationTypes';


export const get = (url: string) => {
  return performRequest(url, 'GET');
}

export const post = (url: string, options: ApiOptions) => {
  return performRequest(url, 'POST', options);
}

const performRequest = (url: string, method: Method, options?: ApiOptions) => {
  return axios.request({
    baseURL: process.env.REACT_APP_API_BASE_URL,
    url,
    method,
    data: options?.data,
    params: {
      ...options?.params,
      code: process.env.REACT_APP_API_ACCESS_CODE
    }
  })
}
