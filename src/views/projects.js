import m from 'mithril';
import '../css/projects.scss';
import projects from '../projects.json';
import { LinkList } from './icon-button';

for (let i = 0; i < projects.length-1; i++) {
  for (let project of projects[i]) {
    const imgName = project.title.replace(/ /g, '-');
    project.thumbnail = require(`../imgs/project_thumbnails/${imgName}.jpg`);
  }
}

console.log(projects);

class ProjectView {

  constructor(vnode) {
    this.languages = {};

    vnode.attrs.languages.forEach(lang => {
      this.languages[lang] = 'javascript:void(0);';
    });
  }

  view(vnode) {
    return m('div.project-view', {
      id: vnode.attrs.title.replace(/ /g, '-'),
    }, m('div.project-content', [

      m('div.project-title', 
        m('a', { href: Object.values(vnode.attrs.links)[0] }, vnode.attrs.title),
        m(LinkList, { links: vnode.attrs.links }),
      ),

      m('img.project-thumbnail', {
        src: vnode.attrs.thumbnail,
        onclick: e => {
          vnode.dom.querySelector('a').click();
        }
      }),

      m('div.language-list', 
        m(LinkList, {
          links: this.languages,
          type: 'languages',
          stayOnPage: true,
          includeTitle: true,
        })
      ),

      m('p.project-description', vnode.attrs.description || 'Commodo esse eu ut eu voluptate culpa est aliqua.'),

    ]))

  }
}

const Projects = {
  view(vnode) {
    return m('div.projects-page', m('div.project-list', 
      projects
        .slice(0, -1)
        .reduce((a, b) => a.concat(b))
        .map(proj => m(ProjectView, proj))
    ))
  }
}

export default Projects;
