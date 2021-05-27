import './base.js';

export const loadBoard = () => {
    window.addEventListener('load', () => {
        const elements = JSON.parse(localStorage.getItem('inputElement'));
        const values = JSON.parse(localStorage.getItem('dataValues'));
        const readyElements = JSON.parse(localStorage.getItem('readyElement'));
        const inprogressElement = JSON.parse(localStorage.getItem('inprogressElement'));
        const finishedElement = JSON.parse(localStorage.getItem('finishedElement'));
    
        elements.forEach(elem => {
            const newInput = document.createElement('div');
            newInput.setAttribute('name', 'taskName');
            newInput.classList.add('backlogContainer');
            newInput.innerHTML = elem;
            
            base.backlogTasksField.appendChild(newInput);
            
            base.dataBacklog.push(elem);
        });
    
        base.dataValues = values;
        base.dataReady = readyElements;
        base.dataInprogress = inprogressElement;
        base.dataFinished = finishedElement;
    
        const readyUl = document.querySelector('#ulInReady');
        base.readyTasksField.appendChild(readyUl);
    
        base.dataReady.forEach(elem => {
            const readyLi = document.createElement('li');
            readyLi.classList.add('ready-item');
            readyLi.innerHTML = elem;
            readyUl.appendChild(readyLi);
        });
    
        const inprogressUl = document.querySelector('#ulInProgress');
        base.inprogressTasksField.appendChild(inprogressUl);
    
        base.dataInprogress.forEach(elem => {
            const inprogressLi = document.createElement('li');
            inprogressLi.classList.add('ready-item');
            inprogressLi.innerHTML = elem;
            inprogressUl.appendChild(inprogressLi);
        });
    
        const finishedUl = document.createElement('ul');
        finishedUl.setAttribute('id', 'ulFinished');
        finishedUl.classList.add('kanban_ready-Ul');
        base.finishedTasksField.appendChild(finishedUl);
    
        base.dataFinished.forEach(elem => {
            const finishedLi = document.createElement('li');
            finishedLi.classList.add('ready-item');
            finishedLi.innerHTML = elem;
            finishedUl.appendChild(finishedLi);
        });
    
        base.backlogCounter = localStorage.getItem('backlogCounter');
    
        disableBtn(base.dataValues, base.readyAddCard);
        disableBtn(base.dataReady, base.inprogressAddCard);
        disableBtn(base.dataInprogress, base.finishedAddCard);
    }); 
}

