
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
        category:"developing",
        description:"developing description",
        image:"assets/images/portfolio-develop.webp"
    },
    {
        category:"developing",
        description:"developing description",
        image:"assets/images/portfolio-develop.webp"
    },
    {
        category:"developing",
        description:"developing description",
        image:"assets/images/portfolio-develop.webp"
    },
    {
        category:"developing",
        description:"developing description",
        image:"assets/images/portfolio-develop.webp"
    },
    {
        category:"photography",
        description:"photography description",
        image:"assets/images/portfolio-photograpy.webp"
    },
    {
        category:"photography",
        description:"photography description",
        image:"assets/images/portfolio-photograpy.webp"
    },
    {
        category:"photography",
        description:"photography description",
        image:"assets/images/portfolio-photograpy.webp"
    },
    {
        category:"marketing",
        description:"marketing description",
        image:"assets/images/portfolio-marketing.webp"
    },
    {
        category:"marketing",
        description:"marketing description",
        image:"assets/images/portfolio-marketing.webp"
    },
    {
        category:"marketing",
        description:"marketing description",
        image:"assets/images/portfolio-marketing.webp"
    },
    {
        category:"marketing",
        description:"marketing description",
        image:"assets/images/portfolio-marketing.webp"
    },
    {
        category:"marketing",
        description:"marketing description",
        image:"assets/images/portfolio-marketing.webp"
    }
]

const categoryEl = document.getElementById("categoryLists")
const categoryBtns = document.querySelectorAll(".category-btn")

function renderCategories(category) {
  categoryEl.innerHTML = ''; // Clear existing content

  const filtered = category === "all"
    ? categoryList
    : categoryList.filter(each => each.category === category);

  filtered.forEach(item => {
    const card = document.createElement("div");
    card.className = "category-card col-md-6 col-lg-4 col-xl-3";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = "category";
    img.className = "img-fluid";

    const overlay = document.createElement("div");
    overlay.className = "entry-overlay ps-5 pb-2";

    const overlayContext = document.createElement("div");
    overlayContext.className = "overlay-context";

    const span = document.createElement("span");
    span.textContent = item.category + " design";

    const h3 = document.createElement("h3");
    h3.textContent = item.description;

    const entryLinks = document.createElement("div");
    entryLinks.className = "entry-links";

    const link1 = document.createElement("a");
    link1.href = "#";
    link1.innerHTML = '<i class="bi bi-arrows-angle-expand"></i>';

    const link2 = document.createElement("a");
    link2.href = "#";
    link2.innerHTML = '<i class="bi bi-arrow-right"></i>';

    // Assemble structure
    entryLinks.appendChild(link1);
    entryLinks.appendChild(link2);

    overlayContext.appendChild(span);
    overlayContext.appendChild(h3);
    overlayContext.appendChild(entryLinks);

    overlay.appendChild(overlayContext);

    card.appendChild(img);
    card.appendChild(overlay);

    categoryEl.appendChild(card);
  });
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




