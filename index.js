
document.addEventListener("DOMContentLoaded", function () {
const scrollDown = document.querySelector(".scroll-down");
const homeSection = document.querySelector("#home");

window.addEventListener("scroll", function () {
    const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
    if (window.scrollY > homeBottom -600) {
        scrollDown.classList.add("visible")
    } else {
        scrollDown.classList.remove("visible")
    }
});
});



const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.each-card');
const leftArrow = document.getElementById('leftArrow');
const rightArrow = document.getElementById('rightArrow');

let index = 0;
let autoplayInterval;
let cardsPerSlide = window.innerWidth >= 768 ? 2 : 1;

function updateCarousel() {
const cardWidth = cards[0].offsetWidth + 32; // card + gap
track.style.transform = `translateX(-${index * cardWidth}px)`;
}

function nextSlide() {
if (index < cards.length - cardsPerSlide) {
    index++;
} else {
    index = 0;
}
updateCarousel();
}

function prevSlide() {
if (index > 0) {
    index--;
} else {
    index = cards.length - cardsPerSlide;
}
updateCarousel();
}

function startAutoplay() {
autoplayInterval = setInterval(nextSlide, 3000);
}

function stopAutoplay() {
clearInterval(autoplayInterval);
}

// Arrow event listeners
rightArrow.addEventListener('mouseenter', stopAutoplay);
leftArrow.addEventListener('mouseenter', stopAutoplay);
rightArrow.addEventListener('mouseleave', startAutoplay);
leftArrow.addEventListener('mouseleave', startAutoplay);

rightArrow.addEventListener('click', nextSlide);
leftArrow.addEventListener('click', prevSlide);

// Responsive handling
window.addEventListener('resize', () => {
cardsPerSlide = window.innerWidth >= 768 ? 2 : 1;
updateCarousel();
});

startAutoplay();

const categoryList = [
    {
        category:"uiux",
        description:"ui/ux description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"uiux",
        description:"ui/ux description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"uiux",
        description:"ui/ux description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"uiux",
        description:"ui/ux description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"uiux",
        description:"ui/ux description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"developing",
        description:"developing description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"developing",
        description:"developing description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"developing",
        description:"developing description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"developing",
        description:"developing description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"developing",
        description:"developing description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"photography",
        description:"photography description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"photography",
        description:"photography description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"photography",
        description:"photography description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"photography",
        description:"photography description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"photography",
        description:"photography description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"marketing",
        description:"marketing description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"marketing",
        description:"marketing description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"marketing",
        description:"marketing description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"marketing",
        description:"marketing description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"marketing",
        description:"marketing description",
        image:"assets/images/portfolio-1.webp"
    },
    {
        category:"marketing",
        description:"marketing description",
        image:"assets/images/portfolio-1.webp"
    }
]

const categoryEl = document.getElementById("categoryList")
const categoryBtns = document.querySelectorAll(".category-btn")

function renderCategories(category){
    categoryEl.innerHTML = '';

    const filtered = category === "all"?categoryList:categoryList.filter(each => each.category === category)
    console.log(category)
}

categoryBtns.forEach(btn => {
    btn.addEventListener("click",()=>{
        categoryBtns.forEach(each => each.removeAttribute("id"))
        btn.setAttribute("id","activee")
        const selectedCategory = btn.getAttribute("data-category");
        renderCategories(selectedCategory);
    })
})

renderCategories("all")




