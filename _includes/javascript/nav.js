const hamburger = document.querySelector("[data-hamburger-menu]");
const mobileMenu = document.querySelector("[data-mobile-menu]");
const overlay = document.querySelector("[data-overlay]");
const mobileMenuItems = document.querySelectorAll("[data-mobile-menu-item]");
let menuIsOpen = false;

if (hamburger && mobileMenu && overlay && mobileMenuItems) {
    function openMobileMenu() {
        // document.body.scrollTo(0, 0); // There is a method that scrolls to the top of the page. This ain't it.
        document.body.style.overflow = "hidden";
        hamburger.classList.add("open");
        mobileMenu.classList.remove("not-visible");
        overlay.classList.add("visible");
        menuIsOpen = true;
    }

    function closeMobileMenu() {
        document.body.style.overflow = "auto";
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

    mobileMenuItems.forEach((item) => {
        item.addEventListener("click", () => {
            closeMobileMenu();
        });
    });
}
