
const aboutPage = () => {

    const contentArray = [];
    const aboutDiv = document.createElement('div');
    const aboutText = document.createElement('p');
    const textToDisplay = `
    Really it all started with our signature Buffalo Gravy, two flavours that make chicken irrestible.
    Head chef Mark thought that maybe, others out there would appreciate the sweet, savoury and spicy taste.
    How did mixed up come to life? Well head chef has always had a passion about food and travel.
    His love of different cultures and tastes always had him mixing up different tastes.
    `;
    aboutText.innerText = textToDisplay;
    aboutDiv.appendChild(aboutText);
    aboutDiv.classList.add('background-image');
    contentArray.push(aboutDiv);

    const pageDiv = document.getElementById('content');
    pageDiv.innerHTML = '';
    contentArray.forEach((content) => {
        pageDiv.appendChild(content);
    });

}

export { aboutPage };