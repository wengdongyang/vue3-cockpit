/** @format */
import * as lodash from 'lodash';
import * as mapboxgl from 'mapbox-gl';
// apis
// hooks
// utils
// types
import type { Map, MapboxOptions } from 'mapbox-gl';
// stores
// mixins
// configs
import { ENV } from '@src/configs';
// components

interface IMapOptions {
  mapboxglOptions: MapboxOptions;
}

interface IProps {
  container: HTMLDivElement;
  mapOptions?: IMapOptions;
}

export class SurperMapboxGl {
  public surperMap?: Map;

  public container?: HTMLDivElement;

  public mapOptions?: IMapOptions;

  constructor({ container, mapOptions }: IProps) {
    this.container = container;
    this.mapOptions = mapOptions;
    console.info(ENV);
  }

  private privateInitSurperMap = () => {};

  private privateInitSurperMapIcon = () => {};
  private privateUpdateSurperMapIcon = () => {};
  private privateResetSurperMapIcon = () => {};
  private privateRemoveSurperMapIcon = () => {};

  private privateInitSurperMapLayer = () => {};
  private privateUpdateSurperMapLayer = () => {};
  private privateResetSurperMapLayer = () => {};
  private privateRemoveSurperMapLayer = () => {};

  private privateInitSurperMapSource = () => {};
  private privateUpdateSurperMapSource = () => {};
  private privateResetSurperMapSource = () => {};
  private privateRemoveSurperMapSource = () => {};

  private privateSurperMapClick = () => {};

  initMap = () => {
    const { container, mapOptions } = this;
    try {
      if (container) {
        const mapboxglOptions = lodash.get(mapOptions, ['mapboxglOptions']) || {};
        const surperMap = new mapboxgl.Map(Object.assign({ container }, mapboxglOptions));
        this.surperMap = surperMap;
      }
    } catch (error) {
      console.warn(error);
    }
  };
}
