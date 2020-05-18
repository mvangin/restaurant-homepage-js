const initialContent = () => {

    const bannerImg = document.createElement("img");
    bannerImg.src="images/restaurant-banner.jpg";
    bannerImg.style.width = "100%";

    const bannerEle = document.querySelector(".banner");
    bannerEle.appendChild(bannerImg);

}

export default initialContent;