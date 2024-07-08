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
    url: '/mock/carousel',
    response: ({ query, body }) => {
      return resultSuccess({
        'list|20': [{ name: '@cname', 'image|1': faker.image.dataUri({ width: 100, height: 32, type: 'base64' }) }],
      });
    },
  },
  {
    url: '/mock/carouselTable',
    response: ({ query, body }) => {
      return resultSuccess({
        'list|20': [{ name: '@cname', 'age|+1': 10, address: `@county` }],
        total: 10,
      });
    },
  },
  {
    url: '/mock/chartBar',
    response: ({ query, body }) => {
      return resultSuccess({
        'list|10': [{ cname: '@cname', 'num|+1': 10 }],
        total: 10,
      });
    },
  },
  {
    url: '/mock/chartGauge',
    response: ({ query, body }) => {
      return resultSuccess({
        'num|1-100': 100,
      });
    },
  },
  {
    url: '/mock/chartLiquid',
    response: ({ query, body }) => {
      return resultSuccess({
        'num|1-100': 100,
      });
    },
  },
  {
    url: '/mock/chartLine',
    response: ({ query, body }) => {
      return resultSuccess({
        'list|10': [{ cname: '@cname', 'num|+1': 10 }],
        total: 10,
      });
    },
  },
  {
    url: '/mock/chartPie',
    response: ({ query, body }) => {
      return resultSuccess({
        'list|10': [{ cname: '@cname', 'num|+1': 10 }],
        total: 10,
      });
    },
  },
  {
    url: '/mock/chartPyramid',
    response: ({ query, body }) => {
      return resultSuccess({
        'list|10': [{ cname: '@cname', 'num|+1': 10 }],
        total: 10,
      });
    },
  },
];
