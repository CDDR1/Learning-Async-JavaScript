// When we want to make a request from the browser to a server, we first have to create a request object. 
const request = new XMLHttpRequest();

// To access the data that we are going to recieve, we first need to use an event listener to track the process of the request that we are sending. For this, we have to listen to an event called "readystatechange".
request.addEventListener('readystatechange', () => {
    console.log(request, request.readyState);

    // When the readyState is 4, that is the point in which we can do something with the response text.
    if (request.readyState === 4) {
        console.log(request, request.responseText);
    }
});

// The next step is to use the .open() method of the request. This method accepts two parameters which are the type of method that we are doing and the place from where we want the data, in this case it is the API endpoint. 
request.open('GET', "https://jsonplaceholder.typicode.com/todos/");

// Know to actually send the request we use the .send() method, which sends the request.
request.send();

