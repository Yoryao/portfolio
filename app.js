console.log("app Working");

// function to show-hide mobile menu

let menuIcon = document.getElementById("menuIcon");
menuIcon.addEventListener("click", toggleVisible);

function toggleVisible() {
    let mobileMenu = document.getElementById("mobileMenu");
    mobileMenu.classList.toggle("hidden");
    console.log("manipulando el menu.")
}