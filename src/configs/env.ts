/** @format */
// apis
// hooks
// utils
// types
// stores
// mixins
// configs
// components
const ENV_MODE = import.meta.env.MODE || 'production'; // 模式

const ENV_TOKEN = 'TOKEN'; // token的key

const ENV_TOKEN_MAPBOX_GL =
  import.meta.env.VITE_TOKEN_MAPBOX_GL ||
  'pk.eyJ1Ijoic3o2NjY2NjYiLCJhIjoiY2tuam44NXZzMDEwMzJ1cGV3djR6OHA5cCJ9.2LA3YOPHRLTTB25CvAoIdw'; // mapbox-gl 的 token
const ENV_TOKEN_TIAN_DI_TU = import.meta.env.VITE_TOKEN_TIAN_DI_TU || ''; // 天地图 的 token
const ENV_TOKEN_GAODE = import.meta.env.VITE_TOKEN_GAODE || ''; // 高德地图 的 token

export default {
  MODE: ENV_MODE,

  TOKEN: ENV_TOKEN,

  TOKEN_GAODE: ENV_TOKEN_GAODE,
  TOKEN_MAPBOX_GL: ENV_TOKEN_MAPBOX_GL,
  TOKEN_TIAN_DI_TU: ENV_TOKEN_TIAN_DI_TU,

  // CAROUSEL_AUTOPLAY: import.meta.env.MODE === 'production',
  CAROUSEL_AUTOPLAY: true,
};
