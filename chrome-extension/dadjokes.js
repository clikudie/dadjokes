const jokeElement = document.getElementById("joke");

fetch('https://loljokes.azurewebsites.net/jokes').then(r => r.text()).then(result => {
    jokeElement.innerHTML = result;
}).catch(err => {
    // add some default joke here
    jokeElement.innerHTML = JSON.stringify(err);
});