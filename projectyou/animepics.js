const btnEl = document.getElementById("btn");

const animeContainerEl = document.getElementById("anime-container")

const animeImgEl = document.getElementById("anime-img")

const animeNameEl = document.getElementById("anime-name")

btnEl.addEventListener("click", async function () {
    try {

        //when i click on btn btn disabled property ko active kiya
        btnEl.disabled = true;
        btnEl.innerText = "Loading..";
        animeNameEl.innerText = "Updating..";


        // svg fie fast upload hoti hai isliye loading img ke liye use kra
        animeImgEl.src = "loadinganime.svg"

        //when data fetch from api we need wait
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        // console.log(data.url);


        //data load hone ke baad
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime"
        animeContainerEl.style.display = "block"
        animeImgEl.src = data.url;
        animeNameEl.innerText = data.artist;


    } catch (error) {
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeNameEl.innerText = "An Error happened ,please try again later...";
        
    }
});