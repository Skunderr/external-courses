import './base.js';
import '../Field/field.module.css'

export const addTaskBacklog = () => {
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
                        <input class="kanban_board__input" type="text" id="input-${backlogCounter}" value="${backlogInput.value}">
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
    });
}
