<!-- @format -->
<template>
  <a-page-header>
    <template #title>
      <a-breadcrumb>
        <a-breadcrumb-item>DEMO</a-breadcrumb-item>
        <a-breadcrumb-item>折线图</a-breadcrumb-item>
      </a-breadcrumb>
    </template>
    <section class="content">
      <a-row :gutter="[12, 12]">
        <a-col :span="8">
          <a-card class="card" title="折线图 - 普通">
            <VChart :style="{ width: '100%', height: '400px' }" :option="computedEchartsLineDefaultOption" autoSize />
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card class="card" title="折线图 - 渐变">
            <VChart :style="{ width: '100%', height: '400px' }" :option="computedEchartsLineGradientOption" autoSize />
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
import { apiGetChartLine } from '@src/apis';
// hooks
import { useEchartLineDefault, useEchartLineGradient } from './hooks';
// utils
// types
// stores
// mixins
// configs
// components
provide(THEME_KEY, 'dark');
const { computedEchartsLineDefaultOption, setEchartLineDefaultSeriesData } = useEchartLineDefault({
  name: 'cname',
  value: 'num',
});

const { computedEchartsLineGradientOption, setEchartLineGradientSeriesData } = useEchartLineGradient({
  name: 'cname',
  value: 'num',
});

const dataSource = ref([]);

const { run } = useRequest(
  () => {
    return apiGetChartLine();
  },
  {
    manual: true,
    onSuccess: ({ code, data, msg }) => {
      if (code === 200 && data?.list?.length) {
        set(dataSource, data.list);
        setEchartLineDefaultSeriesData(data.list);
        setEchartLineGradientSeriesData(data.list);
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
@import './ChartLine.less';
</style>
