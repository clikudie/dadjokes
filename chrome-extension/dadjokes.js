const jokeSetup = document.getElementById("setup");
const jokePunchline = document.getElementById("punchline");
const nextButton = document.getElementById("nextBtn");
let cachedJoke = {
    setup: 'I\'m afraid for the calendar.',
    punchline: 'Its days are numbered.'
}

async function callJokesAPI() {
    const r = await fetch('https://dadjokesprod.azurewebsites.net/jokes');
    return await r.json();
}

async function displayJoke() {
    try {
        const response = await callJokesAPI();
        if (response?.success) {
            cachedJoke = response?.data;
        }
    } catch (err) {
        console.error(JSON.stringify(err));
    } finally {
        jokeSetup.innerHTML = cachedJoke?.setup;
        // For jokes that are only setup, make the punchline an empty string
        jokePunchline.innerHTML = cachedJoke?.punchline ?? '';
    }
}

async function startApp() {
    jokeSetup.innerHTML = cachedJoke.setup;
    jokePunchline.innerHTML = cachedJoke.punchline;
    await displayJoke();
}

nextButton.addEventListener('click', async () => {
    await displayJoke();
});

startApp();