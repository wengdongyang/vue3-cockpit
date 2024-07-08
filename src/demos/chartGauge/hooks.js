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
const backgroundColor = 'transparent';

export const useEchartGauge = () => {
  const ECHART_GAUGE_VALUE = ref(0);
  const computedEchartsGaugeOption = computed(() => {
    try {
      return {};
    } catch (error) {
      console.warn(error);
      return { backgroundColor };
    }
  });
  const setEchartGaugeValue = (value) => {
    try {
      set(ECHART_GAUGE_VALUE, value);
    } catch (error) {
      console.warn(error);
    }
  };
  return { computedEchartsGaugeOption, setEchartGaugeValue };
};
