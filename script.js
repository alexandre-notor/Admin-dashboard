const body = document.querySelector("body"), modeToggle = document.querySelector(".mode-toggle"), sidbar = document.querySelector("nav"), sidbarToggle = document.querySelector(".sidbar-toggle");
    

modeToggle.addEventListener("click", () =>{
    body.classList.toggle('dark');
    logoChange();
});

sidbarToggle.addEventListener("click", () =>{
    sidbar.classList.toggle("close");
    logoChange();
});

function isDark() {
    if (body.className.indexOf('dark') < 0) return false;
    return true;
}
function isBig() {
    if (sidbar.className.indexOf('close') < 0) return true;
    return false;
}

function logoChange() {
    let Image_Id2 = document.getElementById('getImage');
    if(!isBig()) 
        Image_Id2.src = "Img/logo2.png";
    else if (isBig() && isDark())
        Image_Id2.src = "Img/logo1.png";
    else
        Image_Id2.src = "Img/logo.png";
} 
