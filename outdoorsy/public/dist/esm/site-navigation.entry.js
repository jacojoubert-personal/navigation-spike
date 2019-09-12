import { r as registerInstance, h } from './core-ac4fe1da.js';

const SiteNavigation = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
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
        let navItems = this.linksObject().map((link) => h("li", null, h("a", { href: link.url, onClick: (event) => this.onclick(event, link.url) }, link.label)));
        return h("div", { class: "site-navigation" }, h("ul", null, h("li", null, h("a", { href: "/", onClick: (event) => this.onclick(event, "/") }, this.brand)), navItems));
    }
    static get style() { return ".site-navigation{border-bottom:1px solid rgba(0,0,0,.2);padding:1rem}"; }
};

export { SiteNavigation as site_navigation };
