/** @format */
import * as lodash from 'lodash';
import mapboxgl from 'mapbox-gl';
// apis
// hooks
// utils
// types
import type { Map, MapOptions, LayerSpecification, SourceSpecification } from 'mapbox-gl';
// stores
// mixins
// configs
import { ENV } from '@src/configs';
// components

interface IMapOptions {
  mapboxglOptions: MapOptions;
  grids?: SourceSpecification;
}

interface IProps {
  container: HTMLDivElement;
  mapOptions?: IMapOptions;
}

const GRIDS = {
  SOURCE: 'GRIDS_EXCLUSIVE_SOURCE',
  AREA_LAYER: 'GRIDS_EXCLUSIVE_AREA_LAYER',
  LINE_LAYER: 'GRIDS_EXCLUSIVE_LINE_LAYER',
  TEXT_LAYER: 'GRIDS_EXCLUSIVE_TEXT_LAYER',
};
export default class SurperMapboxGl {
  public surperMap?: Map;

  public container?: HTMLDivElement;

  public mapOptions?: IMapOptions;

  constructor({ container, mapOptions }: IProps) {
    this.container = container;
    this.mapOptions = mapOptions;

    this.initMap();
  }

  private privateInitSurperMap = () => {};

  private privateInitSurperMapIcon = () => {};
  private privateUpdateSurperMapIcon = () => {};
  private privateResetSurperMapIcon = () => {};
  private privateRemoveSurperMapIcon = () => {};

  private privateInitSurperMapLayer = (LAYER_ID: string, layerStyle: LayerSpecification) => {
    const { surperMap } = this;
    try {
      if (surperMap) {
        if (surperMap.getLayer(LAYER_ID)) {
          return;
        }
        surperMap.addLayer(Object.assign(layerStyle));
      }
    } catch (error) {
      console.warn(error);
    }
  };
  private privateUpdateSurperMapLayer = () => {};
  private privateResetSurperMapLayer = () => {};
  private privateRemoveSurperMapLayer = () => {};

  private privateInitSurperMapSource = (SOURCE_KEY: string) => {
    const { surperMap } = this;
    try {
      if (surperMap) {
        if (surperMap.getSource(SOURCE_KEY)) {
          return;
        }
        surperMap.addSource(SOURCE_KEY, {
          type: 'geojson',
          data: { type: 'FeatureCollection', features: [] },
        });
      }
    } catch (error) {
      console.warn(error);
    }
  };
  private privateUpdateSurperMapSource = (SOURCE_KEY: string, source: SourceSpecification) => {
    const { surperMap } = this;
    try {
      if (surperMap) {
        if (surperMap.getSource(SOURCE_KEY)) {
          // @ts-ignore
          surperMap.getSource(SOURCE_KEY)?.setData(source);
          return;
        }
        surperMap.addSource(SOURCE_KEY, source);
      }
    } catch (error) {
      console.warn(error);
    }
  };
  private privateResetSurperMapSource = () => {};
  private privateRemoveSurperMapSource = () => {};

  private privateSurperMapClick = () => {};

  initMap = () => {
    const { container, mapOptions } = this;
    try {
      if (container) {
        mapboxgl.accessToken = ENV.TOKEN_MAPBOX_GL;
        const mapboxglOptions = lodash.get(mapOptions, ['mapboxglOptions']) || {};
        const surperMap = new mapboxgl.Map(Object.assign({ container }, mapboxglOptions));

        surperMap.on('style.load', () => {
          this.surperMapStyleLoadCallback();
        });
        this.surperMap = surperMap;
      }
    } catch (error) {
      console.warn(error);
    }
  };

  surperMapStyleLoadCallback = () => {};
}
