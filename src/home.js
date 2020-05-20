const home = () => {



    const element = document.createElement("h1");
    const mainContent = document.querySelector(".content")
    element.classList = "home";
    element.innerHTML = "This is la-bobs restaurant. The best restaurant in town!";
    mainContent.appendChild(element);
}

export default home;
