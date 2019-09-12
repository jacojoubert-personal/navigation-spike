import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'site-navigation',
  styleUrl: 'site-navigation.css',
  shadow: false
})
export class SiteNavigation {
  @Prop() brand: string;
  @Prop() links: any;

  private linksObject() {
    if (typeof this.links === 'string') {
      return JSON.parse(this.links);
    } else {
      return this.links;
    }
  }

  render() {
    let navItems = this.linksObject().map((link) =>
      <li>
        <a href={link.url}>
          {link.label}
        </a>
      </li>
    );

    return <div class="site-navigation">
      <ul>
        <li><a href="/">{this.brand}</a></li>
        {navItems}
      </ul>
    </div>;
  }
}
