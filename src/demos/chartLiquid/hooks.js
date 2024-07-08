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

export const useEchartLiquid = () => {
  const ECHART_LIQUID_VALUE = ref(0);
  const computedEchartsLiquidOption = computed(() => {
    try {
      return {};
    } catch (error) {
      console.warn(error);
      return { backgroundColor };
    }
  });
  const setEchartLiquidValue = (value) => {
    try {
      set(ECHART_LIQUID_VALUE, value);
    } catch (error) {
      console.warn(error);
    }
  };
  return { computedEchartsLiquidOption, setEchartLiquidValue };
};
