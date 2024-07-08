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
            <VChart :style="{ width: '100%', height: '400px' }" :option="{}" autoSize />
          </a-card>
        </a-col>
      </a-row>
    </section>
  </a-page-header>
</template>
<script lang="jsx" setup>
import { provide } from 'vue';
import VChart, { THEME_KEY } from 'vue-echarts';
// apis
// hooks
// utils
// types
// stores
// mixins
// configs
// components
provide(THEME_KEY, 'dark');
</script>
<style lang="less" scoped>
@import './ChartMap.less';
</style>
