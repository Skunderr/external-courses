const backlogAddCard = document.querySelector('#backlogButton');
const readyAddCard = document.querySelector('#readyButton');
const inprogressAddCard = document.querySelector('#inprogressButton');
const finishedAddCard = document.querySelector('#finishedButton');
const backlogTasksField = document.querySelector('#backlogField');
const readyTasksField = document.querySelector('#readyField');
const inprogressTasksField = document.querySelector('#inprogressField');
const finishedTasksField = document.querySelector('#finishedField');
const ulElement = document.querySelector('#readyItems');

let backlogCounter = 0;

const dataBacklog = [];
let dataValues = [];
let dataReady = [];
let dataInprogress = [];
let dataFinished = [];

disableBtn = (data, btn) => {
    if (data.length === 0) {
        btn.setAttribute('disabled', 'disabled');
    } 
}

enableButton = (data, btn) => {
    if (data.length !== 0) {
        btn.removeAttribute('disabled');
    }  
}

backlogAddCard.addEventListener('click', () => {
    backlogCounter += 1;

    const backlogTemplate = `
    <div class="kanban-board__task" id="baglogTask-${backlogCounter}">               
        <input class="kanban-board__input" type="text" name="backlogInput" id="input-${backlogCounter}">
    </div> 
    `;

    const newInput = document.createElement('div');
    newInput.setAttribute('name', 'taskName');
    newInput.classList.add('backlogContainer');
    newInput.innerHTML = backlogTemplate;
    backlogTasksField.appendChild(newInput);

    const backlogInput = document.querySelector(`#input-${backlogCounter}`);
  
    backlogInput.addEventListener('change', () => {

        const backlogTemplateWithValue = `
            <div class="kanban-board__task">    
                <input class="kanban-board__input" type="text" id="input-${backlogCounter}" value="${backlogInput.value}">
            </div> 
        `;

        dataBacklog.push(backlogTemplateWithValue);
        dataValues.push(backlogInput.value);
        
        localStorage.setItem('inputElement', JSON.stringify(dataBacklog));
        localStorage.setItem('backlogCounter', backlogCounter);
        localStorage.setItem('dataValues', JSON.stringify(dataValues));

        enableButton(dataValues, readyAddCard);
    });

    disableBtn(dataValues, readyAddCard);
}); 

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
        
        backlogTasksField.appendChild(newInput);
        
        dataBacklog.push(elem);
    });

    dataValues = values;
    dataReady = readyElements;
    dataInprogress = inprogressElement;
    dataFinished = finishedElement;

    const readyUl = document.querySelector('#ulInReady');
    readyTasksField.appendChild(readyUl);

    dataReady.forEach(elem => {
        const readyLi = document.createElement('li');
        readyLi.classList.add('ready-item');
        readyLi.innerHTML = elem;
        readyUl.appendChild(readyLi);
    });

    const inprogressUl = document.querySelector('#ulInProgress');
    inprogressTasksField.appendChild(inprogressUl);

    dataInprogress.forEach(elem => {
        const inprogressLi = document.createElement('li');
        inprogressLi.classList.add('ready-item');
        inprogressLi.innerHTML = elem;
        inprogressUl.appendChild(inprogressLi);
    });

    const finishedUl = document.createElement('ul');
    finishedUl.setAttribute('id', 'ulFinished');
    finishedUl.classList.add('kanban_ready-Ul');
    finishedTasksField.appendChild(finishedUl);

    dataFinished.forEach(elem => {
        const finishedLi = document.createElement('li');
        finishedLi.classList.add('ready-item');
        finishedLi.innerHTML = elem;
        finishedUl.appendChild(finishedLi);
    });

    backlogCounter = localStorage.getItem('backlogCounter');

    disableBtn(dataValues, readyAddCard);
    disableBtn(dataReady, inprogressAddCard);
    disableBtn(dataInprogress, finishedAddCard);
}); 

readyAddCard.addEventListener('click', () => {
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

readyTasksField.addEventListener('click', e => {
    const selectedReady = e.target;

    document.querySelector('#readyList').remove();

    const ulReady = document.querySelector('#ulInReady');
    ulReady.appendChild(selectedReady);

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

    disableBtn(dataValues, readyAddCard);
    
    enableButton(dataReady, inprogressAddCard);

    localStorage.setItem('inputElement', JSON.stringify(dataBacklog));
    localStorage.setItem('readyElement', JSON.stringify(dataReady));
    localStorage.setItem('dataValues', JSON.stringify(dataValues));

});

inprogressAddCard.addEventListener('click', () => {
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

inprogressTasksField.addEventListener('click', e => {
    const selectedInprogress = e.target;

    document.querySelector('#inprogressList').remove();

    const ulInprogress = document.querySelector('#ulInProgress')
    ulInprogress.appendChild(selectedInprogress);

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

    disableBtn(dataReady, inprogressAddCard);
    enableButton(dataReady, inprogressAddCard);
    enableButton(dataInprogress, finishedAddCard);

    localStorage.setItem('inprogressElement', JSON.stringify(dataInprogress));
    localStorage.setItem('readyElement', JSON.stringify(dataReady));
});

finishedAddCard.addEventListener('click', () => {
    const ulElement = document.querySelector('#finishedItems');

    if (ulElement === null) {
        const finishedContainer = document.createElement('div');
        finishedContainer.classList.add('ready-list');
        finishedContainer.setAttribute('id', 'finishedList');
        finishedTasksField.appendChild(finishedContainer);

        const finishedUl = document.createElement('ul');
        finishedUl.classList.add('ready-items');
        finishedUl.setAttribute('id', 'finishedItems');
        finishedContainer.appendChild(finishedUl);

        dataInprogress.forEach(elem => {
            const finishedLi = document.createElement('li');
            finishedLi.classList.add('ready-item');
            finishedLi.innerHTML = elem;
            finishedUl.appendChild(finishedLi);
        });
    }
});

finishedTasksField.addEventListener('click', e => {
    const selectedFinished = e.target;

    document.querySelector('#finishedList').remove();

    const ul = document.createElement('ul');
    ul.setAttribute('id', 'ulFinished');
    ul.classList.add('kanban_ready-Ul');
    finishedTasksField.appendChild(ul);
    ul.appendChild(selectedFinished);

    dataInprogress.forEach(elem => {
        if(selectedFinished.innerHTML == elem) {
            dataInprogress.splice(dataInprogress.lastIndexOf(elem), 1);
        }
    });

    const inprogressUl = document.querySelector('#ulInProgress');
    const childInprogress = inprogressUl.childNodes;

    childInprogress.forEach(elem => {
        if (selectedFinished.innerHTML == elem.innerHTML) {
            elem.remove();

            dataInprogress.forEach(item => {
                if (selectedFinished.innerHTML == item) {
                    dataInprogress.splice(dataInprogress.indexOf(item), 1);
                }
            });
        }
    });
    
    dataFinished.push(selectedFinished.textContent);

    disableBtn(dataInprogress, finishedAddCard);

    localStorage.setItem('finishedElement', JSON.stringify(dataFinished));
    localStorage.setItem('inprogressElement', JSON.stringify(dataInprogress));
});
