const getTodos = (response, callback) => {
    const request = new XMLHttpRequest();

    request.addEventListener('readystatechange', () => {
        if (request.readyState === 4 && request.status === 200) {
            const data = JSON.parse(request.responseText);
            callback(undefined, data);
        }
        else if (request.readyState === 4) {
            callback('could not fetch the data', undefined);
        }
    });

    request.open('GET', response);
    request.send(); 
}

// Sometimes, we'll want to wait for each request to finish before doing the next one. For doing this, we have to call the callback functions one after another. This essentially means nesting the callbacks. 
getTodos('todos/luigi.json', (err, data) => {
    console.log(data);
    getTodos('todos/mario.json', (err, data) => {
        console.log(data);
        getTodos('todos/shaun.json', (err, data) => {
            console.log(data);
        });
    });   
});
// We see how this quickly is becoming messy. This is called callback hell. To avoid this, we can use what is called Promises. 
