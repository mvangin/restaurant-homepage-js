const menu = () => {


    const mainContent = document.querySelector(".content")
    const menuWrapper = document.createElement("div");

    const menuTitle = document.createElement("div");
    const foodItem1 = document.createElement("div");
    const foodItem2 = document.createElement("div");
    const foodItem3 = document.createElement("div");
    const foodItem4 = document.createElement("div");

    menuWrapper.classList.add("menuWrapper");

    menuTitle.textContent = "Menu";
    menuTitle.classList.add("menuTitle");
    menuWrapper.appendChild(menuTitle);

    foodItem1.textContent = "Salami";
    foodItem1.classList.add("foodItem");
    menuWrapper.appendChild(foodItem1);

    foodItem2.textContent = "Pastrami";
    foodItem2.classList.add("foodItem");
    menuWrapper.appendChild(foodItem2);

    foodItem3.textContent = "nuggets";
    foodItem3.classList.add("foodItem");
    menuWrapper.appendChild(foodItem3);

    foodItem4.textContent = "sasquatch";   
    foodItem4.classList.add("foodItem");
    menuWrapper.appendChild(foodItem4);


    mainContent.appendChild(menuWrapper);
}

export default menu;