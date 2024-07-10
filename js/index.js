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