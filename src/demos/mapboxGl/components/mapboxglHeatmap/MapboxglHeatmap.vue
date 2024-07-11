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
// components
const mapDomRef = ref();
const mapRef = ref();

const features = new Array(100).fill().map((element) => ({
  type: 'Feature',
  properties: {
    id: 'ak16994521',
    mag: Math.floor(Math.random() * 100),
    time: 1507425650893,
    felt: null,
    tsunami: 0,
  },
  geometry: {
    type: 'Point',
    coordinates: [120.45265258100005 + Math.random(), 30.049448176000055 + Math.random(), Math.random()],
  },
}));
const heatmap = {
  type: 'FeatureCollection',
  crs: {
    type: 'name',
    properties: {
      name: 'urn:ogc:def:crs:OGC:1.3:CRS84',
    },
  },
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
