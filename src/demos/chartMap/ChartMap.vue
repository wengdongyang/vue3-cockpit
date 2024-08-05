<!-- @format -->
<template>
  <a-page-header>
    <template #title>
      <a-breadcrumb>
        <a-breadcrumb-item>DEMO</a-breadcrumb-item>
        <a-breadcrumb-item>ECHARTS 地图</a-breadcrumb-item>
      </a-breadcrumb>
    </template>
    <section class="content">
      <a-row :gutter="[12, 12]">
        <a-col :span="8">
          <a-card class="card" title="ECHARTS地图 - 普通">
            <VChart
              v-if="isRegistered"
              :style="{ width: '100%', height: '400px' }"
              :option="computedEchartsMapDefaultOption"
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
import { provide, ref } from 'vue';
import * as echarts from 'echarts';
import { set, tryOnMounted } from '@vueuse/core';
import VChart, { THEME_KEY } from 'vue-echarts';
// apis
// hooks
import { useEchartMapDefault } from './hooks';
// utils
// types
// stores
// mixins
// configs
import geojson from './keqiao.json';
// components
provide(THEME_KEY, 'dark');
const chartsBarCarouselHighLightRef = ref();
const { computedEchartsMapDefaultOption } = useEchartMapDefault({ map: 'keqiao' });
const isRegistered = ref(false);

tryOnMounted(() => {
  echarts.registerMap('keqiao', geojson);

  set(isRegistered, true);

  setTimeout(() => {
    console.error(chartsBarCarouselHighLightRef.value.getOption());
  }, 600);
});
</script>
<style lang="less" scoped>
@import './ChartMap.less';
</style>
