import './base.js';

export const createListTaskFinished = () => {
    base.finishedAddCard.addEventListener('click', () => {
        const ulElement = document.querySelector('#finishedItems');
    
        if (ulElement === null) {
            const finishedContainer = document.createElement('div');
            finishedContainer.classList.add('ready-list');
            finishedContainer.setAttribute('id', 'finishedList');
            base.finishedTasksField.appendChild(finishedContainer);
    
            const finishedUl = document.createElement('ul');
            finishedUl.classList.add('ready-items');
            finishedUl.setAttribute('id', 'finishedItems');
            finishedContainer.appendChild(finishedUl);
    
            base.dataInprogress.forEach(elem => {
                const finishedLi = document.createElement('li');
                finishedLi.classList.add('ready-item');
                finishedLi.innerHTML = elem;
                finishedUl.appendChild(finishedLi);
            });
        }
    });
    
}

export const addTaskFinished = () => {
    base.finishedTasksField.addEventListener('click', e => {
        const selectedFinished = e.target;
    
        document.querySelector('#finishedList').remove();
    
        const ul = document.createElement('ul');
        ul.setAttribute('id', 'ulFinished');
        ul.classList.add('kanban_ready-Ul');
        base.finishedTasksField.appendChild(ul);
        ul.appendChild(selectedFinished);
    
        base.dataInprogress.forEach(elem => {
            if(selectedFinished.innerHTML == elem) {
                base.dataInprogress.splice(base.dataInprogress.lastIndexOf(elem), 1);
            }
        });
    
        const inprogressUl = document.querySelector('#ulInProgress');
        const childInprogress = inprogressUl.childNodes;
    
        childInprogress.forEach(elem => {
            if (selectedFinished.innerHTML == elem.innerHTML) {
                elem.remove();
    
                base.dataInprogress.forEach(item => {
                    if (selectedFinished.innerHTML == item) {
                        base.dataInprogress.splice(base.dataInprogress.indexOf(item), 1);
                    }
                });
            }
        });
        
        base.dataFinished.push(selectedFinished.textContent);
    
        disableBtn(base.dataInprogress, finishedAddCard);
    
        localStorage.setItem('finishedElement', JSON.stringify(base.dataFinished));
        localStorage.setItem('inprogressElement', JSON.stringify(base.dataInprogress));
    });
}



