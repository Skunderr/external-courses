import './base.js';

export const createListTaskReady = () => {
    base.readyAddCard.addEventListener('click', () => {
        if (base.ulElement === null) {
            const readyContainer = document.createElement('div');
            readyContainer.classList.add('ready-list');
            readyContainer.setAttribute('id', 'readyList');
            base.readyTasksField.appendChild(readyContainer);
    
            const readyUl = document.createElement('ul');
            readyUl.classList.add('ready-items');
            readyUl.setAttribute('id', 'readyItems');
            readyContainer.appendChild(readyUl);
    
            base.dataValues.forEach(elem => {
                const readyLi = document.createElement('li');
                readyLi.classList.add('ready-item');
                readyLi.setAttribute('id', `point-${base.dataValues.indexOf(elem)+1}`);
                readyLi.innerHTML = elem;
                readyUl.appendChild(readyLi);
            });
        }
    });
}

export const addTaskReady = () => {
    base.readyTasksField.addEventListener('click', e => {
        const selectedReady = e.target;
    
        document.querySelector('#readyList').remove();
    
        const ulReady = document.querySelector('#ulInReady');
        ulReady.appendChild(selectedReady);
    
        base.dataValues.forEach(elem => {
            if(selectedReady.innerHTML == elem) {
                base.dataValues.splice(base.dataValues.lastIndexOf(elem), 1);
            }
        });
    
        const input = document.querySelectorAll('.kanban-board__input');
        input.forEach(elem => {
            if (selectedReady.innerHTML == elem.value) {
                elem.parentElement.parentElement.remove();
    
                base.dataBacklog.forEach(item => {
                    if (item.includes(`value="${elem.value}"`)) {
                        base.dataBacklog.splice(base.dataBacklog.indexOf(item), 1);
                    }
                });
            }
        });
        
        base.dataReady.push(selectedReady.textContent);
    
        disableBtn(base.dataValues, base.readyAddCard);
        
        enableButton(base.dataReady, base.inprogressAddCard);
    
        localStorage.setItem('inputElement', JSON.stringify(base.dataBacklog));
        localStorage.setItem('readyElement', JSON.stringify(base.dataReady));
        localStorage.setItem('dataValues', JSON.stringify(base.dataValues));
    });
}
