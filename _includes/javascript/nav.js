const hamburger = document.querySelector("[data-hamburger-menu]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const overlay = document.querySelector("[data-overlay]");
let menuIsOpen = false;

if (hamburger && mobileMenu && overlay) {
    hamburger.addEventListener("click", () => {
        if (!menuIsOpen) {
            hamburger.classList.add("open");
            mobileMenu.classList.remove("hidden");
            overlay.classList.add("visible");
            menuIsOpen = true;
        } else {
            hamburger.classList.remove("open");
            mobileMenu.classList.add("hidden");
            overlay.classList.remove("visible");
            menuIsOpen = false;
        }
    });
}
