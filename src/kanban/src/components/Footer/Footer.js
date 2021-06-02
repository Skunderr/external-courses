import DomElement from '../DomElements/DomElement';
import css from './footer.module.css';
export class Footer {
  constructor() {
    this.element = new DomElement({
      type: 'footer',
      className: css.footer,
      html: `
        <div class="${css.footer__tasks}">
          <div class="${css.footer__active_task}">Active tasks: 0</div>
          <div>Finished tasks: 0</div>
        </div>
        <div class="${css.footer__information}">Kanban board by Nikolai Gogin, 2021</div>
      `
    }).element
  }
}