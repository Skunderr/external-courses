onChange = (event) => {
    console.log(event.target.value);
}

const debounce = (callback, time) => {
    let timeout;
    return function() {
        const functionCall = () => { 
            return callback.apply(this, arguments);
        };

        clearTimeout(timeout);

        timeout = setTimeout(functionCall, time);
    }
}
  
document.getElementById('search').addEventListener('keyup', debounce(onChange, 300));
