/** @format */
import { get, set, useIntervalFn } from '@vueuse/core';
import { computed, ref } from 'vue';
import * as lodash from 'lodash';
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

export const useEchartBarDefault = (fieldNames = { name: 'name', value: 'value' }) => {
  const ECHART_BAR_DEFAULT_SERIES_DATA = ref([]);
  const computedEchartsBarDefaultOption = computed(() => {
    try {
      const seriesData = get(ECHART_BAR_DEFAULT_SERIES_DATA);
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
          axisPointer: { type: 'shadow' },
          backgroundColor: '#fff',
          borderRadius: 4,
          borderWidth: 1,
          textStyle: { color: '#666', fontSize: 14 },
        },
        yAxis: {
          show: true,
          type: 'value',
          splitNumber: 5,
          axisTick: { show: true, lineStyle: { width: 1 } },
          axisLine: { show: true, lineStyle: { color: '#B9B8CE', width: 1, type: 'solid' } },
          splitLine: { show: true, lineStyle: { color: '#484753', width: 1, type: 'solid' } },
          axisLabel: { show: true, fontSize: 12 },
        },
        xAxis: {
          show: true,
          type: 'category',
          data: xAxisData,
          axisLine: { show: true, lineStyle: { color: '#B9B8CE', width: 1, type: 'solid' } },
          splitLine: { show: false, lineStyle: { color: '#484753', width: 1, type: 'solid' } },
          axisTick: { show: true, lineStyle: { width: 1 } },
          axisLabel: { show: true, fontSize: 12 },
        },
        series: [
          {
            type: 'bar',
            barMaxWidth: 20,
            data: seriesData0,
            backgroundStyle: { color: 'rgba(180, 180, 180, 0.2)' },
          },
        ],
      };
    } catch (error) {
      console.warn(error);
      return { backgroundColor: 'transparent' };
    }
  });
  const setEchartBarDefaultSeriesData = (seriesData) => {
    try {
      set(ECHART_BAR_DEFAULT_SERIES_DATA, seriesData);
    } catch (error) {
      console.warn(error);
    }
  };
  return { computedEchartsBarDefaultOption, setEchartBarDefaultSeriesData };
};
// 柱状图 - 渐变
export const useEchartBarGradient = (fieldNames = { name: 'name', value: 'value' }) => {
  const ECHART_BAR_GRADIENT_SERIES_DATA = ref([]);
  const computedEchartsBarGradientOption = computed(() => {
    try {
      const seriesData = get(ECHART_BAR_GRADIENT_SERIES_DATA);
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
          axisPointer: { type: 'shadow' },
          backgroundColor: '#fff',
          borderRadius: 4,
          borderWidth: 1,
          textStyle: { color: '#666', fontSize: 14 },
        },
        yAxis: {
          show: true,
          type: 'value',
          splitNumber: 5,
          axisLine: { show: true, lineStyle: { color: '#B9B8CE', width: 1, type: 'solid' } },
          splitLine: { show: true, lineStyle: { color: '#484753', width: 1, type: 'solid' } },
          axisTick: { show: true, lineStyle: { width: 1 } },
          axisLabel: { show: true, fontSize: 12 },
        },
        xAxis: {
          show: true,
          type: 'category',
          data: xAxisData,
          axisLine: { show: true, lineStyle: { color: '#B9B8CE', width: 1, type: 'solid' } },
          splitLine: { show: false, lineStyle: { color: '#484753', width: 1, type: 'solid' } },
          axisTick: { show: true, lineStyle: { width: 1 } },
          axisLabel: { show: true, fontSize: 12 },
        },
        series: [
          {
            type: 'bar',
            barMaxWidth: 20,
            data: seriesData0,
            itemStyle: {
              color: createEchartsLinearColorStops([
                { offset: 0, color: 'red' },
                { offset: 1, color: 'blue' },
              ]),
            },
            backgroundStyle: { color: 'rgba(180, 180, 180, 0.2)' },
          },
        ],
      };
    } catch (error) {
      console.warn(error);
      return { backgroundColor: 'transparent' };
    }
  });
  const setEchartBarGradientSeriesData = (seriesData) => {
    try {
      set(ECHART_BAR_GRADIENT_SERIES_DATA, seriesData);
    } catch (error) {
      console.warn(error);
    }
  };
  return { computedEchartsBarGradientOption, setEchartBarGradientSeriesData };
};
// 轮播
export const useEchartBarCarousel = (fieldNames = { name: 'name', value: 'value', step: 5, interval: 1000 }) => {
  const intervalCount = ref(0);
  const ECHART_BAR_CAROUSEL_SERIES_DATA = ref([]);

  const computedEchartsBarCarouselOption = computed(() => {
    try {
      const { step } = fieldNames;
      const count = get(intervalCount);
      const seriesData = get(ECHART_BAR_CAROUSEL_SERIES_DATA);
      const nameKey = fieldNames['name'];
      const valueKey = fieldNames['value'];
      const xAxisData = seriesData
        .filter((item, index) => count <= index && index < count + step)
        .map((item) => lodash.get(item, [nameKey]));
      const seriesData0 = seriesData
        .filter((item, index) => count <= index && index < count + step)
        .map((item) => lodash.get(item, [valueKey]));
      return {
        grid,
        backgroundColor: 'transparent',
        textStyle: { color: '#B9B8CE', fontSize: 12 },
        color: ['#4992ff', '#7cffb2', '#fddd60', '#ff6e76', '#58d9f9', '#05c091', '#ff8a45', '#8d48e3', '#dd79ff'],
        tooltip: {
          show: true,
          trigger: 'axis',
          borderWidth: 1,
          borderRadius: 4,
          backgroundColor: '#fff',
          axisPointer: { type: 'shadow' },
          textStyle: { color: '#666', fontSize: 14 },
        },
        yAxis: {
          show: true,
          type: 'value',
          splitNumber: 5,
          axisLine: { show: true, lineStyle: { color: '#B9B8CE', width: 1, type: 'solid' } },
          splitLine: { show: true, lineStyle: { color: '#484753', width: 1, type: 'solid' } },
          axisTick: { show: true, lineStyle: { width: 1 } },
          axisLabel: { show: true, fontSize: 12 },
        },
        xAxis: {
          show: true,
          type: 'category',
          data: xAxisData,
          axisLine: { show: true, lineStyle: { color: '#B9B8CE', width: 1, type: 'solid' } },
          splitLine: { show: false, lineStyle: { color: '#484753', width: 1, type: 'solid' } },
          axisTick: { show: true, lineStyle: { width: 1 } },
          axisLabel: { show: true, fontSize: 12 },
        },
        series: [
          {
            type: 'bar',
            barMaxWidth: 20,
            data: seriesData0,
            backgroundStyle: {
              color: 'rgba(180, 180, 180, 0.2)',
            },
          },
        ],
      };
    } catch (error) {
      console.warn(error);
      return { backgroundColor: 'transparent' };
    }
  });

  const intervalBarCarousel = () => {
    try {
      const { step } = fieldNames;
      const count = get(intervalCount);
      const seriesData = get(ECHART_BAR_CAROUSEL_SERIES_DATA);

      if (count + step < seriesData.length) {
        set(intervalCount, count + 1);
      } else {
        set(intervalCount, 0);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const { resume } = useIntervalFn(intervalBarCarousel, fieldNames.interval, { immediate: false });
  const setEchartBarCarouselSeriesData = (seriesData) => {
    try {
      set(ECHART_BAR_CAROUSEL_SERIES_DATA, seriesData);
      resume();
    } catch (error) {
      console.warn(error);
    }
  };
  return { computedEchartsBarCarouselOption, setEchartBarCarouselSeriesData };
};

// 高亮
export const useEchartBarCarouselHighLight = (fieldNames = { name: 'name', value: 'value', interval: 1000 }) => {
  const chartTarget = ref();

  const intervalCount = ref(0);

  const ECHART_BAR_CAROUSEL_HIGHLIGHT_SERIES_DATA = ref([]);
  const computedEchartsBarCarouselHighLightOption = computed(() => {
    try {
      const seriesData = get(ECHART_BAR_CAROUSEL_HIGHLIGHT_SERIES_DATA);
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
          axisPointer: { type: 'shadow' },
          backgroundColor: '#fff',
          borderRadius: 4,
          borderWidth: 1,
          textStyle: { color: '#666', fontSize: 14 },
        },
        yAxis: {
          show: true,
          type: 'value',
          splitNumber: 5,
          axisLine: { show: true, lineStyle: { color: '#B9B8CE', width: 1, type: 'solid' } },
          splitLine: { show: true, lineStyle: { color: '#484753', width: 1, type: 'solid' } },
          axisTick: { show: true, lineStyle: { width: 1 } },
          axisLabel: { show: true, fontSize: 12 },
        },
        xAxis: {
          show: true,
          type: 'category',
          data: xAxisData,
          axisLine: { show: true, lineStyle: { color: '#B9B8CE', width: 1, type: 'solid' } },
          splitLine: { show: false, lineStyle: { color: '#484753', width: 1, type: 'solid' } },
          axisTick: { show: true, lineStyle: { width: 1 } },
          axisLabel: { show: true, fontSize: 12 },
        },
        series: [
          {
            type: 'bar',
            barMaxWidth: 20,
            data: seriesData0,
            backgroundStyle: { color: 'rgba(180, 180, 180, 0.2)' },
          },
        ],
      };
    } catch (error) {
      console.warn(error);
      return { backgroundColor: 'transparent' };
    }
  });

  const intervalHighLight = () => {
    try {
      const count = get(intervalCount);
      const seriesData = get(ECHART_BAR_CAROUSEL_HIGHLIGHT_SERIES_DATA);

      const target = chartTarget.value;

      if (target) {
        target.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: get(count),
        });

        if (count + 1 < seriesData.length) {
          set(intervalCount, count + 1);
        } else {
          set(intervalCount, 0);
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };

  const { resume } = useIntervalFn(intervalHighLight, fieldNames.interval, {
    immediate: false,
  });

  const setEchartsBarCarouselHighLightTarget = (target) => {
    try {
      chartTarget.value = target;
    } catch (error) {
      console.warn(error);
    }
  };

  const setEchartsBarCarouselHighLightSeriesData = (seriesData) => {
    try {
      set(ECHART_BAR_CAROUSEL_HIGHLIGHT_SERIES_DATA, seriesData);
      resume();
    } catch (error) {
      console.warn(error);
    }
  };
  return {
    computedEchartsBarCarouselHighLightOption,
    setEchartsBarCarouselHighLightSeriesData,
    setEchartsBarCarouselHighLightTarget,
  };
};
