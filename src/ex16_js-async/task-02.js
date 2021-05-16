function onChange(event) {
    console.log(event.target.value);
}

document.getElementById('search').addEventListener('keyup', debounce(onChange, 300));

function debounce(callback, time) {
    let timeout;
    return function() {
        const functionCall = () => { 
            return callback.apply(this, arguments);
        };

        clearTimeout(timeout);

        timeout = setTimeout(functionCall, time);
    }
}
  