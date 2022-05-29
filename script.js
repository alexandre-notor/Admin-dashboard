const body = document.querySelector("body");
    modeToggle = document.querySelector(".mode-toggle");
    sidbar = document.querySelector("nav");
    sidbarToggle = document.querySelector(".sidbar-toggle");
    

modeToggle.addEventListener("click", () =>{
    body.classList.toggle('dark');
});

sidbarToggle.addEventListener("click", () =>{
    sidbar.classList.toggle("close");
});


// function logoChange() {
//     let Image_Id2 = document.getElementById('getImage');

//     if (Image_Id2.src.match("Img/logo.png")) {
//         Image_Id2.src = "Img/logo1.png";
//     }
//     else {
//         Image_Id2.src = "Img/logo.png";
//     }
// } 


function logoChange1() {
    let  Image_Id1 = document.getElementById('getImage');

    if (Image_Id1.src.match("Img/logo.png")) {
        Image_Id1.src = "Img/logo2.png";
        
    }
    else {
        Image_Id1.src = "Img/logo.png";
    }
}  

