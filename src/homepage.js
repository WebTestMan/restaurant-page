import restaurantImage from "./restaurant.jpg";

function homepageLoad() {

    const pageDiv = document.querySelector('#content');
    const pageHeadingDiv = document.createElement('div');
    const pageHeading = document.createElement('h1');
    pageHeading.innerText = 'Mixed Up!';
    pageHeadingDiv.appendChild(pageHeading);
    pageDiv.appendChild(pageHeadingDiv);

    const imgDiv = document.createElement('div');
    const imgDisplay = document.createElement('img');
    imgDisplay.setAttribute('src', restaurantImage);
    imgDiv.appendChild(imgDisplay);
    pageDiv.appendChild(imgDiv);


    const textDiv = document.createElement('div');
    const textPara = document.createElement('p');
    textPara.innerText = 'Mixed up is the brainchild of Mark GH. A restaurant where everything is fusion, we take different flavours and mix them up to create new and unique dishes.'
    textDiv.appendChild(textPara);
    pageDiv.appendChild(textDiv);

}

export { homepageLoad };
