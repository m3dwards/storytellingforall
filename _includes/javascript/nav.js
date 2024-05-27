const menu = document.querySelector("[data-hamburger-menu]");

if (menu) {
    menu.addEventListener("click", () => {
        console.log("this is the menu click event");
        // Show/hide the mobile menu: select the mobile menu element, add/remove the show/hide class
    });
}
