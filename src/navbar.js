const navbar = () => {

    const contactButton = document.createElement("Button");
    const navbar = document.querySelector(".navbar");

    contactButton.classList.add("navButton");
    contactButton.textContent = "Contact";
    navbar.appendChild(contactButton);

    const menuButton = document.createElement("Button");

    menuButton.classList.add("navButton");
    menuButton.textContent = "Menu";
    navbar.appendChild(menuButton);

    const homeButton = document.createElement("Button");

    homeButton.classList.add("navButton");
    homeButton.textContent = "Home";
    navbar.appendChild(homeButton);
}

export default navbar;