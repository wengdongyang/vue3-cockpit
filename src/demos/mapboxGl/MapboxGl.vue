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
        <a-col :span="24">
          <a-card class="card" title="MapboxGl - 热力图">
            <MapboxglHeatmap />
          </a-card>
        </a-col>
        <a-col :span="24">
          <a-card class="card" title="MapboxGl - 普通"> </a-card>
        </a-col>
        <a-col :span="24">
          <a-card class="card" title="MapboxGl - 区域"> </a-card>
        </a-col>
        <a-col :span="24">
          <a-card class="card" title="MapboxGl - 撒点"> </a-card>
        </a-col>
        <a-col :span="24">
          <a-card class="card" title="MapboxGl - 白模"> </a-card>
        </a-col>
        <a-col :span="24">
          <a-card class="card" title="MapboxGl - 3D贴图"> </a-card>
        </a-col>
        <a-col :span="24">
          <a-card class="card" title="MapboxGl - 切换底图"> </a-card>
        </a-col>
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
</script>
<style lang="less" scoped>
@import './MapboxGl.less';
</style>
