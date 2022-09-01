import m from 'mithril';
import { IconButton } from './icon-button';
import { icons } from './icons';
import projects from '../projects.json';

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

              m(TypeText, {text: `<br><br>Welcome to my website!<br><br>I'm an independent developer going to Texas A&M university.<br><br>Refer to the panels on the <b>left</b> to check out some of the projects I've worked on or the buttons on the <b>right</b> to connect to my socials.<br><br>- Full Stack Web Development<br>- Game Development<br>- Machine Learning`}), ])
          ),
        ),
        m('div.boat-neck'),
        m('div.boat-body'),
      ]),
    ]);
  }
}

const SocialIcon = {
  view(vnode) {
    return m('a.social-container', {
      href: vnode.attrs.href,
      target: '_blank',
    },
      icons.socials[vnode.attrs.icon]
    );
  }
}

const socials = [
  {
    icon: 'instagram',
    href: 'https://www.instagram.com/suryajasper/',
  },
  {
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/surya-jasper-20b678194/',
  },
  {
    icon: 'github',
    href: 'https://www.github.com/suryajasper/',
  },
];

export default function LandingPage() {
  return {
    view(vnode) {
      return [
        m('div.header'),

        m('div.main-page', [
          m('div.top-section', 
            m('div.toolbar', projects.map(group => [
              group.map(proj =>
                m(IconButton, proj)
              ),
              m('div.spacer'),
            ])),

            m('div.social-group', socials.map(social => 
              m(SocialIcon, social)
            )),

            m(WaveAnimation),
          ),
          m('div.bottom-section'),

        ])
      ];
    }
  }
}