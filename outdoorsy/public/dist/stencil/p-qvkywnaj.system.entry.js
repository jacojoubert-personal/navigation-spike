System.register(["./p-dcaf345d.system.js"],(function(t){"use strict";var n,e;return{setters:[function(t){n=t.r;e=t.h}],execute:function(){var i=t("site_navigation",function(){function t(t){n(this,t)}t.prototype.onclick=function(t,n){if(this.navigateTo){t.preventDefault();this.navigateTo(n)}};t.prototype.linksObject=function(){if(typeof this.links==="string"){return JSON.parse(this.links)}else{return this.links}};t.prototype.render=function(){var t=this;var n=this.linksObject().map((function(n){return e("li",null,e("a",{href:n.url,onClick:function(e){return t.onclick(e,n.url)}},n.label))}));return e("div",{class:"site-navigation"},e("ul",null,e("li",null,e("a",{href:"/",onClick:function(n){return t.onclick(n,"/")}},this.brand)),n))};Object.defineProperty(t,"style",{get:function(){return".site-navigation{border-bottom:1px solid rgba(0,0,0,.2);padding:1rem}"},enumerable:true,configurable:true});return t}())}}}));