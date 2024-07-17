const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const activeLink = document.querySelector(".nav-menu .nav-link.active");
const navSlideBar = document.querySelector(".nav-slide-bar");
const nav = document.querySelector("header nav");
const section_result = document.querySelector(".section-header")


navSlideBar.style.left = activeLink.offsetLeft + 18 + "px";
navSlideBar.style.width = activeLink.offsetWidth - 36 + "px";
navLinks.forEach(link => {
    link.addEventListener("mouseover", () => {
        navSlideBar.style.left = link.offsetLeft + 18 + "px";
        navSlideBar.style.width = link.offsetWidth - 36 + "px";
    });
    link.addEventListener("mouseleave", () => {
        navSlideBar.style.left = document.querySelector(".nav-menu .nav-link.active").offsetLeft + 18 + "px";
        navSlideBar.style.width = document.querySelector(".nav-menu .nav-link.active").offsetWidth - 36 + "px";
    });
    link.addEventListener("click", () => {
        document.querySelector(".nav-menu .nav-link.active").classList.remove("active");
        link.classList.add("active");
    });
});



let nums = document.querySelectorAll(".num");
let re_sto = document.querySelector(".result-stories");

let test = false;

function scrolling() {
    if (window.screenY = re_sto.offsetTop) {
        if (!test) {
            nums.forEach((e) => {
                let start = 0;
                let end = e.dataset.num;
                let count = setInterval(() => {
                    start++;
                    e.textContent = start;
                    if (start == end) {
                        clearInterval(count);
                    }
                }, 2000 / end)
            })
        }
        test = true;
    }
}

window.addEventListener('scroll', function () {
    scrollPosition = window.scrollY || document.documentElement.scrollTop;
    let scrol = Math.floor(scrollPosition)
    if (scrol > 5014) {
        scrolling()
    }
    if(document.documentElement.scrollTop > 100){
        nav.classList.add("scrolled");
    }
    else{
        nav.classList.remove("scrolled");
    }

    console.log(document.documentElement.scrollTop);
});
