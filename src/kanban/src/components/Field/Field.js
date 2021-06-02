import DomElement from '../DomElements/DomElement';
import css from './field.module.css';
import img from '../../images/points.png';
import { addDropdown } from '../events/dropdown';

export class Field {
    constructor() {
        this.element = new DomElement({
            className: css.kanban_board,
            html:`
            <div id="backlogBoard" class="${css.kanban_board__tasks} ${css.kanban_board__backlog}">
                <div class="${css.kanban_board__main}">
                    <h2 class="${css.kanban_board__title}">Backlog</h2>
                    <div class="${css.kanban_board__main_list}">
                        <a href="#" class="${css.kanban_board__main_link}">
                            <img src="${img}" alt="#" class="${css.kanban_board__main_img}">
                        </a>
                    </div>
                </div>
                <div id="backlogField" class="${css.kanban_board__field}">
                
                </div>
                <button id="backlogButton" class="${css.kanban_board__add}">
                    <span class="${css.btnPlus}">+</span> 
                    Add card
                </button>
            </div>
            <div id="readyBoard" class="${css.kanban_board__tasks} ">
                <div class="${css.kanban_board__main}">
                    <h2 class="${css.kanban_board__title}">Ready</h2>
                    <div class="${css.kanban_board__main_list}">
                        <a href="#" class="${css.kanban_board__main_link}">
                            <img src="${img}" alt="#" class="${css.kanban_board__main_img}">
                        </a>
                    </div>
                </div>
                <div id="readyField" class="${css.kanban_board__field}">
                
                </div>
                <button id="readyButton" class="${css.kanban_board__add}">
                    <span class="${css.btnPlus}">+</span> 
                    Add card
                </button>
            </div>
        <div id="inprogressBoard" class="${css.kanban_board__tasks} ">
            <div class="${css.kanban_board__main}">
                <h2 class="${css.kanban_board__title}">In progress</h2>
                <div class="${css.kanban_board__main_list}">
                    <a href="#" class="${css.kanban_board__main_link}">
                        <img src="${img}" alt="#" class="${css.kanban_board__main_img}">
                    </a>
                </div>
            </div>
            <div id="inprogressField" class="${css.kanban_board__field}">
            
            </div>
            <button id="inprogressButton" class="${css.kanban_board__add}">
                <span class="${css.btnPlus}">+</span> 
                Add card
            </button>
        </div>
        <div id="finishedBoard" class="${css.kanban_board__tasks}">
            <div class="${css.kanban_board__main}">
                <h2 class="${css.kanban_board__title}">Finished</h2>
                <div class="${css.kanban_board__main_list}">
                    <a href="#" class="${css.kanban_board__main_link}">
                        <img src="${img}" alt="#" class="${css.kanban_board__main_img}">
                    </a>
                </div>
            </div>
            <div id="finishedField" class="${css.kanban_board__field}">
            
            </div>
            <button id="finishedButton" class="${css.kanban_board__add}">
                <span class="${css.btnPlus}">+</span> 
                Add card
            </button>
        </div>
        `,
        }).element;
    }
}