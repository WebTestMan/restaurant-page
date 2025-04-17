import restaurantImage from "./restaurant.jpg";

function homepageLoad() {

    const contentArray = [];

    const pageHeadingDiv = document.createElement('div');
    const pageHeading = document.createElement('h1');
    pageHeading.innerText = 'Mixed Up!';
    pageHeadingDiv.appendChild(pageHeading);
    contentArray.push(pageHeadingDiv);

    const textDiv = document.createElement('div');
    const textPara = document.createElement('p');
    textPara.innerText = 'Mixed up is the brainchild of Mark GH. A restaurant where everything is fusion, we take different flavours and mix them up to create new and unique dishes.'
    textDiv.appendChild(textPara);
    contentArray.push(textDiv);

    const imgDiv = document.createElement('div');
    const imgDisplay = document.createElement('img');
    imgDisplay.setAttribute('src', restaurantImage);
    imgDiv.appendChild(imgDisplay);
    contentArray.push(imgDiv);

    const pageDiv = document.getElementById('content');
    pageDiv.innerHTML = '';
    contentArray.forEach((content) => {
        pageDiv.appendChild(content);
    });

}

export { homepageLoad };
