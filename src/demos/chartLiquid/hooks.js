/** @format */
import { set } from '@vueuse/core';
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

export const useEchartLiquidDefault = () => {
  const ECHART_LIQUID_DEFAULT_SERIES_DATA = ref(0);
  const computedEchartsLiquidDefaultOption = computed(() => {
    try {
      return {
        grid,
        backgroundColor: 'transparent',
        color: ['#4992ff', '#7cffb2', '#fddd60', '#ff6e76', '#58d9f9', '#05c091', '#ff8a45', '#8d48e3', '#dd79ff'],
        textStyle: { color: '#B9B8CE', fontSize: 12 },
        series: [
          {
            type: 'liquidFill',
            data: [0.6],
            color: ['#294D99', '#156ACF', '#1598ED', '#45BDFF'],
            center: ['50%', '50%'],
            radius: '50%',
            backgroundStyle: { color: '#E3F7FF' },
            outline: { show: true, borderDistance: 8, itemStyle: { borderColor: '#294D99', borderWidth: 8 } },
            label: {
              show: true,
              color: '#294D99',
              insideColor: '#fff',
              fontSize: 50,
              fontWeight: 'bold',
              align: 'center',
              position: 'inside',
            },
          },
        ],
      };
    } catch (error) {
      console.warn(error);
      return { backgroundColor: 'transparent' };
    }
  });
  const setEchartLiquidDefaultSeriesData = (seriesData) => {
    try {
      set(ECHART_LIQUID_DEFAULT_SERIES_DATA, seriesData);
    } catch (error) {
      console.warn(error);
    }
  };
  return { computedEchartsLiquidDefaultOption, setEchartLiquidDefaultSeriesData };
};
