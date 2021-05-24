import DomElement from '../DomElement/DomElement';
import css from './header.module.css';
import * as img from '../../images/header';

const addList = 'add-list';
const arrowDown = 'arrow-down';
const userAvatar = 'user-avatar';

export class Header {
    constructor() {
        this.element = new DomElement({
            type: "header",
            className: css.header,
            html: `
            <header class="${css.header}">
                <div class="${css.header__title-wrapper}">
                    <div class="${css.header__main-list}">
                        <div class="${css.main-listr__wrapper}">
                            <div class="${css.main-list__string}">
                                <div class="${css.main-list__circle}"></div>
                                <div class="${css.main-list__line}"></div>
                            </div>
                            <div class="${css.main-list__string}">
                                <div class="${css.main-list__circle}"></div>
                                <div class="${css.main-list__line}"></div>
                            </div>
                            <div class="${css.main-list__string}">
                                <div class="${css.main-list__circle}"></div>
                                <div class="${css.main-list__line}"></div>
                            </div>
                        </div>
                    </div>
                    <h1 class="${css.header__title}">awesome kanban board</h1>
                </div>
                <div class="${css.header__button-wrapper}">
                    <button class="${css.header__create-button}">
                        <img src="${img[addList]}" alt="#" class="${css.header__add-img}">
                        Create new list
                    </button>
                    <div class="${css.header__user-list}">
                        <img src="${img[userAvatar]}" alt="#" class="${css.header__user-img}">
                        <img src="${img[arrowDown]}" alt="#" class="${css.header__user-arrow}">
                    </div> 
                </div>
            </header>
            `,
        }).element;
    }
}