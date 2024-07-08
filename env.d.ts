/** @format */

/// <reference types="vite/client" />

declare module 'qs';
declare module 'nprogress';
declare module '*.vue' {
  import { Component } from 'vue';
  const component: Component;
  export default component;
}
