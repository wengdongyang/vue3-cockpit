/** @format */
import { get, set } from '@vueuse/core';
import * as lodash from 'lodash';
import { computed, ref } from 'vue';
// apis
// hooks
// utils
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

export const useEchartPieDefault = (fieldNames = { name: 'name', value: 'value' }) => {
  const ECHART_PIE_DEFAULT_SERIES_DATA = ref([]);
  const computedEchartsPieDefaultOption = computed(() => {
    try {
      const seriesData = get(ECHART_PIE_DEFAULT_SERIES_DATA);
      const nameKey = fieldNames['name'];
      const valueKey = fieldNames['value'];
      return {
        grid,
        backgroundColor: 'transparent',
        textStyle: { color: '#B9B8CE', fontSize: 12 },
        tooltip: { show: true, trigger: 'item', backgroundColor: '#fff', textStyle: { color: '#666' } },
        color: ['#4992ff', '#7cffb2', '#fddd60', '#ff6e76', '#58d9f9', '#05c091', '#ff8a45', '#8d48e3', '#dd79ff'],
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: '50%',
            center: ['50%', '50%'],
            label: { show: true },
            labelLine: { show: true, length: 15, length2: 15, lineStyle: { width: 1, type: 'solid' } },
            itemStyle: { borderWidth: 1, borderJoin: 'round' },
            data: seriesData.map((seriesDataItem) => ({
              name: lodash.get(seriesDataItem, [nameKey]),
              value: lodash.get(seriesDataItem, [valueKey]),
            })),
          },
        ],
      };
    } catch (error) {
      console.warn(error);
      return { backgroundColor: 'transparent' };
    }
  });
  const setEchartPieDefaultSeriesData = (seriesData) => {
    try {
      set(ECHART_PIE_DEFAULT_SERIES_DATA, seriesData);
    } catch (error) {
      console.warn(error);
    }
  };
  return { computedEchartsPieDefaultOption, setEchartPieDefaultSeriesData };
};

export const useEchartCircleDefault = (fieldNames = { name: 'name', value: 'value' }) => {
  const ECHART_PIE_CIRCLE_SERIES_DATA = ref([]);
  const computedEchartsCircleDefaultOption = computed(() => {
    try {
      const seriesData = get(ECHART_PIE_CIRCLE_SERIES_DATA);
      const nameKey = fieldNames['name'];
      const valueKey = fieldNames['value'];
      return {
        grid,
        backgroundColor: 'transparent',
        textStyle: { color: '#B9B8CE', fontSize: 12 },
        tooltip: { show: true, trigger: 'item', backgroundColor: '#fff', textStyle: { color: '#666' } },
        color: ['#4992ff', '#7cffb2', '#fddd60', '#ff6e76', '#58d9f9', '#05c091', '#ff8a45', '#8d48e3', '#dd79ff'],
        series: [
          {
            name: 'Access From',
            type: 'pie',
            center: ['50%', '50%'],
            radius: ['50%', '80%'],
            label: { show: true },
            labelLine: { show: true, length: 15, length2: 15, lineStyle: { width: 1, type: 'solid' } },
            itemStyle: { borderWidth: 1, borderJoin: 'round' },
            data: seriesData.map((seriesDataItem) => ({
              name: lodash.get(seriesDataItem, [nameKey]),
              value: lodash.get(seriesDataItem, [valueKey]),
            })),
          },
        ],
      };
    } catch (error) {
      console.warn(error);
      return { backgroundColor: 'transparent' };
    }
  });
  const setEchartCircleDefaultSeriesData = (seriesData) => {
    try {
      set(ECHART_PIE_CIRCLE_SERIES_DATA, seriesData);
    } catch (error) {
      console.warn(error);
    }
  };
  return { computedEchartsCircleDefaultOption, setEchartCircleDefaultSeriesData };
};
