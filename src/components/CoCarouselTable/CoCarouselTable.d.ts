/** @format */
import type { ColumnType } from 'ant-design-vue/es/table/index.d';
// apis
// hooks
// utils
// types
// stores
// mixins
// configs
// components
export interface IColumn extends ColumnType {
  type: 'custom' | 'input' | sting;
}

export interface IDataSource {
  [key: string]: any;
}
