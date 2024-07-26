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

const SOURCE_GD_SATELLITE = 'source-gd-satellite';
const SOURCE_TIAN_SATELLITE = 'source-tian-satellite';

export const LAYER_GD_SATELLITE = 'layer-gd-satellite';
export const LAYER_TIAN_SATELLITE = 'layer-tian-satellite';

// 高德路网;
// //wprd01.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&lang=zh_cn&size=1&scl=2&style=8<ype=11
// 高德影像;
// //webst01.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}
// 高德矢量;
// //wprd04.is.autonavi.com/appmaptile?lang=zh_cn&size=1&style=7&x={x}&y={y}&z={z}
// 谷歌矢量;
// //mt2.google.cn/vt/lyrs=m&scale=2&hl=zh-CN&gl=cn&x={x}&y={y}&z={z}
// 谷歌路网;
// //mt1.google.com/vt/lyrs=h&x={x}&y={y}&z={z}
// 谷歌影像;
// //www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}
// 谷歌影像带注记;
// //mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}
// 谷歌地形;
// //mt1.google.com/vt/lyrs=t&x={x}&y={y}&z={z}
// 谷歌地图矢量带地形渲染;
// //mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}
// 街景地图;
// //tile.openstreetmap.org/{z}/{x}/{y}.png
// 天地图影像;
// //t7.tianditu.gov.cn/img_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=img&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=e3b434f191257368fc43c5b011ab5911
// 天地图影像注记;
// //t7.tianditu.gov.cn/cia_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cia&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=e3b434f191257368fc43c5b011ab5911
// 天地图矢量;
// //t7.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=e3b434f191257368fc43c5b011ab5911
// 天地图矢量注记;
// //t7.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=e3b434f191257368fc43c5b011ab5911
// 天地图地形;
// //t7.tianditu.gov.cn/ter_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=ter&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=e3b434f191257368fc43c5b011ab5911
// 天地图地形注记;
// //t7.tianditu.gov.cn/cta_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cta&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}&tk=e3b434f191257368fc43c5b011ab5911
// 腾讯地图矢量;
// //rt0.map.gtimg.com/realtimerender?z={z}&x={x}&y={-y}&type=vector&style=0

export const mapboxglOptions = {
  zoom: 13,
  minZoom: 8,
  maxZoom: 22,
  center: [120.464111469736, 30.031482835450717],
  pitch: 40,
  style: {
    version: 8,
    name: 'Mapbox Streets',
    sprite: 'mapbox://sprites/mapbox/streets-v12',
    glyphs: 'mapbox://fonts/mapbox/{fontstack}/{range}.pbf',
    sources: {
      // 高德地图 卫星影像
      [SOURCE_GD_SATELLITE]: {
        type: 'raster',
        tiles: ['//wprd04.is.autonavi.com/appmaptile?x={x}&y={y}&z={z}&size=1&scl=1&style=6'],
        tileSize: 256,
      },
      // 天地图 卫星影像
      [SOURCE_TIAN_SATELLITE]: {
        type: 'raster',
        tiles: [`//t0.tianditu.gov.cn/DataServer?T=img_w&x={x}&y={y}&l={z}&tk=${ENV.TOKEN_TIAN_DI_TU}`],
        tileSize: 256,
      },
    },
    layers: [
      { id: LAYER_GD_SATELLITE, type: 'raster', source: SOURCE_GD_SATELLITE, layout: { visibility: 'none' } },
      { id: LAYER_TIAN_SATELLITE, type: 'raster', source: SOURCE_TIAN_SATELLITE, layout: { visibility: 'visible' } },
    ],
  },
  hash: false,
};
