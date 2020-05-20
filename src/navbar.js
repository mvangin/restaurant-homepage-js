import clear from "./clear";
import contact from "./contact";
import home from "./home";
import menu from "./menu";


const navbar = () => {
    const navbar = document.querySelector(".navbar");
    const homeButton = document.createElement("Button");
    homeButton.classList.add("navButton");
    homeButton.textContent = "Home";
    navbar.appendChild(homeButton);

    homeButton.addEventListener("click", () => {
        clear();
        home();
    });

    const menuButton = document.createElement("Button");
    menuButton.classList.add("navButton");
    menuButton.textContent = "Menu";
    navbar.appendChild(menuButton);

    menuButton.addEventListener("click", () => {
        clear();
        menu();
    });

    const contactButton = document.createElement("Button");

    contactButton.classList.add("navButton");
    contactButton.textContent = "Contact";
    navbar.appendChild(contactButton);

    contactButton.addEventListener("click", () => {
        clear();
        contact();
    });


}

export default navbar;