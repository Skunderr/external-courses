import './base.js';

export const addTaskBacklog = () => {
    base.backlogAddCard.addEventListener('click', () => {
        base.backlogCounter += 1;
    
        const backlogTemplate = `
        <div class="kanban-board__task" id="baglogTask-${base.backlogCounter}">               
            <input class="kanban-board__input" type="text" name="backlogInput" id="input-${base.backlogCounter}">
        </div> 
        `;
    
        const newInput = document.createElement('div');
        newInput.setAttribute('name', 'taskName');
        newInput.classList.add('backlogContainer');
        newInput.innerHTML = backlogTemplate;
        base.backlogTasksField.appendChild(newInput);
    
        const backlogInput = document.querySelector(`#input-${base.backlogCounter}`);
      
        backlogInput.addEventListener('change', () => {
    
            const backlogTemplateWithValue = `
                <div class="kanban-board__task">    
                    <input class="kanban-board__input" type="text" id="input-${base.backlogCounter}" value="${backlogInput.value}">
                </div> 
            `;
    
            base.dataBacklog.push(backlogTemplateWithValue);
            base.dataValues.push(backlogInput.value);
            
            localStorage.setItem('inputElement', JSON.stringify(base.dataBacklog));
            localStorage.setItem('backlogCounter', base.backlogCounter);
            localStorage.setItem('dataValues', JSON.stringify(base.dataValues));
    
            enableButton(base.dataValues, base.readyAddCard);
        });
    
        disableBtn(base.dataValues, base.readyAddCard);
    }); 
}
