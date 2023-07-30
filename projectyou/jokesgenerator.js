const btnE1 = document.getElementById("btn");

const jokeE1 = document.getElementById("joke");

const apikey = "IfmwXxVzn7zMcrt6+Cn4tA==C5RZqwpTD7RX1pEb";

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apikey,
    },
};

const apiUrl = "https://api.api-ninjas.com/v1/jokes?limit=1";

async function getJoke() {

    try {

        jokeE1.innerText = "Updating...";

        btnE1.disabled = true;
        btnE1.innerText = "Loading...";

        const response = await fetch(apiUrl, options)
        const data = await response.json();

        btnE1.disabled = false;
        btnE1.innerText = "Tell Me A Joke...";

        jokeE1.innerText = data[0].joke;
        //  console.log(data[0].joke);

    } catch (error) {

        
        btnE1.disabled = false;
        btnE1.innerText = "Tell Me A Joke...";

        jokeE1.innerText = "An Eroor Happened,try again later..."


    }


}

btnE1.addEventListener("click", getJoke)