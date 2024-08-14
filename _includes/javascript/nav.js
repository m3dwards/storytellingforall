const hamburger = document.querySelector("[data-hamburger-menu]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const overlay = document.querySelector("[data-overlay]");
let menuIsOpen = false;

if (hamburger && mobileMenu && overlay) {
    function openMobileMenu() {
        // Turn off scroll when the user clicks on the menu
        // If necessary, scroll to the top of the page first
        hamburger.classList.add("open");
        mobileMenu.classList.remove("not-visible");
        overlay.classList.add("visible");
        menuIsOpen = true;
    }

    function closeMobileMenu() {
        // Re-enable scroll
        hamburger.classList.remove("open");
        mobileMenu.classList.add("not-visible");
        overlay.classList.remove("visible");
        menuIsOpen = false;
    }

    hamburger.addEventListener("click", () => {
        if (!menuIsOpen) {
            openMobileMenu();
        } else {
            closeMobileMenu();
        }
    });

    overlay.addEventListener("click", () => {
        closeMobileMenu();
    });
}
