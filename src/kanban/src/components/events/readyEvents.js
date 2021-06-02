import './base.js';
import '../Field/field.module.css'

export const createListTaskReady = () => {
    readyAddCard.addEventListener('click', addTaskReady = () => {
        const ulElement = document.querySelector('#readyItems');

        if (ulElement === null) {
            const readyContainer = document.createElement('div');
            readyContainer.classList.add('ready-list');
            readyContainer.setAttribute('id', 'readyList');
            readyTasksField.appendChild(readyContainer);

            const readyUl = document.createElement('ul');
            readyUl.classList.add('ready-items');
            readyUl.setAttribute('id', 'readyItems');
            readyContainer.appendChild(readyUl);

            dataValues.forEach(elem => {
                const readyLi = document.createElement('li');
                readyLi.classList.add('ready-item');
                readyLi.setAttribute('id', `point-${dataValues.indexOf(elem)+1}`);
                readyLi.innerHTML = elem;
                readyUl.appendChild(readyLi);
            });
        }
    });
}

export const addTaskReady = () => {
    readyTasksField.addEventListener("click", function (e) {
        const selectedReady = e.target;

        document.querySelector('#readyList').remove();

        const ul = document.createElement('ul');
        ul.setAttribute('id', 'ulInReady');
        ul.classList.add('kanban_ready-Ul');
        readyTasksField.appendChild(ul);
        ul.appendChild(selectedReady);

        dataValues.forEach(elem => {
            if(selectedReady.innerHTML == elem) {
                dataValues.splice(dataValues.lastIndexOf(elem), 1);
            }
        });

        const input = document.querySelectorAll('.kanban-board__input');
        input.forEach(elem => {
            if (selectedReady.innerHTML == elem.value) {
                elem.parentElement.parentElement.remove();

                dataBacklog.forEach(item => {
                    if (item.includes(`value="${elem.value}"`)) {
                        dataBacklog.splice(dataBacklog.indexOf(item), 1);
                    }
                });
            }
        });

        dataReady.push(selectedReady.textContent);

        disableBtn(dataValues, readyAddCard, 'readyButtonText');

        includeBtn(dataReady, inprogressAddCard, 'inprogressButtonText');

        localStorage.setItem('inputElement', JSON.stringify(dataBacklog));
        localStorage.setItem('readyElement', JSON.stringify(dataReady));
        localStorage.setItem('dataValues', JSON.stringify(dataValues));
    });
}
