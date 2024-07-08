/** @format */
import { message } from 'ant-design-vue';
import { createRouter, createWebHashHistory } from 'vue-router';
// apis
// hooks
// utils
// types
import type { RouteRecordRaw } from 'vue-router';
// stores
// mixins
// configs
import { ENV } from '@src/configs';
// components
import LayoutDemo from '../layouts/demo/Demo.vue';
import LayoutLogin from '../layouts/login/Login.vue';

import Carousel from '@src/demos/carousel/Carousel.vue';
import CarouselTable from '@src/demos/carouselTable/CarouselTable.vue';
import ChartBar from '@src/demos/chartBar/ChartBar.vue';
import ChartGauge from '@src/demos/chartGauge/ChartGauge.vue';
import ChartLine from '@src/demos/chartLine/ChartLine.vue';
import ChartLiquid from '@src/demos/chartLiquid/ChartLiquid.vue';
import ChartMap from '@src/demos/chartMap/ChartMap.vue';
import ChartPie from '@src/demos/chartPie/ChartPie.vue';
import ChartPyramid from '@src/demos/chartPyramid/ChartPyramid.vue';

import Modal from '@src/demos/modal/Modal.vue';
import MapboxGl from '@src/demos/mapboxGl/MapboxGl.vue';

import PanelComponent from '@src/demos/panelComponent/PanelComponent.vue';

import Tabs from '@src/demos/tabs/Tabs.vue';

import TextLinearGradient from '@src/demos/textLinearGradient/TextLinearGradient.vue';
import TextNumberCountup from '@src/demos/textNumberCountup/TextNumberCountup.vue';

export const demoRoutes = <RouteRecordRaw[]>[
  { path: '', name: 'demoBase', redirect: '/demo/carousel' },
  { path: 'carousel', name: 'carousel', meta: { name: '轮播' }, component: Carousel },
  { path: 'carouselTable', name: 'carouselTable', meta: { name: '轮播表格' }, component: CarouselTable },
  { path: 'chartBar', name: 'chartBar', meta: { name: '柱状图' }, component: ChartBar },
  { path: 'chartGauge', name: 'ChartGauge', meta: { name: '仪表盘' }, component: ChartGauge },
  { path: 'chartLine', name: 'chartLine', meta: { name: '折线图' }, component: ChartLine },
  { path: 'chartLiquid', name: 'chartLiquid', meta: { name: '水波图' }, component: ChartLiquid },
  { path: 'chartPie', name: 'chartPie', meta: { name: '饼图' }, component: ChartPie },
  { path: 'chartPyramid', name: 'chartPyramid', meta: { name: '金字塔' }, component: ChartPyramid },
  { path: 'chartMap', name: 'chartMap', meta: { name: '地图' }, component: ChartMap },
  { path: 'modal', name: 'modal', meta: { name: '弹窗' }, component: Modal },
  { path: 'mapboxGl', name: 'mapboxGl', meta: { name: 'MapboxGl' }, component: MapboxGl },
  { path: 'panelComponent', name: 'panelComponent', meta: { name: 'Panel' }, component: PanelComponent },
  { path: 'tabs', name: 'tabs', meta: { name: 'tabs' }, component: Tabs },
  { path: 'textLinearGradient', name: 'textLinearGradient', meta: { name: '文字渐变' }, component: TextLinearGradient },
  {
    path: 'textNumberCountup',
    name: 'textNumberCountup',
    meta: { name: '数字 Countup' },
    component: TextNumberCountup,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', redirect: '/login' },
    { path: '/login', name: 'login', component: LayoutLogin },
    {
      path: '/demo',
      name: 'demo',
      component: LayoutDemo,
      redirect: '/demo/carousel',
      children: demoRoutes,
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (!['/', '/login'].includes(to.path)) {
    if (sessionStorage.getItem(ENV.TOKEN)) {
      next();
      return;
    } else {
      message.error({ content: '未登录!' });
      next({ path: '/login' });
      return;
    }
  } else {
    next();
  }
});

export default router;
