<!-- @format -->
<template>
  <a-page-header>
    <template #title>
      <a-breadcrumb>
        <a-breadcrumb-item>DEMO</a-breadcrumb-item>
        <a-breadcrumb-item>金字塔</a-breadcrumb-item>
      </a-breadcrumb>
    </template>
    <section class="content">
      <a-row :gutter="[12, 12]">
        <a-col :span="8">
          <a-card class="card" title="金字塔 - 普通">
            <VChart
              :style="{ width: '100%', height: '400px' }"
              :option="computedEchartsPyramidDefaultOption"
              :ref="(ref) => (chartsBarCarouselHighLightRef = ref)"
              autoSize
            />
          </a-card>
        </a-col>
        <a-col :span="8">
          <a-card class="card" title="金字塔 - 3D">
            <VChart :style="{ width: '100%', height: '400px' }" :option="{}" autoSize />
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
import { apiGetChartPyramid } from '@src/apis';
// hooks
import { useEchartPyramidDefault } from './hooks';
// utils
// types
// stores
// mixins
// configs
// components
provide(THEME_KEY, 'dark');
const chartsBarCarouselHighLightRef = ref();
const { computedEchartsPyramidDefaultOption, setEchartPyramidDefaultSeriesData } = useEchartPyramidDefault({
  name: 'cname',
  value: 'num',
});
const pyramidValue = ref([]);

const { run } = useRequest(
  () => {
    return apiGetChartPyramid();
  },
  {
    manual: true,
    onSuccess: ({ code, data, msg }) => {
      if (code === 200 && data?.list?.length > 0) {
        set(pyramidValue.value, data.list);
        setEchartPyramidDefaultSeriesData(data.list);
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
@import './ChartPyramid.less';
</style>
