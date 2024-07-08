/** @format */

// apis
// hooks
// utils
import { requestGet } from '@src/utils';
// stores
// configs
// components

// 轮播数据
export const apiGetCarousel = async (params: any) => {
  return await requestGet({ url: `/carousel`, params });
};
// 轮播表格数据
export const apiGetCarouselTable = async (params: any) => {
  return await requestGet({ url: `/carouselTable`, params });
};
// 柱状图数据
export const apiGetChartBar = async (params: any) => {
  return await requestGet({ url: `/chartBar`, params });
};
// 仪表盘数据
export const apiGetChartGauge = async (params: any) => {
  return await requestGet({ url: `/chartGauge`, params });
};
// 折线图图数据
export const apiGetChartLine = async (params: any) => {
  return await requestGet({ url: `/chartLine`, params });
};
// 水波图数据
export const apiGetChartLiquid = async (params: any) => {
  return await requestGet({ url: `/chartLiquid`, params });
};
// 水波图数据
export const apiGetChartPie = async (params: any) => {
  return await requestGet({ url: `/chartPie`, params });
};
// 金字塔数据
export const apiGetChartPyramid = async (params: any) => {
  return await requestGet({ url: `/chartPyramid`, params });
};
