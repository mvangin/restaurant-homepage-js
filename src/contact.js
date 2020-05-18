const contact = () => {


    const mainContent = document.querySelector(".content")
    const newDiv = document.createElement("div");
    newDiv.innerHTML = `La bobs restaurant <br> 345 tundra street <br> Canada`;
    newDiv.classList.add("contact");
    mainContent.appendChild(newDiv);
}

export default contact;