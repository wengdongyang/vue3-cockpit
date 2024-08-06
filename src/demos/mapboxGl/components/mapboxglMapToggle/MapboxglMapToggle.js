/** @format */
import * as lodash from 'lodash';
// apis
// hooks
// utils
// types
// stores
// mixins
// configs
// components
import SurperMapboxGl from '../../SurperMapboxGl.ts';

const GRIDS = {
  SOURCE: 'GRIDS_SOURCE',
  AREA_LAYER: 'GRIDS_AREA_LAYER',
  LINE_LAYER: 'GRIDS_LINE_LAYER',
  TEXT_LAYER: 'GRIDS_TEXT_LAYER',
};

export default class SurperMapboxglMapToggle extends SurperMapboxGl {
  constructor(props) {
    super(props);
  }

  surperMapStyleLoadCallback = () => {
    this.initMapStyleArea();
    this.updateMapArea();
  };

  initMapStyleArea = () => {
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
              'text-field': ['get', 'name'],
              'text-anchor': 'center',
              'text-size': 12,
              'text-offset': [0, -0],
            },
            paint: {
              'text-color': 'rgba(45, 45, 45, 1)',
              'text-halo-color': 'rgba(255, 255, 255, 1)',
              'text-halo-width': 2,
            },
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
}
