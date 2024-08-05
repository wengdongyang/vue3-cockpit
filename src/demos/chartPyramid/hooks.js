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

export const useEchartPyramidDefault = (fieldNames = { name: 'name', value: 'value' }) => {
  const ECHART_PIE_DEFAULT_SERIES_DATA = ref([]);
  const computedEchartsPyramidDefaultOption = computed(() => {
    try {
      const seriesData = get(ECHART_PIE_DEFAULT_SERIES_DATA).filter((elem, idx) => idx < 3);
      const nameKey = fieldNames['name'];
      const valueKey = fieldNames['value'];

      return {
        grid,
        backgroundColor: 'transparent',
        textStyle: { color: '#B9B8CE', fontSize: 12 },
        color: ['#4992ff', '#7cffb2', '#fddd60', '#ff6e76', '#58d9f9', '#05c091', '#ff8a45', '#8d48e3', '#dd79ff'],
        tooltip: {
          show: true,
          trigger: 'item',
          textStyle: { color: '#666', fontSize: 14 },
          formatter: (params) => {
            const { data } = params;
            return `${data.name} ${data.num}件`;
          },
        },
        legend: {
          show: true,
          top: 0,
          left: 'center',
          orient: 'horizontal',
          textStyle: { color: '#B9B8CE' },
          data: seriesData.map((seriesDataItem) => lodash.get(seriesDataItem, [nameKey])),
        },
        series: [
          {
            name: '',
            type: 'funnel',
            sort: 'ascending',
            label: {
              show: true,
              formatter: (params) => {
                const { data } = params;
                return `${data.name} ${data.num}件`;
              },
            },
            labelLine: { show: true, lineStyle: { width: 1, type: 'solid' } },
            data: seriesData.map((seriesDataItem, index) => ({
              value: index + 1,
              name: lodash.get(seriesDataItem, [nameKey]),
              num: lodash.get(seriesDataItem, [valueKey]),
            })),
            orient: 'vertical',
          },
        ],
      };
    } catch (error) {
      console.warn(error);
      return { backgroundColor: 'transparent' };
    }
  });
  const setEchartPyramidDefaultSeriesData = (seriesData) => {
    try {
      set(ECHART_PIE_DEFAULT_SERIES_DATA, seriesData);
    } catch (error) {
      console.warn(error);
    }
  };
  return { computedEchartsPyramidDefaultOption, setEchartPyramidDefaultSeriesData };
};
