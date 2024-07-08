/** @format */

// apis
// hooks
// utils
import { requestGet, requestPost } from '@src/utils';
// stores
// configs
// components

// 获取验证码
export const apiGetCaptcha = async (params: any) => {
  return await requestGet({ url: `/captcha`, params });
};
// 登录
export const apiPostLogin = async (data: any) => {
  return await requestPost({ url: `/login`, data });
};
