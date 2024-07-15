<!-- @format -->
<template>
  <section class="map-layout">
    <a-radio-group class="map-btns" v-model:value="mapType" @change="onChangeMapType">
      <a-radio-button
        v-for="(element, index) in [
          { key: 'tianditu', label: '天地图' },
          { key: 'gaode', label: '高德' },
        ]"
        :key="index"
        :value="element.key"
      >
        {{ element.label }}
      </a-radio-button>
    </a-radio-group>
    <section class="mapDom" :ref="(ref) => (mapDomRef = ref)" />
  </section>
</template>
<script lang="jsx" setup>
import { ref } from 'vue';
import { set, get, tryOnMounted } from '@vueuse/core';
// apis
// hooks
// utils
import SurperMapboxglMapToggle from './MapboxglMapToggle';
// types
// stores
// mixins
// configs
import { mapboxglOptions, LAYER_GD_SATELLITE, LAYER_TIAN_SATELLITE } from './configs';
import grids from '../../assets/json/grids.json';
// components
const mapDomRef = ref();
const mapRef = ref();

const mapType = ref('tianditu');

const timeoutRef = ref();

const initMapStyle = () => {
  try {
    const mapDom = get(mapDomRef);

    const map = new SurperMapboxglMapToggle({
      container: mapDom,
      mapOptions: {
        mapboxglOptions,
        grids,
      },
    });
    set(mapRef, map);
  } catch (error) {
    console.warn(error);
  }
};

const onChangeMapType = (event) => {
  try {
    const map = get(mapRef);
    map.privateUpdateSurperMapLayer(LAYER_GD_SATELLITE, 'visibility', 'none');
    map.privateUpdateSurperMapLayer(LAYER_TIAN_SATELLITE, 'visibility', 'none');

    switch (event.target.value) {
      case 'tianditu':
        timeoutRef.value = setTimeout(() => {
          map.privateUpdateSurperMapLayer(LAYER_TIAN_SATELLITE, 'visibility', 'visible');
        }, 500);
        break;
      case 'gaode':
        timeoutRef.value = setTimeout(() => {
          map.privateUpdateSurperMapLayer(LAYER_GD_SATELLITE, 'visibility', 'visible');
        }, 500);

        break;
      default:
        break;
    }
  } catch (error) {
    console.warn(error);
  }
};

tryOnMounted(() => {
  initMapStyle();
});
</script>
<style lang="less" scoped>
@import './MapboxglMapToggle.less';
</style>
