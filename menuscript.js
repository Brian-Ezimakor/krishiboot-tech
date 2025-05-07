document.addEventListener("click", e => {
   if (e.target.matches(".close")){
    document.querySelector('body').classList.toggle("activeSlide") 
}
})

window.onload = function() { 
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById("year").innerHTML = currentYear;
}
