// async & await

// Using the "async" keyword makes it an asynchronous function that returns a Promise whenever we call it. 
const getTodos = async () => {

    // await allow us to chain Promises together in a clean and much more readable way.
    const response = await fetch('todos.json');

    // This custom error will be thrown if the name of the file we are trying to fetch is misspelled.
    if (response.status !== 200) {
        throw new Error('cannot fetch data');
        // Throwing an error inside an asynchronous function causes the the Promise returned by the function to be rejected, allowing us to catch the error in the .catch() method. 
        // Remember that the fetch() method still returns a resolved Promise even if the file is misspelled, that's why we have to set up our own custom error.
    }

    const data = await response.json();

    return data;
}

getTodos()
    .then(data => console.log('resolved:', data))
    .catch(err => console.log('rejected:', err));
