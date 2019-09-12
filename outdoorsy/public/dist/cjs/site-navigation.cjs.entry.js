'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const core = require('./core-c2843d9b.js');

const SiteNavigation = class {
    constructor(hostRef) {
        core.registerInstance(this, hostRef);
    }
    onclick(event, url) {
        if (this.navigateTo) {
            event.preventDefault();
            this.navigateTo(url);
        }
    }
    ;
    linksObject() {
        if (typeof this.links === 'string') {
            return JSON.parse(this.links);
        }
        else {
            return this.links;
        }
    }
    render() {
        let navItems = this.linksObject().map((link) => core.h("li", null, core.h("a", { href: link.url, onClick: (event) => this.onclick(event, link.url) }, link.label)));
        return core.h("div", { class: "site-navigation" }, core.h("ul", null, core.h("li", null, core.h("a", { href: "/", onClick: (event) => this.onclick(event, "/") }, this.brand)), navItems));
    }
    static get style() { return ".site-navigation{border-bottom:1px solid rgba(0,0,0,.2);padding:1rem}"; }
};

exports.site_navigation = SiteNavigation;
