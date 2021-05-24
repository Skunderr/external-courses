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
