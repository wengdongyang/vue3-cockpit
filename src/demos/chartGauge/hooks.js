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
const backgroundColor = 'transparent';

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
export const useEchartGauge = () => {
  const ECHART_GAUGE_VALUE = ref(0);
  const computedEchartsGaugeOption = computed(() => {
    try {
      const value = get(ECHART_GAUGE_VALUE);
      return {
        grid,
        backgroundColor,
        textStyle: { color: '#B9B8CE', fontSize: 12 },
        tooltip: {
          formatter: '{a} <br/>{b} : {c}%',
          show: true,
          showContent: true,
          trigger: 'item',
          backgroundColor: '#fff',
          borderRadius: 4,
          borderWidth: 1,
          textStyle: { color: '#666', fontSize: 14 },
        },
        series: [
          {
            name: '仪表盘进度',
            type: 'gauge',
            data: [{ value, name: '仪表盘' }],
            min: 0,
            max: 100,
            radius: '75%',
            endAngle: -45,
            startAngle: 225,
            splitNumber: 10,
            center: ['50%', '50%'],
            title: { show: true, color: '#B9B8CE', offsetCenter: [0, '20%'], fontSize: 16 },
            // 展示当前进度
            progress: { show: true, width: 10 },
            // 仪表盘指针
            pointer: { show: true, offsetCenter: [0, 0], length: '60%', width: 6 },
            // 刻度标签
            axisLabel: { show: true, color: '#B9B8CE', distance: 15, fontSize: 12, rotate: 0 },
            // 仪表盘轴线相关配置
            axisLine: { show: true, lineStyle: { color: [[1, 'rgba(207,212,219,0.2)']], width: 10 }, roundCap: false },
            // 分隔线样式
            splitLine: { show: true, length: 10, distance: 10, lineStyle: { color: '#63677A', width: 3, type: 'solid' } },
            // 表盘中指针的固定点
            anchor: { show: false, size: 6, icon: 'circle', itemStyle: { color: '#fff', borderWidth: 0, borderColor: '#5470c6' } },
            // 刻度样式
            axisTick: { show: true, splitNumber: 5, length: 6, distance: 10, lineStyle: { color: '#63677A', width: 1, type: 'solid' } },
          },
        ],
      };
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
