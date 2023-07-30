// images 4 (0,1,2,3)

let flag = 0;   // 1st num ka image kyunki yeh array ke roop main store hota hai

function controller(x) {     // arrow pr click krne ke baad yha pr aayega 
    flag = flag + x;
    slideshow(flag);

}

slideshow(flag);
function slideshow(num) {
    let slides = document.getElementsByClassName('slide');

    // yaha se image ko display kia 

    for (let y of slides) {
        y.style.display = "none";
    }


    // slide jab last main pahuch jaayega tab usse fir se 0 se start krwayenge

    if (num == slides.length) {
        flag = 0;
        num = 0;

    }

    // slide jab 1 num ho aur prev krna ho tab usse 4(array 3) pr bhajna

    if (num < 0) {
        flag = slides.length - 1;

        num = slides.length - 1;

    }



    slides[num].style.display = "block";
}