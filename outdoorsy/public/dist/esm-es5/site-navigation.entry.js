import { r as registerInstance, h } from './core-ac4fe1da.js';
var SiteNavigation = /** @class */ (function () {
    function SiteNavigation(hostRef) {
        registerInstance(this, hostRef);
    }
    SiteNavigation.prototype.onclick = function (event, url) {
        if (this.navigateTo) {
            event.preventDefault();
            this.navigateTo(url);
        }
    };
    ;
    SiteNavigation.prototype.linksObject = function () {
        if (typeof this.links === 'string') {
            return JSON.parse(this.links);
        }
        else {
            return this.links;
        }
    };
    SiteNavigation.prototype.render = function () {
        var _this = this;
        var navItems = this.linksObject().map(function (link) { return h("li", null, h("a", { href: link.url, onClick: function (event) { return _this.onclick(event, link.url); } }, link.label)); });
        return h("div", { class: "site-navigation" }, h("ul", null, h("li", null, h("a", { href: "/", onClick: function (event) { return _this.onclick(event, "/"); } }, this.brand)), navItems));
    };
    Object.defineProperty(SiteNavigation, "style", {
        get: function () { return ".site-navigation{border-bottom:1px solid rgba(0,0,0,.2);padding:1rem}"; },
        enumerable: true,
        configurable: true
    });
    return SiteNavigation;
}());
export { SiteNavigation as site_navigation };
