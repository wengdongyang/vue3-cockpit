<!-- @format -->
<template>
  <a-page-header>
    <template #title>
      <a-breadcrumb>
        <a-breadcrumb-item>DEMO</a-breadcrumb-item>
        <a-breadcrumb-item>饼图</a-breadcrumb-item>
      </a-breadcrumb>
    </template>
    <section class="content">
      <a-row :gutter="[12, 12]">
        <a-col :span="8">
          <a-card class="card" title="饼图 - 普通">
            <VChart :style="{ width: '100%', height: '400px' }" :option="computedEchartsPieDefaultOption" autoSize />
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card class="card" title="饼图 - 环形图">
            <VChart :style="{ width: '100%', height: '400px' }" :option="computedEchartsCircleDefaultOption" autoSize />
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
import { apiGetChartPie } from '@src/apis';
// hooks
import { useEchartPieDefault, useEchartCircleDefault } from './hooks';
// utils
// types
// stores
// mixins
// configs
// components
provide(THEME_KEY, 'dark');

const dataSource = ref([]);

const { computedEchartsPieDefaultOption, setEchartPieDefaultSeriesData } = useEchartPieDefault({
  name: 'cname',
  value: 'num',
});

const { computedEchartsCircleDefaultOption, setEchartCircleDefaultSeriesData } = useEchartCircleDefault({
  name: 'cname',
  value: 'num',
});

const { run } = useRequest(
  () => {
    return apiGetChartPie();
  },
  {
    manual: true,
    onSuccess: ({ code, data, msg }) => {
      if (code === 200) {
        set(dataSource, data.list);
        setEchartPieDefaultSeriesData(data.list);
        setEchartCircleDefaultSeriesData(data.list);
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
@import './ChartPie.less';
</style>
