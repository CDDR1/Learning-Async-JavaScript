const getTodos = (response) => {

    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();

        request.addEventListener('readystatechange', () => {
            if (request.readyState === 4 && request.status === 200) {
                const data = JSON.parse(request.responseText);
                resolve(data);
            }
            else if (request.readyState === 4) {
                reject('error getting resource');
            }
        });

        request.open('GET', response);
        request.send(); 
    });
}

// We can return another promise in the first .then() method by returning getTodos() (remember that getTodos() returns a Promise), this way, we can chain another .then() method after the first one. 

// We don't need to use multiple .catch() methods for the different promises because using only one catch() method is enough, it will catch all the errors no matter in which promise the error happens.
getTodos('todos/luigis.json').then(data => {
    console.log('promise resolved:', data);
    return getTodos('todos/mario.json');
}).then(data => {
    console.log('second promise resolved:', data);
    return getTodos('todos/shaun.json');
}).then(data => {
    console.log('third promise resolved');
}).catch(err => {
    console.log('promise rejected', err);
}); 

