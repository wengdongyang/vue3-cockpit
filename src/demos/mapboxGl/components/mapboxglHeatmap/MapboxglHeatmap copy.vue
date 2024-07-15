<!-- @format -->
<template>
  <section>
    <section class="mapDom" :ref="(ref) => (mapDomRef = ref)" />
  </section>
</template>
<script lang="jsx" setup>
import { ref } from 'vue';
import { set, get, tryOnMounted } from '@vueuse/core';
// apis
// hooks
// utils
import SurperMapboxGlHeatmap from './MapboxglHeatmap';
// types
// stores
// mixins
// configs
import { mapboxglOptions } from '../../configs';
import grids from '../../assets/json/grids.json';
import cameras from '../../assets/json/cameras.json';
// components
const mapDomRef = ref();
const mapRef = ref();

const features = cameras
  .filter((camera) => camera.longitude && camera.latitude)
  .map((camera, index) => ({
    type: 'Feature',
    properties: Object.assign({ mag: Math.random() * 6 }, camera),
    geometry: { type: 'Point', coordinates: [camera.longitude, camera.latitude] },
  }));

const heatmap = {
  type: 'FeatureCollection',
  crs: { type: 'name' },
  features,
};

const initMap = () => {
  try {
    const mapDom = get(mapDomRef);
    const map = new SurperMapboxGlHeatmap({
      container: mapDom,
      mapOptions: {
        mapboxglOptions,
        grids,
        heatmap,
      },
    });
    set(mapRef, map);
  } catch (error) {
    warn(error);
  }
};

tryOnMounted(() => {
  initMap();
});
</script>
<style lang="less" scoped>
@import './MapboxglHeatmap.less';
</style>
