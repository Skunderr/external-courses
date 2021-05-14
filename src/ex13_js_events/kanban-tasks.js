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

function disableBtn(data, btn, id) {
    if (data.length === 0) {
        const btnText = document.querySelector(`#${id}`);

        btn.setAttribute('disabled', 'disabled');

        btnText.style.color = '#c6d5ee';
        btnText.style.cursor = 'default';
        btnText.addEventListener('mouseover', function() {
            btnText.style.color = '#c6d5ee';
        });

        btnText.addEventListener('mouseout', function() {
            btnText.style.color = '#c6d5ee';
        });
    } 
}

function includeBtn(data, btn, id) {
    if (data.length !== 0) {
        const btnText = document.querySelector(`#${id}`);

        btn.removeAttribute('disabled');

        btnText.setAttribute('style', 'color: #5E6C84');

        btnText.addEventListener('mouseover', function() {
            btnText.style.color = '#0067A3';
        });
        btnText.addEventListener('mouseout', function() {
            btnText.style.color = '#5E6C84';
        });
    }  
}

backlogAddCard.addEventListener('click', addTaskBacklog = () => {
    backlogCounter++;

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
  
    backlogInput.addEventListener('change', function() {

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

        includeBtn(dataValues, readyAddCard, 'readyButtonText');
    });

    disableBtn(dataValues, readyAddCard, 'readyButtonText');
}); 

window.addEventListener('load', function() {
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

    const readyUl = document.createElement('ul');
    readyUl.setAttribute('id', 'ulInReady');
    readyUl.classList.add('kanban_ready-Ul');
    readyTasksField.appendChild(readyUl);

    dataReady.forEach(elem => {
        const readyLi = document.createElement('li');
        readyLi.classList.add('ready-item');
        readyLi.innerHTML = elem;
        readyUl.appendChild(readyLi);
    });

    const inprogressUl = document.createElement('ul');
    inprogressUl.setAttribute('id', 'ulInProgress');
    inprogressUl.classList.add('kanban_ready-Ul');
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

    disableBtn(dataValues, readyAddCard, 'readyButtonText');

    disableBtn(dataReady, inprogressAddCard, 'inprogressButtonText');

    disableBtn(dataInprogress, finishedAddCard, 'finishedButtonText');
}); 

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

finishedAddCard.addEventListener('click', addTaskFinished = () => {
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

finishedTasksField.addEventListener("click", function(e) {
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

    disableBtn(dataInprogress, finishedAddCard, 'finishedButtonText');

    localStorage.setItem('finishedElement', JSON.stringify(dataFinished));
    localStorage.setItem('inprogressElement', JSON.stringify(dataInprogress));
});
