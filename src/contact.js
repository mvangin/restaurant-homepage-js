const contact = () => {

    const contactWrapper = document.createElement("div");
    contactWrapper.classList.add("contactWrapper");
    const mainContent = document.querySelector(".content")
    const contactTitle = document.createElement("div");
    const contactTagLine = document.createElement("div");

    contactTitle.innerHTML = `Come visit us! <br> `;
    contactTitle.classList.add("contact");
    contactWrapper.appendChild(contactTitle);


    contactTagLine.innerHTML = ` <i> La bobs restaurant <br> 345 tundra street <i>`;
    contactTagLine.classList.add("contactTagLine");
    contactWrapper.appendChild(contactTagLine);

    mainContent.appendChild(contactWrapper);
}

export default contact;