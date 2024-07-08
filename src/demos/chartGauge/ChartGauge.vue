<!-- @format -->
<template>
  <a-page-header>
    <template #title>
      <a-breadcrumb>
        <a-breadcrumb-item>DEMO</a-breadcrumb-item>
        <a-breadcrumb-item>仪表盘</a-breadcrumb-item>
      </a-breadcrumb>
    </template>
    <section class="content">
      <a-row :gutter="[12, 12]">
        <a-col :span="8">
          <a-card class="card" title="仪表盘 - 普通">
            <VChart
              class="chart-gauge"
              :option="computedEchartsGaugeOption"
              :ref="(ref) => (chartsGaugeRef = ref)"
              autoSize
            />
          </a-card>
        </a-col>
      </a-row>
    </section>
  </a-page-header>
</template>
<script lang="jsx" setup>
import { set, tryOnMounted } from '@vueuse/core';
import { useRequest } from 'ahooks-vue';
import { message } from 'ant-design-vue';
import { provide, ref } from 'vue';
import VChart, { THEME_KEY } from 'vue-echarts';
// apis
import { apiGetChartGauge } from '@src/apis';
// hooks
import { useEchartGauge } from './hooks';
// utils
// types
// stores
// mixins
// configs
// components
provide(THEME_KEY, 'dark');
const { computedEchartsGaugeOption, setEchartGaugeValue } = useEchartGauge();

const chartsGaugeRef = ref();
const gaugeValue = ref(0);

const { run } = useRequest(
  () => {
    return apiGetChartGauge();
  },
  {
    manual: true,
    onSuccess: ({ code, data, msg }) => {
      if (code === 200) {
        set(gaugeValue, data.num);
        setEchartGaugeValue(data.num);

        console.error(data.num);
      } else {
        message.error(msg);
      }
    },
  },
);

tryOnMounted(async () => {
  await run();
});
</script>
<style lang="less" scoped>
@import './ChartGauge.less';
</style>
