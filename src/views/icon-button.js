import m from 'mithril';

import { icons } from './icons';

import '../css/icon-button.scss';

const LinkList = {
  view(vnode) {
    return m('div.tool-links-container', Object.entries(vnode.attrs.links)
      .filter(([icon, _]) => icon !== "none")
      .map(([linkIcon, url]) => 
        m('a.tool-link', { 
          href: url, 
          target: vnode.attrs.stayOnPage ? '' : '_blank',
          title: vnode.attrs.includeTitle ? linkIcon : '',
          onclick: e => { e.stopPropagation(); }
        }, icons[vnode.attrs.type || 'links'][linkIcon])
      )
    );
  }
}

class IconButton {
  constructor(vnode) {
    this.title = vnode.attrs.title;
    this.links = vnode.attrs.links;
  }

  oncreate(vnode) {
    if (!vnode.attrs.short_title) return;

    this.longWidth = vnode.dom.getBoundingClientRect().width;
    this.shortWidth = this.longWidth;

    window.addEventListener('resize', () => this.sizeText(vnode));
    this.sizeText(vnode);
  }

  sizeText(vnode) {
    const windowWidth = window.innerWidth;

    if (this.title === vnode.attrs.short_title)
      this.shortWidth = vnode.dom.getBoundingClientRect().width;

    let prevTitle = this.title;

    if (this.longWidth > windowWidth * 1/3)
      this.title = vnode.attrs.short_title;
    else
      this.title = vnode.attrs.title;

    console.log(prevTitle, this.title);

    if (this.title !== prevTitle) m.redraw();

    console.log(this.links)
  }

  shortenText(text) {
    const MAX_WORDS = 10;
    
    return text.split(' ').slice(0, MAX_WORDS).join(' ');
  }

  view(vnode) {
    return m('div', { 
      class: `tool-container ${this.title === vnode.attrs.title ? "" : "title-shortened"}`, 
      style: { display: vnode.attrs.hidden ? 'none' : 'flex' },
      onclick: e => { 
        window.location.href = Object.values(this.links)[0]; 
      },
      onmouseenter: e => {
        this.title = vnode.attrs.title;
      },
      onmouseleave: e => {
        this.sizeText(vnode);
      }
    }, 
      m('div.tool-main', [
        m('div', { class: 'tool' }, icons[vnode.attrs.icon]),
        m('div', { class: 'tool-title' }, this.title),
      ]),

      m('div', {
        className: `tool-dropdown ${this.links['none'] ? 'hidden' : ''}`
      }, [
        m('div.tool-description', [
          this.shortenText(vnode.attrs.description || "Sit magna veniam qui aliqua exercitation mollit commodo excepteur."),
          m('a', {
            href: `/#!/projects#${vnode.attrs.title.replace(/ /g, '-')}`,
            onclick: e => { e.stopPropagation(); },
          }, '...read more'),
        ]),
        m(LinkList, { links: this.links }),
      ])
    );
  }
};

export { IconButton, LinkList };