import DomElement from '../../DomElement/DomElement';
import css from '../board.module.css';
import img from '../../../images/header';

const points = 'points';

export class Ready {
    constructor() {
        this.element = new DomElement({
            type: "ready",
            className: css.board,
            html: `
            <div class="${css.kanban-board__tasks} ${css.kanban-board__backlog}">
                <div class="${css.kanban-board__main}">
                    <h2 class="${css.kanban-board__title}">Ready</h2>
                    <div class="${css.kanban-board__main-list}">
                        <a href="#" class="${css.kanban-board__main-link}">
                            <img src="${img[points]}" alt="#" class="${css.kanban-board__main-img}">
                        </a>
                    </div>
                </div>
                <div id="readyField" class="${css.kanban-board__field}">
                
                </div>
                <button id="readyButton" class="${css.kanban-board__add}">
                    <span class="${css.btnPlus}">+</span> 
                    Add card
                </button>
            </div>
            `,
        }).element;
    }
}