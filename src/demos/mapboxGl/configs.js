/** @format */

// apis
// hooks
// utils
// types
// stores
// mixins
// configs
import { ENV } from '@src/configs/index.ts';
// components

export const mapboxglOptions = {
  zoom: 13,
  minZoom: 11,
  maxZoom: 22,
  center: [120.464111469736, 30.031482835450717],
  pitch: 40,
  style: {
    version: 8,
    name: 'Mapbox Streets',
    sprite: 'mapbox://sprites/mapbox/streets-v8',
    glyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
    sources: {
      baseTiles: {
        type: 'raster',
        tiles: [`//t0.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${ENV.TOKEN_TIAN_DI_TU}`],
        tileSize: 256,
        minzoom: 10,
        maxzoom: 27,
      },
      textTiles: {
        type: 'raster',
        tiles: [`//t0.tianditu.gov.cn/DataServer?T=cva_w&x={x}&y={y}&l={z}&tk=${ENV.TOKEN_TIAN_DI_TU}`],
        tileSize: 256,
        minzoom: 10,
        maxzoom: 27,
      },
    },
    layers: [
      { id: 'baseTiles', type: 'raster', source: 'baseTiles', layout: { visibility: 'visible' } },
      { id: 'textTiles', type: 'raster', source: 'textTiles', layout: { visibility: 'visible' } },
    ],
  },
  hash: false,
};
