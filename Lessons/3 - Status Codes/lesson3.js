const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () => {
    console.log(request, request.readyState);

    // We have to also check the status code
    if (request.readyState === 4 && request.status === 200) {
        console.log(request, request.responseText);
    }
    // If the point reaches this Else If statemnt, is means that the status code isn't 200, so there was a problem getting the data.
    else if (request.readyState === 4) {
        console.log('could not fetch the data');
    }
});

request.open('GET', 'https://jsonplaceholder.typicode.com/todos/');

request.send();
