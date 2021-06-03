const backlogBoard = document.querySelector('#backlogBoard');
const backlogAddCard = document.querySelector('#backlogButton');
const readyAddCard = document.querySelector('#readyButton');
const inprogressAddCard = document.querySelector('#inprogressButton');
const finishedAddCard = document.querySelector('#finishedButton');
const backlogTasksField = document.querySelector('#backlogField');
const readyTasksField = document.querySelector('#readyField');
const inprogressTasksField = document.querySelector('#inprogressField');
const finishedTasksField = document.querySelector('#finishedField');
const ulElement = document.querySelector('#readyItems');

const activeTask = document.querySelector('#activeTask');
const finishedTask = document.querySelector('#finishedTask');

let backlogCounter = 0;
let activeTasksCounter = 0;
let finishedTasksCounter = 0;

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

addTasksList = (contId, itemsId, tasksField, data) => {
    const container = document.createElement('div');
    container.classList.add('taskslist');
    container.setAttribute('id', contId); 
    tasksField.appendChild(container);

    const ul = document.createElement('ul');
    ul.classList.add('tasksitems');
    ul.setAttribute('id', itemsId);
    container.appendChild(ul);

    data.forEach(elem => {
        const li = document.createElement('li');
        li.classList.add('tasksitem');
        li.innerHTML = elem;
        ul.appendChild(li);
    });
};

backlogAddCard.addEventListener('click', () => {
    if(backlogBoard.previousElementSibling === null) {
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
            activeTasksCounter += 1;

            activeTask.innerHTML = activeTasksCounter;

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
            localStorage.setItem('activeTasksCounter', JSON.stringify(activeTasksCounter));

            enableButton(dataValues, readyAddCard);
        });

        disableBtn(dataValues, readyAddCard);

        }

    if (backlogBoard.previousElementSibling !== null) {
        addTasksList('backlogList', 'backlogItems', backlogTasksField, dataCreatedBoards[1]);
        const ul = document.createElement('ul');
        ul.classList.add('kanban_ready-Ul');
        ul.setAttribute('id', 'ulBacklog')
        backlogTasksField.append(ul)
    }      
});

backlogTasksField.addEventListener('click', e => {
    const selected = e.target;

    document.querySelector('#backlogList').remove();

    const ul = document.querySelector('#ulBacklog')
    ul.append(selected);

    dataCreatedBoards[1].forEach(elem => {
        if(selected.innerHTML == elem) {
            dataCreatedBoards[1].splice(dataCreatedBoards[1].lastIndexOf(elem), 1);
        }
    });

    const previousBordField = document.querySelector('#createdField1');
    const prevChild = previousBordField.childNodes;

    prevChild.forEach(elem => {
        if (selected.innerHTML == elem.innerHTML) {
            
            elem.remove();

            dataCreatedBoards[1].forEach(item => {
                if (selected.innerHTML == item) {
                    dataCreatedBoards[1].splice(dataCreatedBoards[1].indexOf(item), 1);
                }
            });
        }
    
        const childrenBacklog = elem.childNodes;

        if (selected.innerHTML == childrenBacklog.value) {
            elem.parentElement.parentElement.remove();

            dataCreatedBoards[1].forEach(item => {
                if (item.includes(`value="${elem.value}"`)) {
                    dataCreatedBoards[1].splice(dataCreatedBoards[1].indexOf(item), 1);
                }
            });
        }
    });
})

window.addEventListener('load', () => {
    const elements = JSON.parse(localStorage.getItem('inputElement'));
    const values = JSON.parse(localStorage.getItem('dataValues'));
    const readyElements = JSON.parse(localStorage.getItem('readyElement'));
    const inprogressElement = JSON.parse(localStorage.getItem('inprogressElement'));
    const finishedElement = JSON.parse(localStorage.getItem('finishedElement'));
    const activeTasksCount = JSON.parse(localStorage.getItem('activeTasksCounter'));
    const finishedTasksCount = JSON.parse(localStorage.getItem('finishedTasksCounter'));

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
    activeTasksCounter = activeTasksCount;
    finishedTasksCounter = finishedTasksCount;

    const readyUl = document.querySelector('#ulInReady');
    readyTasksField.appendChild(readyUl);

    dataReady.forEach(elem => {
        const readyLi = document.createElement('li');
        readyLi.classList.add('tasksitem');
        readyLi.innerHTML = elem;
        readyUl.appendChild(readyLi);
    });

    const inprogressUl = document.querySelector('#ulInProgress');
    inprogressTasksField.appendChild(inprogressUl);

    dataInprogress.forEach(elem => {
        const inprogressLi = document.createElement('li');
        inprogressLi.classList.add('tasksitem');
        inprogressLi.innerHTML = elem;
        inprogressUl.appendChild(inprogressLi);
    });

    const finishedUl = document.createElement('ul');
    finishedUl.setAttribute('id', 'ulFinished');
    finishedUl.classList.add('kanban_ready-Ul');
    finishedTasksField.appendChild(finishedUl);

    dataFinished.forEach(elem => {
        const finishedLi = document.createElement('li');
        finishedLi.classList.add('tasksitem');
        finishedLi.innerHTML = elem;
        finishedUl.appendChild(finishedLi);
    });

    activeTask.innerHTML = activeTasksCounter;
    finishedTask.innerHTML = finishedTasksCounter;

    backlogCounter = localStorage.getItem('backlogCounter');

    disableBtn(dataValues, readyAddCard);
    disableBtn(dataReady, inprogressAddCard);
    disableBtn(dataInprogress, finishedAddCard);
}); 

readyAddCard.addEventListener('click', ()=> {
    addTasksList ('readyList', 'readyItems', readyTasksField, dataValues)
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

    activeTasksCounter -= 1;
    activeTask.innerHTML = activeTasksCounter;

    localStorage.setItem('inputElement', JSON.stringify(dataBacklog));
    localStorage.setItem('readyElement', JSON.stringify(dataReady));
    localStorage.setItem('dataValues', JSON.stringify(dataValues));
    localStorage.setItem('activeTasksCounter', JSON.stringify(activeTasksCounter));

});

inprogressAddCard.addEventListener('click', () => {
    addTasksList('inprogressList', 'inprogressItems', inprogressTasksField, dataReady);
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
    addTasksList('finishedList', 'finishedItems', finishedTasksField, dataInprogress);
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

    finishedTasksCounter += 1;
    finishedTask.innerHTML = finishedTasksCounter;

    localStorage.setItem('finishedElement', JSON.stringify(dataFinished));
    localStorage.setItem('inprogressElement', JSON.stringify(dataInprogress));
    localStorage.setItem('finishedTasksCounter', JSON.stringify(finishedTasksCounter));
});
