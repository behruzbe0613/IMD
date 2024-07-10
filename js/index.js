const navLinks = document.querySelectorAll(".nav-menu .nav-link");
const activeLink = document.querySelector(".nav-menu .nav-link.active");
const navSlideBar = document.querySelector(".nav-slide-bar");


navSlideBar.style.left = activeLink.offsetLeft+18+"px";
navSlideBar.style.width = activeLink.offsetWidth-36+"px";
navLinks.forEach(link => {
    link.addEventListener("mouseover",()=>{
        navSlideBar.style.left = link.offsetLeft+18+"px";
        navSlideBar.style.width = link.offsetWidth-36+"px";
    });
    link.addEventListener("mouseleave",()=>{
        navSlideBar.style.left = document.querySelector(".nav-menu .nav-link.active").offsetLeft+18+"px";
        navSlideBar.style.width = document.querySelector(".nav-menu .nav-link.active").offsetWidth-36+"px";
    });
    link.addEventListener("click",()=>{
        document.querySelector(".nav-menu .nav-link.active").classList.remove("active");
        link.classList.add("active");
    });
});