import m from 'mithril';

const WaveAnimation = {
  view(vnode) {
    return m('div.wave-animation-container', [
      [1, 2, 3].map(num => 
        m('div', {className: `wave wave-${num}`})
      ),
      m('div.info-boat', [
        m('div.boat-sail'),
        m('div.boat-neck'),
        m('div.boat-body'),
      ]),
    ]);
  }
}

export default function LandingPage() {
  return {
    view(vnode) {
      return m('div.main-page', [
        m('div.top-section', 
          

          m(WaveAnimation),
        ),
        m('div.bottom-section'),

      ])
    }
  }
}