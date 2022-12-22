import m from 'mithril';
import KeystrokeListener from '../utils/keystroke-listener';

const secretRouting = {
}

export default class SecretConsole {
  constructor(vnode) {
    this.active = false;
    this.KSL = new KeystrokeListener(window);
  }

  oninit(vnode) {
    this.KSL.addListener(
      ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a', 'Enter'],
      () => {
        this.active = !this.active;
        m.redraw();
      }
    )
  }

  view(vnode) {
    return m('div.secret-console', {style: {display: this.active ? 'block' : 'none'}}, [
      m('input.console-in', {
        type: 'text',
        placeholder: '/hello_world',
        onkeydown: e => {
          if (e.key == 'Enter') {
            let route = secretRouting[e.target.value];
            if (route) window.location.href = route;
          } else if (e.key == 'Escape') {
            this.active = false;
          }
        }
      }),
    ]);
  }
}