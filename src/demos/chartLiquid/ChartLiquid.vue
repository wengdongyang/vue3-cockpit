<!-- @format -->
<template>
  <a-page-header>
    <template #title>
      <a-breadcrumb>
        <a-breadcrumb-item>DEMO</a-breadcrumb-item>
        <a-breadcrumb-item>水波图</a-breadcrumb-item>
      </a-breadcrumb>
    </template>
    <section class="content">
      <a-row :gutter="[12, 12]">
        <a-col :span="8">
          <a-card class="card" title="水波图 - 普通">
            <VChart
              :style="{ width: '100%', height: '400px' }"
              :option="computedEchartsLiquidDefaultOption"
              :ref="(ref) => (chartsBarCarouselHighLightRef = ref)"
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
import { apiGetChartLiquid } from '@src/apis';
// hooks
import { useEchartLiquidDefault } from './hooks';
// utils
// types
// stores
// mixins
// configs
// components
provide(THEME_KEY, 'dark');

const { computedEchartsLiquidDefaultOption, setEchartLiquidDefaultSeriesData } = useEchartLiquidDefault();

const chartsBarCarouselHighLightRef = ref();

const liquidValue = ref(0);

const { run } = useRequest(
  () => {
    return apiGetChartLiquid();
  },
  {
    manual: true,
    onSuccess: ({ code, data, msg }) => {
      if (code === 200) {
        set(liquidValue, data.num);

        console.error(chartsBarCarouselHighLightRef.value.getOption());
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
@import './ChartLiquid.less';
</style>
