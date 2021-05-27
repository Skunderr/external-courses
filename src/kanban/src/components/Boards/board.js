import DomElement from '../DomElement/DomElement';
import { css } from './board.module.css';
import img from '../../images/header/points.png';

export class Board {
    constructor(title, subId) {
        this.element = new DomElement({
            type: 'board',
            className: css.board,
            html: `
            <div class="${css.kanban_board__tasks} ${css.kanban_board__backlog}">
                <div class="${css.kanban_board__main}">
                    <h2 class="${css.kanban_board__title}">${title}</h2>
                    <div class="${css.kanban_board__main-list}">
                        <a href="#" class="${css.kanban_board__main-link}">
                            <img src="${img}" alt="#" class="${css.kanban_board__main-img}">
                        </a>
                    </div>
                </div>
                <div id="${subId}Field" class="${css.kanban_board__field}">
                
                </div>
                <button id="${subId}Button" class="${css.kanban_board__add}">
                    <span class="${css.btnPlus}">+</span> 
                    Add card
                </button>
            </div>
            `,
        }).element;
    }
}