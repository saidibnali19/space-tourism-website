const menuToggler = document.querySelector("[data-menu-toggler]");
const menu = document.querySelector("[data-header-menu]");
menuToggler.addEventListener("click", function(){
    const visibility = menu.getAttribute("data-visible");
    if (visibility === "false"){
        menu.setAttribute("data-visible", true);
        menuToggler.style.backgroundImage = "url('../images/hamburger-menu-close.svg')";
    }
    else{
        menu.setAttribute("data-visible", false);
        menuToggler.style.backgroundImage = "url('../images/hamburger-menu.svg')";
    }
})