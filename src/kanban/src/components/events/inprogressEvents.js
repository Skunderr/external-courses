import base from './base.js';

export const createListTaskInprogress = () => {
    base.inprogressAddCard.addEventListener('click', () => {
        const ulElement = document.querySelector('#inprogressItems');
    
        if (ulElement === null) {
            const inprogressContainer = document.createElement('div');
            inprogressContainer.classList.add('ready-list');
            inprogressContainer.setAttribute('id', 'inprogressList');
            base.inprogressTasksField.appendChild(inprogressContainer);
    
            const inprogressUl = document.createElement('ul');
            inprogressUl.classList.add('ready-items');
            inprogressUl.setAttribute('id', 'inprogressItems');
            inprogressContainer.appendChild(inprogressUl);
    
            base.dataReady.forEach(elem => {
                const inprogressLi = document.createElement('li');
                inprogressLi.classList.add('ready-item');
                inprogressLi.innerHTML = elem;
                inprogressUl.appendChild(inprogressLi);
            });
        }
    });
}

export const addTaskInprogress = () => {
    base.inprogressTasksField.addEventListener('click', e => {
        const selectedInprogress = e.target;
    
        document.querySelector('#inprogressList').remove();
    
        const ulInprogress = document.querySelector('#ulInProgress')
        ulInprogress.appendChild(selectedInprogress);
    
        base.dataReady.forEach(elem => {
            if(selectedInprogress.innerHTML == elem) {
                base.dataReady.splice(base.dataReady.lastIndexOf(elem), 1);
            }
        });
    
        const readyUl = document.querySelector('#ulInReady');
        const childReady = readyUl.childNodes;
    
        childReady.forEach(elem => {
            if (selectedInprogress.innerHTML == elem.innerHTML) {
                elem.remove();
    
                base.dataReady.forEach(item => {
                    if (selectedInprogress.innerHTML == item) {
                        base.dataReady.splice(base.dataReady.indexOf(item), 1);
                    }
                });
            }
        });
        
        base.dataInprogress.push(selectedInprogress.textContent);
    
        disableBtn(base.dataReady, base.inprogressAddCard);
        enableButton(base.dataReady, base.inprogressAddCard);
        enableButton(base.dataInprogress, base.finishedAddCard);
    
        localStorage.setItem('inprogressElement', JSON.stringify(base.dataInprogress));
        localStorage.setItem('readyElement', JSON.stringify(base.dataReady));
    });
}



