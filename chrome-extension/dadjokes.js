const jokeElement = document.getElementById("joke");
const nextButton = document.getElementById("nextBtn");
let cachedJoke = '';
const defaultJoke = 'I\'m afraid for the calendar. Its days are numbered.'

async function callJokesAPI() {
    const r = await fetch('https://loljokes.azurewebsites.net/jokes');
    return await r.json();
}

async function displayJoke() {
    try {
        const response = await callJokesAPI();
        if (response?.success) {
            cachedJoke = response?.message;
        }
        jokeElement.innerHTML = cachedJoke;
    } catch (err) {
        console.log(JSON.stringify(err));
        jokeElement.innerHTML = cachedJoke ? cachedJoke : defaultJoke;
    }
}

async function startApp() {
    jokeElement.innerHTML = defaultJoke;
    await displayJoke();
}

nextButton.addEventListener('click', async () => {
    await displayJoke();
});

startApp();