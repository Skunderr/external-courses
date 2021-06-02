import './base.js';
import '../Field/field.module.css'

export const createListTaskInprogress = () => {
    inprogressAddCard.addEventListener('click', addTaskinprogress = () => {
    const ulElement = document.querySelector('#inprogressItems');

    if (ulElement === null) {
        const inprogressContainer = document.createElement('div');
            inprogressContainer.classList.add('ready-list');
            inprogressContainer.setAttribute('id', 'inprogressList');
            inprogressTasksField.appendChild(inprogressContainer);

            const inprogressUl = document.createElement('ul');
            inprogressUl.classList.add('ready-items');
            inprogressUl.setAttribute('id', 'inprogressItems');
            inprogressContainer.appendChild(inprogressUl);

            dataReady.forEach(elem => {
                const inprogressLi = document.createElement('li');
                inprogressLi.classList.add('ready-item');
                inprogressLi.innerHTML = elem;
                inprogressUl.appendChild(inprogressLi);
            });
        }
    });
}

export const addTaskInprogress = () => {
   inprogressTasksField.addEventListener("click", function (e) {
        const selectedInprogress = e.target;

        document.querySelector('#inprogressList').remove();

        const ul = document.createElement('ul')
        ul.setAttribute('id', 'ulInProgress')
        ul.classList.add('kanban_ready-Ul')
        inprogressTasksField.appendChild(ul);
        ul.appendChild(selectedInprogress);

        dataReady.forEach(elem => {
            if(selectedInprogress.innerHTML == elem) {
                dataReady.splice(dataReady.lastIndexOf(elem), 1);
            }
        });

        const readyUl = document.querySelector('#ulInReady');
        const childReady = readyUl.childNodes;

        childReady.forEach(elem => {
            if (selectedInprogress.innerHTML == elem.innerHTML) {
                elem.remove();

                dataReady.forEach(item => {
                    if (selectedInprogress.innerHTML == item) {
                        dataReady.splice(dataReady.indexOf(item), 1);
                    }
                });
            }
        });

        dataInprogress.push(selectedInprogress.textContent);

        disableBtn(dataReady, inprogressAddCard, 'inprogressButtonText');

        includeBtn(dataReady, inprogressAddCard, 'inprogressButtonText');

        includeBtn(dataInprogress, finishedAddCard, 'finishedButtonText');

        localStorage.setItem('inprogressElement', JSON.stringify(dataInprogress));
        localStorage.setItem('readyElement', JSON.stringify(dataReady));
    });
}



