import { h } from "@stencil/core";
export class SiteNavigation {
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
        let navItems = this.linksObject().map((link) => h("li", null,
            h("a", { href: link.url, onClick: (event) => this.onclick(event, link.url) }, link.label)));
        return h("div", { class: "site-navigation" },
            h("ul", null,
                h("li", null,
                    h("a", { href: "/", onClick: (event) => this.onclick(event, "/") }, this.brand)),
                navItems));
    }
    static get is() { return "site-navigation"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["site-navigation.css"]
    }; }
    static get styleUrls() { return {
        "$": ["site-navigation.css"]
    }; }
    static get properties() { return {
        "brand": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "brand",
            "reflect": false
        },
        "links": {
            "type": "any",
            "mutable": false,
            "complexType": {
                "original": "any",
                "resolved": "any",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "links",
            "reflect": false
        },
        "navigateTo": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Function",
                "resolved": "Function",
                "references": {
                    "Function": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            }
        }
    }; }
}
