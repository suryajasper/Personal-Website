import m from 'mithril';
import './css/main.scss';
import LandingPage from './views/landing-page';
import Projects from './views/projects';

m.route(document.body, '/', {
  '/': LandingPage,
  '/projects': Projects,
})