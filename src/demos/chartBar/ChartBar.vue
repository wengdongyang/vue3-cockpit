<!-- @format -->
<template>
  <a-page-header>
    <template #title>
      <a-breadcrumb>
        <a-breadcrumb-item>DEMO</a-breadcrumb-item>
        <a-breadcrumb-item>柱状图</a-breadcrumb-item>
      </a-breadcrumb>
    </template>
    <section class="content">
      <a-row :gutter="[12, 12]">
        <a-col :span="8">
          <a-card class="card" title="柱状图 - 普通">
            <VChart
              class="chart-bar"
              :option="computedEchartsBarDefaultOption"
              autoSize
            />
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card class="card" title="柱状图 - 渐变">
            <VChart
              class="chart-bar"
              :option="computedEchartsBarGradientOption"
              autoSize
            />
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card class="card" title="柱状图 - 轮播">
            <VChart
              class="chart-bar"
              :option="computedEchartsBarCarouselOption"
              autoSize
            />
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card class="card" title="柱状图 - 轮播高亮">
            <VChart
              class="chart-bar"
              :option="computedEchartsBarCarouselHighLightOption"
              :ref="(ref) => (chartsBarCarouselHighLight = ref)"
              autoSize
            />
          </a-card>
        </a-col>
        <!-- <a-col :span="8">
          <a-card class="card" title="柱状图 - 3D"> </a-card>
        </a-col> -->
      </a-row>
    </section>
  </a-page-header>
</template>
<script lang="jsx" setup>
import { get, set, tryOnMounted } from '@vueuse/core';
import { useRequest } from 'ahooks-vue';
import { message } from 'ant-design-vue';
import { provide, ref } from 'vue';
import VChart, { THEME_KEY } from 'vue-echarts';
// apis
import { apiGetChartBar } from '@src/apis';
// hooks
import {
  useEchartBarCarousel,
  useEchartBarCarouselHighLight,
  useEchartBarDefault,
  useEchartBarGradient,
} from './hooks';
// utils
// types
// stores
// mixins
// configs
// components
provide(THEME_KEY, 'dark');

const dataSource = ref([]);
const chartsBarCarouselHighLight = ref();

const { computedEchartsBarDefaultOption, setEchartBarDefaultSeriesData } =
  useEchartBarDefault({
    name: 'cname',
    value: 'num',
  });
const { computedEchartsBarGradientOption, setEchartBarGradientSeriesData } =
  useEchartBarGradient({
    name: 'cname',
    value: 'num',
  });
const { computedEchartsBarCarouselOption, setEchartBarCarouselSeriesData } =
  useEchartBarCarousel({
    name: 'cname',
    value: 'num',
    step: 5,
    interval: 1000,
  });

const {
  computedEchartsBarCarouselHighLightOption,
  setEchartsBarCarouselHighLightSeriesData,
  setEchartsBarCarouselHighLightTarget,
} = useEchartBarCarouselHighLight({
  name: 'cname',
  value: 'num',
  interval: 1000,
});

const { run } = useRequest(
  () => {
    return apiGetChartBar();
  },
  {
    manual: true,
    onSuccess: ({ code, data, msg }) => {
      if (code === 200 && data?.list?.length) {
        set(dataSource, data.list);
        setEchartBarDefaultSeriesData(data.list);
        setEchartBarGradientSeriesData(data.list);
        setEchartBarCarouselSeriesData(data.list);

        setEchartsBarCarouselHighLightSeriesData(data.list);
        setEchartsBarCarouselHighLightTarget(get(chartsBarCarouselHighLight));
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
@import './ChartBar.less';
</style>
