'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-c2843d9b.js');

const defineCustomElements = (win, options) => {
  return core.patchEsm().then(() => {
    core.bootstrapLazy([["site-navigation.cjs",[[1,"site-navigation",{"brand":[1],"links":[8],"navigateTo":[16]}]]]], options);
  });
};

exports.defineCustomElements = defineCustomElements;
