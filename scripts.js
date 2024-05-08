let nav_list = document.querySelector(".list-navbar");
let openMenu = document.querySelector(".menuopen");
let cross = document.querySelector(".cross");

openMenu.addEventListener("click", () => {
    nav_list.style.opacity = "100%";
    openMenu.style.display = "none";
});

cross.addEventListener("click", () => {
    nav_list.style.opacity = "0%";
    setTimeout(() => {
        openMenu.style.display = "block";
    }, 600)
});
