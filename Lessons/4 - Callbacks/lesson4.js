// Make the code more extensible by putting it into a function and passing a callback as an arguement
const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            callback(undefined, request.responseText);
        }
        else if (request.readyState === 4) {
            callback('could not fetch the data', undefined);
        }
    });

    request.open('GET', 'https://jsonplaceholder.typicode.com/todos');
    request.send();
}

// By convention, we put the err first in the parameter list
getTodos((err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});

// This makes the code more reusable 