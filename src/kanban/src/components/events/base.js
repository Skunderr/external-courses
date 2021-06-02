export const backlogAddCard = document.querySelector('#backlogButton');
export const readyAddCard = document.querySelector('#readyButton');
export const inprogressAddCard = document.querySelector('#inprogressButton');
export const finishedAddCard = document.querySelector('#finishedButton');
export const backlogTasksField = document.querySelector('#backlogField');
export const readyTasksField = document.querySelector('#readyField');
export const inprogressTasksField = document.querySelector('#inprogressField');
export const finishedTasksField = document.querySelector('#finishedField');
export const ulElement = document.querySelector('#readyItems');

export const activeTask = document.querySelector('#activeTask');
export const finishedTask = document.querySelector('#finishedTask');

export let backlogCounter = 0;
export let activeTasksCounter = 0;
export let finishedTasksCounter = 0;

export const dataBacklog = [];
export let dataValues = [];
export let dataReady = [];
export let dataInprogress = [];
export let dataFinished = [];

export const disableBtn = (data, btn) => {
    if (data.length === 0) {
        btn.setAttribute('disabled', 'disabled');
    } 
}

export const enableButton = (data, btn) => {
    if (data.length !== 0) {
        btn.removeAttribute('disabled');
    }  
}
