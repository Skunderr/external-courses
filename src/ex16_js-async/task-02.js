onChange = (event) => {
    console.log(event.target.value);
}

const debounce = (callback, time) => {
    let timeout; 
    
    return function(...args) {
        if (timeout) {
            clearTimeout(timeout);
        }

        timeout = setTimeout(() => { callback(...args)}, time);
    };
};
  
document.getElementById('search').addEventListener('keyup', debounce(onChange, 300));
