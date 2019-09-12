'use strict';

const core = require('./core-c2843d9b.js');

core.patchBrowser().then(options => {
  return core.bootstrapLazy([["site-navigation.cjs",[[1,"site-navigation",{"brand":[1],"links":[8],"navigateTo":[16]}]]]], options);
});
