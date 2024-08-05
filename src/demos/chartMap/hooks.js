/** @format */
import { set, get } from '@vueuse/core';
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

export const useEchartMapDefault = ({ map }) => {
  const ECHART_MAP_DEFAULT_SERIES_DATA = ref(0);
  const computedEchartsMapDefaultOption = computed(() => {
    try {
      return {
        grid,
        backgroundColor: 'transparent',
        textStyle: { color: '#B9B8CE', fontSize: 12 },
        tooltip: { show: false, trigger: 'item' },
        series: [
          {
            name: '',
            type: 'map',
            map: 'keqiao',
            label: { show: true },
            nameProperty: 'name',
            itemStyle: { label: { show: true, color: '#fff' }, color: '#fff', borderWidth: 1, borderColor: '#32CBE0' },
            select: { label: { show: false, color: '#fff' } },
            emphasis: { disabled: true },
          },
        ],
      };
    } catch (error) {
      console.warn(error);
      return { backgroundColor: 'transparent' };
    }
  });
  const setEchartMapDefaultSeriesData = (seriesData) => {
    try {
      set(ECHART_MAP_DEFAULT_SERIES_DATA, seriesData);
    } catch (error) {
      console.warn(error);
    }
  };
  return { computedEchartsMapDefaultOption, setEchartMapDefaultSeriesData };
};
