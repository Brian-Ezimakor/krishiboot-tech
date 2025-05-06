const cards = document.querySelectorAll(".cardSection div");
const images = document.querySelectorAll(".imgSection img");
const container = document.querySelector(".container")

window.addEventListener("scroll", () => {
    const scrollPosition = window.scrollY;
    cards.forEach((card, index) => {
        const cardRect = card.getBoundingClientRect();
        // const cardBottom = card.offsetTop + card.offsetHeight;
        if (cardRect.top <= window.innerHeight / 2 && cardRect.bottom > window.innerHeight / 2) {
            images.forEach((image, imageIndex) => {
                if (imageIndex === index) {
                    image.classList.add("activeImg")
                }
                else {
                    image.classList.remove("activeImg")
                }
            })
        }
    })
})


window.onload = function() { 
let currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById("year").innerHTML = currentYear;
}
