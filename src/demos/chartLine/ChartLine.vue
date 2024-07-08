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
          <a-card class="card" title="折线图 - 普通"> </a-card>
        </a-col>
        <a-col :span="8">
          <a-card class="card" title="折线图 - 渐变"> </a-card>
        </a-col>
        <a-col :span="8">
          <a-card class="card" title="折线图 - 轮播"> </a-card>
        </a-col>
        <a-col :span="8">
          <a-card class="card" title="折线图 - 轮播高亮">
            <VChart
              :style="{ width: '100%', height: '400px' }"
              :option="{}"
              :ref="(ref) => (chartsLineCarouselHighLight = ref)"
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
import { apiGetChartLine } from '@src/apis';
// hooks
// utils
// types
// stores
// mixins
// configs
// components
provide(THEME_KEY, 'dark');

const dataSource = ref([]);

const chartsLineCarouselHighLight = ref();

const { run } = useRequest(
  () => {
    return apiGetChartLine();
  },
  {
    manual: true,
    onSuccess: ({ code, data, msg }) => {
      if (code === 200 && data?.list?.length) {
        set(dataSource, data.list);
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
