<!-- @format -->
<template>
  <a-page-header>
    <template #title>
      <a-breadcrumb>
        <a-breadcrumb-item>DEMO</a-breadcrumb-item>
        <a-breadcrumb-item>MapboxGl</a-breadcrumb-item>
      </a-breadcrumb>
    </template>
    <section class="content">
      <a-row :gutter="[12, 12]">
        <a-col :span="12">
          <a-card class="card" title="MapboxGl - 热力图">
            <MapboxglHeatmap />
          </a-card>
        </a-col>
        <a-col :span="12">
          <a-card class="card" title="MapboxGl - 切换底图">
            <MapboxglMapToggle />
          </a-card>
        </a-col>

        <!-- <a-col :span="12">
          <a-card class="card" title="MapboxGl - 聚合撒点">
            <MapboxglClusterPoints />
          </a-card>
        </a-col>
        
        <a-col :span="24">
          <a-card class="card" title="MapboxGl - 白模"> </a-card>
        </a-col> -->
      </a-row>
    </section>
  </a-page-header>
</template>
<script lang="jsx" setup>
// apis
// hooks
// utils
// types
// stores
// mixins
// configs
// components
import MapboxglHeatmap from './components/mapboxglHeatmap/MapboxglHeatmap.vue';
import MapboxglMapToggle from './components/mapboxglMapToggle/MapboxglMapToggle.vue';
import MapboxglClusterPoints from './components/mapboxglClusterPoints/MapboxglClusterPoints.vue';
</script>
<style lang="less" scoped>
@import './MapboxGl.less';
</style>
