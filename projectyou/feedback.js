// al rating div ko le liy hai yaha pr 
const ratingEls = document.querySelectorAll(".rating");

const btnEl = document.getElementById("btn")

const containerEl =  document.getElementById("container")

let selectedRating = "";


ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click",(event) => {
      removeActive();
      selectedRating = event.target.innerText ||  event.target.parentNode.innerText;
      event.target.classList.add("active")
      event.target.parentNode.classList.add("active")   //img ka background change  hoga click kr ke chod ne pr

    });
});

// btn pr click krne ke baad jo aayega..  

btnEl.addEventListener("click",() => {
  if (selectedRating !== "") {
    containerEl.innerHTML = ` 
    <strong>Thank You! </strong>
    <br>
    <br>
    <strong>Feedback: ${selectedRating} </strong>
    <p> We'll use your feedback to improve our customer service. </p>
    `
    
  }
})

// second wale pr click krne pr first wale se background change hoga click se 
function removeActive() {
  ratingEls.forEach((ratingEl) => {
    ratingEl.classList.remove("active")
    // ratingEl.parentNode.classList.remove("active")
  }); 
}