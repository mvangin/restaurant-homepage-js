const menu = () => {


    const mainContent = document.querySelector(".content")
    const foodItem1 = document.createElement("div");
    const foodItem2 = document.createElement("div");
    const foodItem3 = document.createElement("div");
    const foodItem4 = document.createElement("div");

    foodItem1.textContent = "Salami";
    foodItem1.classList.add("foodItem");
    mainContent.appendChild(foodItem1);

    foodItem2.textContent = "Pastrami";
    foodItem2.classList.add("foodItem");
    mainContent.appendChild(foodItem2);

    foodItem3.textContent = "nuggets";
    foodItem3.classList.add("foodItem");
    mainContent.appendChild(foodItem3);

    foodItem4.textContent = "sasquatch";   
    foodItem4.classList.add("foodItem");
    mainContent.appendChild(foodItem4);
}

export default menu;