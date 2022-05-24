const body = document.querySelector("body");
    modeToggle = document.querySelector(".mode-toggle");
    sidbar = document.querySelector("nav");
    sidbarToggle = document.querySelector(".sidbar-toggle");
    Image_Id = document.getElementById('getImage');

modeToggle.addEventListener("click", () =>{
    body.classList.toggle('dark');
});

sidbarToggle.addEventListener("click", () =>{
    sidbar.classList.toggle("close");
});


// function logoChange() {
//     var Image_Id = document.getElementById('getImage');
//     if (Image_Id.src.match("Img/logo.png")) {
//         Image_Id.src = "Img/logo1.png";
//     }
//     else {
//         Image_Id.src = "Img/logo.png";
//     }
// } 

function logoChange1() {

    if (Image_Id.src.match("Img/logo.png")) {
        Image_Id.src = "Img/logo2.png";
        
    }
    else {
        Image_Id.src = "Img/logo.png";
    }
}  