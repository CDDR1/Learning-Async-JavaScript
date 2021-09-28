const getTodos = (callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            // The response that we get from the API is not JSON, it's just a string formatted as JSON. To actually use this data as JSON, we have to parse it using JSON.parse(), this gives us a big array of JavaScript objects.
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }
        else if (request.readyState === 4) {
            callback('could not fetch the data', undefined);
        }
    });

    request.open('GET', 'todos.json');
    request.send(); 
}

getTodos((err, data) => {
    if (err) {
        console.log(err);
    }
    else {
        console.log(data);
    }
});