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
let nums = document.querySelectorAll(".num");
let re_sto = document.querySelector(".result-stories");

let test = false;

window.onscroll = () => {
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
