import { a as patchEsm, b as bootstrapLazy } from './core-ac4fe1da.js';
var defineCustomElements = function (win, options) {
    return patchEsm().then(function () {
        bootstrapLazy([["site-navigation", [[1, "site-navigation", { "brand": [1], "links": [8], "navigateTo": [16] }]]]], options);
    });
};
export { defineCustomElements };
