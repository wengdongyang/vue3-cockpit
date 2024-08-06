<!-- @format -->
<template>
  <section class="map-layout">
    <section class="mapDom" :ref="(ref) => (mapDomRef = ref)" />
  </section>
</template>
<script lang="jsx" setup>
import { ref } from 'vue';
import { set, get, tryOnMounted } from '@vueuse/core';
// apis
// hooks
// utils
import SurperMapboxglHeatmap from './MapboxglHeatmap';
// types
// stores
// mixins
// configs
import { mapboxglOptions } from '../../configs';
import cameras from '../../assets/json/cameras.json';
// components
const mapDomRef = ref();
const mapRef = ref();

const features = cameras
  .filter((camera) => camera.longitude && camera.latitude)
  .map((camera) => ({
    type: 'Feature',
    properties: camera,
    geometry: { type: 'Point', coordinates: [camera.longitude, camera.latitude] },
  }));

const heatmap = {
  type: 'FeatureCollection',
  crs: { type: 'name' },
  features,
};

const initMapStyle = async () => {
  try {
    const geojson = await fetch('/assets/geojson/浙江省/绍兴市/柯桥区.json').then((res) => res.json());
    const mapDom = get(mapDomRef);
    const map = new SurperMapboxglHeatmap({
      container: mapDom,
      mapOptions: {
        mapboxglOptions,
        grids: geojson,
        heatmap,
      },
    });
    set(mapRef, map);
  } catch (error) {
    warn(error);
  }
};

tryOnMounted(async () => {
  initMapStyle();
});
</script>
<style lang="less" scoped>
@import './MapboxglHeatmap.less';
</style>
