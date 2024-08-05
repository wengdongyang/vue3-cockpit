/** @format */

/// <reference types="vite/client" />

declare module '*.less' {
  const classes: { readonly [key: string]: any };
  export default classes;
}
declare module '*.module.less' {
  const classes: { readonly [key: string]: any };
  export default classes;
}

declare module '*.vue';
