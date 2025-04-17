const menuPage = () => {

    const contentArray = [];
    const menuArray = [];

    const mainMenuArray = [
        'Main Menu',
        'Steak with Emental cheese sauce , choice of carb',
        'Chicken with Buffalo gravy, choice of carb',

    ];
    menuArray.push(mainMenuArray);

    const carbArray = [
        'Carb Choice',
        'Steak chips',
        'French Fries',
        'Sweet Potato fries',
        'Mashed potato',
    ];
    menuArray.push(carbArray);

    menuArray.forEach((menuSection) => {
        const sectionList = document.createElement('ul');
        menuSection.forEach((menuItem) => {
            let elementToCreate;
            if (menuItem === 'Main Menu' || menuItem === 'Carb Choice') {
                elementToCreate = 'h2';

            } else {
                elementToCreate = 'li';
            }
            const listItem = document.createElement(elementToCreate);
            listItem.innerText = menuItem;
            sectionList.appendChild(listItem);
        })
        const sectionDiv = document.createElement('div');
        sectionDiv.appendChild(sectionList);
        contentArray.push(sectionDiv);
    })

    const pageDiv = document.getElementById('content');
    pageDiv.innerHTML = '';
    pageDiv.setAttribute('text-align', 'center');
    contentArray.forEach((content) => {
        pageDiv.appendChild(content);
    });

}

export { menuPage };