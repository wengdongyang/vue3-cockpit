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
// types
// stores
// mixins
// configs
// components
const mapDomRef = ref();
const mapRef = ref();

const initMapStyle = () => {
  try {
    const mapDom = get(mapDomRef);
  } catch (error) {
    warn(error);
  }
};

tryOnMounted(() => {
  initMapStyle();
});
</script>
<style lang="less" scoped>
@import './MapboxglClusterPoints.less';
</style>
