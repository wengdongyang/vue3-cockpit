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

export default class SurperMapboxGl {
  public surperMap?: Map;

  public container?: HTMLDivElement;

  public mapOptions?: IMapOptions;

  constructor({ container, mapOptions }: IProps) {
    this.container = container;
    this.mapOptions = mapOptions;

    this.initMapStyle();
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
  privateUpdateSurperMapLayer = (LAYER_ID: string, name: string, value: any) => {
    const { surperMap } = this;
    try {
      if (surperMap) {
        surperMap.setLayoutProperty(LAYER_ID, name, value);
      }
    } catch (error) {
      console.warn(error);
    }
  };
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

  initMapStyle = () => {
    const { container, mapOptions } = this;
    try {
      if (container) {
        mapboxgl.accessToken = ENV.TOKEN_MAPBOX_GL;
        const mapboxglOptions = lodash.get(mapOptions, ['mapboxglOptions']) || {};
        const surperMap = new mapboxgl.Map(Object.assign({ container }, mapboxglOptions));

        surperMap.on('style.load', () => {
          this.surperMapStyleLoadCallback();
        });

        surperMap.on('click', (e) => {
          console.info(e);
        });
        this.surperMap = surperMap;
      }
    } catch (error) {
      console.warn(error);
    }
  };

  updateMapStyle = (layerId: string, name: string, value: any) => {
    const { surperMap } = this;
    try {
      if (surperMap) {
        surperMap.setLayoutProperty(layerId, name, value);
      }
    } catch (error) {
      console.warn(error);
    }
  };

  surperMapStyleLoadCallback = () => {};
}
