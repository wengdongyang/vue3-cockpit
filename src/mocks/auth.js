/** @format */

import { faker } from '@faker-js/faker';
// apis
// hooks
// utils
import { resultSuccess } from './_util';
// types
// stores
// mixins
// configs
// components
export default [
  {
    url: '/mock/captcha',
    response: ({ query, body }) => {
      return resultSuccess(faker.image.dataUri({ width: 100, height: 32, type: 'base64' }));
    },
  },
  {
    url: '/mock/login',
    method: 'post',
    response: ({ query, body }) => {
      return resultSuccess({ userName: '@cname', token: '@string(20)', 'auth|1': ['superAdmin', 'user'] });
    },
  },
];
