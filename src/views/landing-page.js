import m from 'mithril';
import IconButton from './icon-button';

const TypeText = {
  view(vnode) {
    return m('span.type', {
      style: '--n:' + vnode.attrs.text.length,
    }, m.trust(vnode.attrs.text));
  }
}

const WaveAnimation = {
  view(vnode) {
    return m('div.wave-animation-container', [
      [1, 2, 3].map(num => 
        m('div', {className: `wave wave-${num}`})
      ),
      m('div.info-boat', [
        m('div.boat-sail', 
          m('div.computer-screen', 
            m('div.screen-content', [
              m('span.center-text.title-text', 'Surya Jasper'),

              m(TypeText, {text: `<br><br>Welcome to my website!<br><br>I'm an independent developer going to Texas A&M university.<br><br>Check out the panels on the <b>left</b> and <b>right</b> to check out some of the projects I've worked on.<br><br>- Full Stack Web Development<br>- Game Development<br>- Machine Learning`}), ])
          ),
        ),
        m('div.boat-neck'),
        m('div.boat-body'),
      ]),
    ]);
  }
}

const projects = [
  [
    {
      title: "Image Mosaic Generator",
      short_title: "IMG Mosaic",

      icon: "gear",
      href: "http://suryajasper.com:8812/",
    },
    {
      title: "Food Bank Smart Routes",
      short_title: "Food Bank",

      icon: "upload",
      href: "http://suryajasper.com:5555/",
    },
    {
      title: "Noteverse",

      icon: "upload",
      href: "https://github.com/suryajasper/NoteVerse",
    },
    {
      title: "Advanced Dieting",
      short_title: "Smart Diet",

      icon: "spotify",
      href: "https://github.com/suryajasper/Advanced-Dieting",
    },
  ],
  [
    {
      title: "Video Classifier for Frame Interpolation",
      short_title: "Frame Interp",

      icon: "gear",
      href: "http://suryajasper.com:8812/",
    },
    {
      title: "Depth-based Visual Prosthesis",
      short_title: "Bionic Vision",

      icon: "upload",
      href: "http://suryajasper.com:5555/",
    },
  ],
]

export default function LandingPage() {
  return {
    view(vnode) {
      return m('div.main-page', [
        m('div.top-section', 
          m('div.toolbar.left', projects.map(group => [
            group.map(proj =>
              m(IconButton, proj)
            ),
            m('div.spacer'),
          ])),

          m(WaveAnimation),
        ),
        m('div.bottom-section'),

      ])
    }
  }
}