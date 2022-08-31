import m from 'mithril';

import { icons } from './icons';

import '../css/icon-button.scss';

class IconButton {
  constructor(vnode) {
    this.title = vnode.attrs.title;
  }

  oncreate(vnode) {
    if (!vnode.attrs.short_title) return;

    console.log(vnode);

    let longWidth = vnode.dom.getBoundingClientRect().width;
    let shortWidth = longWidth;

    window.addEventListener('resize', () => {
      const windowWidth = window.innerWidth;

      if (this.title === vnode.attrs.short_title)
        shortWidth = vnode.dom.getBoundingClientRect().width;

      let prevTitle = this.title;

      if (longWidth > windowWidth * 1/3)
        this.title = vnode.attrs.short_title;
      else
        this.title = vnode.attrs.title;

      console.log(prevTitle, this.title);

      if (this.title !== prevTitle) m.redraw();
    });
  }

  view(vnode) {
    return m('div', { 
      class: 'tool-container', 
      style: { display: vnode.attrs.hidden ? 'none' : 'flex' },
      onclick: e => { window.location.href = vnode.attrs.href; } 
    }, 
      m('div', { class: 'tool' }, icons[vnode.attrs.icon]),
      m('div', { class: 'tool-title' }, this.title),
    );
  }
};

export default IconButton;