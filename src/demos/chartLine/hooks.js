/** @format */
import { get, set } from '@vueuse/core';
import * as lodash from 'lodash';
import { computed, ref } from 'vue';
// apis
// hooks
// utils
import { createEchartsLinearColorStops } from '@src/utils';
// types
// stores
// mixins
// configs
// components

const grid = {
  show: false,
  left: 20,
  right: 20,
  top: 40,
  bottom: 20,
  containLabel: true,
  backgroundColor: 'rgba(0,0,0,0)',
  borderWidth: 1,
  borderColor: '#ccc',
};

export const useEchartLineDefault = (fieldNames = { name: 'name', value: 'value' }) => {
  const ECHART_LINE_DEFAULT_SERIES_DATA = ref([]);
  const computedEchartsLineDefaultOption = computed(() => {
    try {
      const seriesData = get(ECHART_LINE_DEFAULT_SERIES_DATA);
      const nameKey = fieldNames['name'];
      const valueKey = fieldNames['value'];
      const xAxisData = seriesData.map((item) => lodash.get(item, [nameKey]));
      const seriesData0 = seriesData.map((item) => lodash.get(item, [valueKey]));
      return {
        grid,
        backgroundColor: 'transparent',
        textStyle: { color: '#B9B8CE', fontSize: 12 },
        color: ['#4992ff', '#7cffb2', '#fddd60', '#ff6e76', '#58d9f9', '#05c091', '#ff8a45', '#8d48e3', '#dd79ff'],
        tooltip: {
          show: true,
          trigger: 'axis',
          backgroundColor: '#fff',
          borderRadius: 4,
          borderWidth: 1,
          textStyle: { color: '#666', fontSize: 14 },
        },
        yAxis: {
          show: true,
          name: '',
          type: 'value',
          axisLine: { show: true, lineStyle: { color: '#B9B8CE', width: 1, type: 'solid' } },
          splitLine: { show: true, lineStyle: { color: '#484753', width: 1, type: 'solid' } },
          axisTick: { show: true, lineStyle: { width: 1 } },
          axisLabel: { show: true, fontSize: 12 },
        },
        xAxis: {
          show: true,
          name: '',
          type: 'category',
          data: xAxisData,
          axisLine: { show: true, lineStyle: { color: '#B9B8CE', width: 1, type: 'solid' } },
          splitLine: { show: false, lineStyle: { color: '#484753', width: 1, type: 'solid' } },
          splitArea: { show: false },
          axisTick: { show: true, lineStyle: { width: 1 } },
          axisLabel: { show: true, fontSize: 12 },
        },
        series: [{ data: seriesData0, type: 'line', lineStyle: { width: 2, type: 'solid' } }],
      };
    } catch (error) {
      console.warn(error);
      return { backgroundColor: 'transparent' };
    }
  });
  const setEchartLineDefaultSeriesData = (seriesData) => {
    try {
      set(ECHART_LINE_DEFAULT_SERIES_DATA, seriesData);
    } catch (error) {
      console.warn(error);
    }
  };
  return { computedEchartsLineDefaultOption, setEchartLineDefaultSeriesData };
};
// 柱状图 - 渐变
export const useEchartLineGradient = (fieldNames = { name: 'name', value: 'value' }) => {
  const ECHART_LINE_GRADIENT_SERIES_DATA = ref([]);
  const computedEchartsLineGradientOption = computed(() => {
    try {
      const seriesData = get(ECHART_LINE_GRADIENT_SERIES_DATA);
      const nameKey = fieldNames['name'];
      const valueKey = fieldNames['value'];
      const xAxisData = seriesData.map((item) => lodash.get(item, [nameKey]));
      const seriesData0 = seriesData.map((item) => lodash.get(item, [valueKey]));
      return {
        grid,
        backgroundColor: 'transparent',
        textStyle: { color: '#B9B8CE', fontSize: 12 },
        color: ['#4992ff', '#7cffb2', '#fddd60', '#ff6e76', '#58d9f9', '#05c091', '#ff8a45', '#8d48e3', '#dd79ff'],
        tooltip: {
          show: true,
          trigger: 'axis',
          backgroundColor: '#fff',
          borderRadius: 4,
          borderWidth: 1,
          textStyle: { color: '#666', fontSize: 14 },
        },
        yAxis: {
          show: true,
          name: '',
          type: 'value',
          axisLine: { show: true, lineStyle: { color: '#B9B8CE', width: 1, type: 'solid' } },
          splitLine: { show: true, lineStyle: { color: '#484753', width: 1, type: 'solid' } },
          splitArea: { show: false, areaStyle: { color: ['rgba(255,255,255,0.02)', 'rgba(255,255,255,0.05)'] } },
          axisTick: { show: true, lineStyle: { width: 1 } },
          axisLabel: { show: true, fontSize: 12 },
        },
        xAxis: {
          show: true,
          name: '',
          type: 'category',
          data: xAxisData,
          axisLine: { show: true, lineStyle: { color: '#B9B8CE', width: 1, type: 'solid' } },
          splitLine: { show: false, lineStyle: { color: '#484753', width: 1, type: 'solid' } },
          splitArea: { show: false, areaStyle: { color: ['rgba(255,255,255,0.02)', 'rgba(255,255,255,0.05)'] } },
          axisTick: { show: true, lineStyle: { width: 1 } },
          axisLabel: { show: true, fontSize: 12 },
        },
        series: [
          {
            data: seriesData0,
            type: 'line',
            lineStyle: { width: 2, type: 'solid' },
            areaStyle: {
              color: createEchartsLinearColorStops([
                { offset: 0, color: 'red' },
                { offset: 1, color: 'blue' },
              ]),
            },
          },
        ],
      };
    } catch (error) {
      console.warn(error);
      return { backgroundColor: 'transparent' };
    }
  });
  const setEchartLineGradientSeriesData = (seriesData) => {
    try {
      set(ECHART_LINE_GRADIENT_SERIES_DATA, seriesData);
    } catch (error) {
      console.warn(error);
    }
  };
  return { computedEchartsLineGradientOption, setEchartLineGradientSeriesData };
};
