import menu from "./menu";
import clear from "./clear";

const home = () => {


    const homeWrapper = document.createElement("div");


    const elementh1 = document.createElement("h1");
    const elementh2 = document.createElement("h1");

    homeWrapper.classList.add("homeWrapper");


    const mainContent = document.querySelector(".content")
    elementh1.classList = "home";
    elementh2.classList = "homeTagLine";

    elementh1.innerHTML = "This is la-bobs restaurant.";
    elementh2.innerHTML = "<i> The best restuarant in town </i>";

    const menuButtonHome = document.createElement("Button");
    menuButtonHome.classList.add("menuButtonHome");
    menuButtonHome.textContent = "See our Menu!";
    
    homeWrapper.appendChild(elementh1);
    homeWrapper.appendChild(elementh2);


    mainContent.appendChild(homeWrapper);
    mainContent.appendChild(menuButtonHome);

    menuButtonHome.addEventListener("click", () => {
        clear();
        menu();
    });




}

export default home;
