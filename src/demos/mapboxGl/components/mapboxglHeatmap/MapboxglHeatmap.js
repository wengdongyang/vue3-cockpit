/** @format */
import * as lodash from 'lodash';
// apis
// hooks
// utils
// types
// stores
// mixins
// configs
import cameras from '../../assets/json/cameras.json';
// components
import SurperMapboxGl from '../../SurperMapboxGl.ts';

const GRIDS = {
  SOURCE: 'GRIDS_EXCLUSIVE_SOURCE',
  AREA_LAYER: 'GRIDS_EXCLUSIVE_AREA_LAYER',
  LINE_LAYER: 'GRIDS_EXCLUSIVE_LINE_LAYER',
  TEXT_LAYER: 'GRIDS_EXCLUSIVE_TEXT_LAYER',
};

const HEATMAP = {
  SOURCE: 'HEATMAP_SOURCE',
  HEAT_LAYER: 'earthquakes-heat',
  POINT_LAYER: 'earthquakes-point',
};

export default class SurperMapboxGlHeatmap extends SurperMapboxGl {
  constructor(props) {
    super(props);
  }

  surperMapStyleLoadCallback = () => {
    this.initMapArea();
    this.updateMapArea();

    this.initMapHeatmap();
    this.updateMapHeatmap();
  };

  initMapArea = () => {
    const { surperMap, mapOptions } = this;
    try {
      if (surperMap) {
        const sourceGeojson = lodash.get(mapOptions, ['grids']) || {};

        if (sourceGeojson && !lodash.isEmpty(sourceGeojson)) {
          this.privateInitSurperMapSource(GRIDS.SOURCE);

          this.privateInitSurperMapLayer(GRIDS.AREA_LAYER, {
            id: GRIDS.AREA_LAYER,
            source: GRIDS.SOURCE,
            type: 'fill',
            paint: { 'fill-color': '#5F84FF', 'fill-opacity': 0.3 },
            filter: ['!=', '$type', 'Point'],
          });
          this.privateInitSurperMapLayer(GRIDS.LINE_LAYER, {
            id: GRIDS.LINE_LAYER,
            source: GRIDS.SOURCE,
            type: 'line',
            filter: ['!=', '$type', 'Point'],
            paint: { 'line-color': '#FFFFFF', 'line-width': 3 },
          });
          this.privateInitSurperMapLayer(GRIDS.TEXT_LAYER, {
            id: GRIDS.TEXT_LAYER,
            source: GRIDS.SOURCE,
            type: 'symbol',
            layout: {
              'icon-offset': [0, -0],
              'text-field': ['get', 'NAME'],
              'text-anchor': 'center',
              'text-size': 12,
              'text-offset': [0, -0],
            },
            paint: {
              'text-color': 'rgba(45, 45, 45, 1)',
              'text-halo-color': 'rgba(255, 255, 255, 1)',
              'text-halo-width': 2,
            },
            filter: ['==', '$type', 'Point'],
          });
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };

  updateMapArea = () => {
    const { surperMap, mapOptions } = this;
    try {
      const sourceGeojson = lodash.get(mapOptions, ['grids']) || {};
      if (surperMap) {
        if (sourceGeojson && !lodash.isEmpty(sourceGeojson)) {
          this.privateUpdateSurperMapSource(GRIDS.SOURCE, sourceGeojson);
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };

  initMapHeatmap = () => {
    const { surperMap, mapOptions } = this;
    try {
      const sourceGeojson = lodash.get(mapOptions, ['heatmap']) || {};
      if (surperMap) {
        if (sourceGeojson && !lodash.isEmpty(sourceGeojson)) {
          console.error('initMapHeatmap');
          this.privateInitSurperMapSource(HEATMAP.SOURCE);
          this.privateInitSurperMapLayer(HEATMAP.HEAT_LAYER, {
            id: HEATMAP.HEAT_LAYER,
            type: 'heatmap',
            source: HEATMAP.SOURCE,
            maxzoom: 9,
            paint: {
              // 根据频率和属性大小增加热力图权重
              'heatmap-weight': ['interpolate', ['linear'], ['get', 'mag'], 0, 0, 6, 1],
              // 根据缩放级别增加热力图权重
              'heatmap-intensity': ['interpolate', ['linear'], ['zoom'], 0, 1, 9, 3],
              // 色带
              'heatmap-color': [
                'interpolate',
                ['linear'],
                ['heatmap-density'],
                0,
                'rgba(33,102,172,0)',
                0.2,
                'rgb(103,169,207)',
                0.4,
                'rgb(209,229,240)',
                0.6,
                'rgb(253,219,199)',
                0.8,
                'rgb(239,138,98)',
                1,
                'rgb(178,24,43)',
              ],
              // 根据缩放级别调整热力图半径
              'heatmap-radius': ['interpolate', ['linear'], ['zoom'], 0, 2, 10, 20],
              // 透明度
              'heatmap-opacity': ['interpolate', ['linear'], ['zoom'], 7, 1, 9, 0],
            },
          });
          this.privateInitSurperMapLayer(HEATMAP.POINT_LAYER, {
            id: HEATMAP.POINT_LAYER,
            type: 'circle',
            source: HEATMAP.SOURCE,
            minzoom: 7,
            paint: {
              // Size circle radius by earthquake magnitude and zoom level
              'circle-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                7,
                ['interpolate', ['linear'], ['get', 'mag'], 1, 1, 6, 4],
                16,
                ['interpolate', ['linear'], ['get', 'mag'], 1, 5, 6, 50],
              ],
              // Color circle by earthquake magnitude
              'circle-color': [
                'interpolate',
                ['linear'],
                ['get', 'mag'],
                1,
                'rgba(33,102,172,0)',
                2,
                'rgb(103,169,207)',
                3,
                'rgb(209,229,240)',
                4,
                'rgb(253,219,199)',
                5,
                'rgb(239,138,98)',
                6,
                'rgb(178,24,43)',
              ],
              'circle-stroke-color': 'white',
              'circle-stroke-width': 1,
              // Transition from heatmap to circle layer by zoom level
              'circle-opacity': ['interpolate', ['linear'], ['zoom'], 7, 0, 8, 1],
            },
          });
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };
  updateMapHeatmap = () => {
    const { surperMap, mapOptions } = this;
    try {
      const sourceGeojson = lodash.get(mapOptions, ['heatmap']) || {};
      if (surperMap) {
        if (sourceGeojson && !lodash.isEmpty(sourceGeojson)) {
          console.error('updateMapHeatmap');
          this.privateUpdateSurperMapSource(HEATMAP.SOURCE, sourceGeojson);
        }
      }
    } catch (error) {
      console.warn(error);
    }
  };
}
