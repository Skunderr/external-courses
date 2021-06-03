const createButton = document.querySelector('#createButton');
const mainKanban = document.querySelector('#mainKanban');
let createdBoardCounter = 0;

const dataCreatedBoards = {};
const dataInputCounter = {}
let inputCounter = 1;

createButton.addEventListener('click', () => {
    
    const wrapper = document.createElement('div');
    const templateTask = `
    <div id="createdBoard" class="kanban-board__tasks">
            <div id="boardMain"class="kanban-board__main">
                <h2 id="boardTitle" class="kanban-board__title">
                    <form action="#">
                        <input id="createInput" class="kanban-board__create-input"></input>
                    </form> 
                </h2>
                <div id="boardMainList" class="kanban-board__main-list">
                    <a href="#" class="kanban-board__main-link">
                        <img src="images/ponits.png" alt="#" class="kanban-board__main-img">
                    </a>
                </div>
            </div>
            <div id="createdField" class="kanban-board__field">
                
            </div>
            <button id="createdButton" class="kanban-board__add">
                <span class="btnPlus">+</span> 
                Add card
            </button>
    </div>
    `;
    wrapper.innerHTML = templateTask;
    mainKanban.insertBefore(wrapper, mainKanban.firstChild);

    const createInput = document.querySelector('#createInput');
    const boardTitle = document.querySelector('#boardTitle');
    createInput.focus()
    
    createInput.addEventListener('change', () => {
        boardTitle.innerHTML = createInput.value; 
        createdBoardCounter += 1;
        document.querySelector('#createdField').setAttribute('id', `createdField${createdBoardCounter}`);
        document.querySelector('#createdButton').setAttribute('id', `createdButton${createdBoardCounter}`);
    });

    createInput.addEventListener('focusout', () => {
        if(!createInput.value) {
            wrapper.remove(); 
        }
    });

    dataCreatedBoards[createdBoardCounter+1] = [];
});
    
mainKanban.addEventListener('click', e => {
    const idBtn = e.target.id;
    if ((idBtn).includes('createdButton')) {
        const field = document.querySelector(`#createdField${idBtn.slice(-1)}`);

        const task = document.createElement('div');
        task.classList.add('kanban-board__task');
        field.append(task);
      
        const input = document.createElement('input');
        input.classList.add('kanban-board__input');
        input.setAttribute('id', `createdId${inputCounter}`)
        task.append(input);

        const inputWithValue = document.querySelector(`#createdId${inputCounter}`);
        console.log(inputWithValue)

        inputWithValue.addEventListener('change', () => {
            inputCounter += 1;
            const templateWithValue = `
                <div class="kanban-board__task">    
                    <input class="kanban-board__input" value="${inputWithValue.value}">
                </div> 
            `;

            dataCreatedBoards[idBtn.slice(-1)].push(inputWithValue.value);
           
            console.log(dataCreatedBoards)
        });
    }
});


