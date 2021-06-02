import DomElement from '../DomElements/DomElement';
import css from './header.module.css';
import img1 from '../../images/header/add-list.png';
import img2 from '../../images/header/arrow-down.png';
import img3 from '../../images/header/user-avatar.png';

export class Header {
    constructor() {
        this.element = new DomElement({
            type: "header",
            className: css.header,
            html: `
                <div class="${css.header__title_wrapper}">
                    <div class="${css.header__main_list}">
                        <div class="${css.main_list__wrapper}">
                            <div class="${css.main_list__string}">
                                <div class="${css.main_list__circle}"></div>
                                <div class="${css.main_list__line}"></div>
                            </div>
                            <div class="${css.main_list__string}">
                                <div class="${css.main_list__circle}"></div>
                                <div class="${css.main_list__line}"></div>
                            </div>
                            <div class="${css.main_list__string}">
                                <div class="${css.main_list__circle}"></div>
                                <div class="${css.main_list__line}"></div>
                            </div>
                        </div>
                    </div>
                    <h1 class="${css.header__title}">awesome kanban board</h1>
                </div>
                <div class="${css.header__button_wrapper}">
                    <button class="${css.header__create_button}">
                        <img src="${img1}" alt="#" class="${css.header__add_img}">
                        Create new list
                    </button>
                    <div id="headerUserList" class="${css.header__user_list}">
                        <img id="headerUseImg" src="${img3}" alt="#" class="${css.header__user_img}">
                        <img id="headerUseArrow" src="${img2}" alt="#" class="${css.header__user_arrow}">
                    </div> 
                </div>
            `,
        }).element;
    }
}