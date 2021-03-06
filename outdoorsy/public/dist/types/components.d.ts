/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from './stencil.core';


export namespace Components {
  interface SiteNavigation {
    'brand': string;
    'links': any;
    'navigateTo': Function;
  }
}

declare global {


  interface HTMLSiteNavigationElement extends Components.SiteNavigation, HTMLStencilElement {}
  var HTMLSiteNavigationElement: {
    prototype: HTMLSiteNavigationElement;
    new (): HTMLSiteNavigationElement;
  };
  interface HTMLElementTagNameMap {
    'site-navigation': HTMLSiteNavigationElement;
  }
}

declare namespace LocalJSX {
  interface SiteNavigation extends JSXBase.HTMLAttributes<HTMLSiteNavigationElement> {
    'brand'?: string;
    'links'?: any;
    'navigateTo'?: Function;
  }

  interface IntrinsicElements {
    'site-navigation': SiteNavigation;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


