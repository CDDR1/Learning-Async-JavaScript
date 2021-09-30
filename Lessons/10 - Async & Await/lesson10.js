// async & await

// Using the "async" keyword makes it an asynchronous function that returns a Promise whenever we call it. 
const getTodos = async () => {

    // await allow us to chain Promises together in a clean and much more readable way.
    const response = await fetch('todos.json');
    const data = await response.json();

    return data;
}

getTodos()
    .then(data => console.log('resolved:', data));
