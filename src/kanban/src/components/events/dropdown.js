import img1 from '../../images/header/arrow-up.png';
import img2 from '../../images/header/arrow-down.png';

export const addDropdown = () => {
        const userButton = document.querySelector('#headerUseImg');
        const userList = document.querySelector('#headerUserList');
    
        userButton.addEventListener('click', () => {
            const userContainer = document.querySelector('#userContainer');
            const userArrow = document.querySelector('#headerUseArrow');
            const newContainer = document.createElement('div');
    
            if (userContainer === null) {
                const ulElement = document.createElement('ul');
                const links = [{ title: 'My account', link: '#' }, { title: 'My project', link: '#' },
                { title: 'My tasks', link: '#' }, { title: 'Help', link: '#' }, 
                { title: 'Sign in', link: '#' }, { title: 'Sign out', link: '#' }];
    
                ulElement.classList.add("header__user_items");
    
                userList.appendChild(newContainer);
    
                newContainer.appendChild(ulElement)
    
                newContainer.classList.add("header__user_container");
                newContainer.setAttribute('id', 'userContainer')
    
                links.forEach(elem => {
                    const liElement = document.createElement('li');
    
                    liElement.classList.add("header__user_item");
    
                    ulElement.appendChild(liElement);
    
                    liElement.innerHTML = elem.title;
    
                    liElement.setAttribute('href', `${elem.link}`);
    
                    userArrow.setAttribute('src', `${img1}`);
                });
            }
        });
    };


export const removeDropdown = () => {
    const userContainer = document.querySelector('#userContainer');
    const userArrow = document.querySelector('#headerUseArrow');
    
    if (userContainer !== null) {
        userContainer.remove();
        userArrow.setAttribute('src', `${img2}`);
    }  
};

