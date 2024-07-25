const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const activeLink = document.querySelector(".nav-menu .nav-link.active");
const navSlideBar = document.querySelector(".nav-slide-bar");
const nav = document.querySelector("header nav");
const section_result = document.querySelector(".section-header");
const navMenuBtn = document.querySelector('#nav-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const closeNav = document.querySelector('#close-nav');
const sections = document.querySelectorAll('.section');
const navMenuWrapper = document.querySelector('.nav-menu-wrapper');


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
        navMenu.classList.remove('nav-active'); 
        navMenuWrapper.classList.remove('wrapper-active'); 
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
    if (document.documentElement.scrollTop > 100) {
        nav.classList.add("scrolled");
    }
    else {
        nav.classList.remove("scrolled");
    }

    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop-150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                let link = document.querySelector('.nav-menu a[href*=' + id + ']');
                link.classList.add('active');
                navSlideBar.style.left = link.offsetLeft + 18 + "px";
                navSlideBar.style.width = link.offsetWidth - 36 + "px";
            })
        }
    })

});

navMenuBtn.addEventListener('click', () => {
    navMenu.classList.add('nav-active');
    navMenuWrapper.classList.add('wrapper-active');
})

closeNav.addEventListener('click', () => {
    navMenu.classList.remove('nav-active'); 
    navMenuWrapper.classList.remove('wrapper-active');
 })

 navMenuWrapper.addEventListener('click', () => {
    navMenu.classList.remove('nav-active'); 
    navMenuWrapper.classList.remove('wrapper-active'); 
 })