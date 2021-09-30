// Fetch API 

// The Fetch API returns a Promise. This allow us to attach a .then() method and .catch() method to handle the resolve and rejected scenarios. 
fetch('todos.json').then(response => {
    console.log(response);
    return response.json(); // response.json() returns a Promise instead of the actual JSON data so to get the actual JSON data, we ca return the response.json() method, which means that we will be returnting another Promise. By returning another Promise, we can attach another .then() method to make use of the actual data inside of it. 
}).then(data => {
    console.log(data);
}).catch(err => {
    console.log(err);
});