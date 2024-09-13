let navbare = document.querySelector(".navbare");
let open_bar = document.getElementById("open_bar");

open_bar.onclick = () => {
    navbare.classList.toggle("new_navbare");
    if (open_bar.src.includes("images/icon-hamburger.svg")) {
        open_bar.src = "images/icon-close.svg";
    } else {
        open_bar.src = "images/icon-hamburger.svg";
    }
};
