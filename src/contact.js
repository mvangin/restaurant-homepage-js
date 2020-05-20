const contact = () => {


    const mainContent = document.querySelector(".content")
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `Come visit us! <br> La bobs restaurant <br> 345 tundra street`;
    newDiv.classList.add("contact");
    mainContent.appendChild(newDiv);
}

export default contact;