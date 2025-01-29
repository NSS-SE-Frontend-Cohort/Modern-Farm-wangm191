export const catalog = (harvestArray) => {
    let harvestHtml = '';

    harvestArray.map(plant => {
        harvestHtml += `<section class="plant__type"> ${plant.type}</section>`;
    }).join("")

    return harvestHtml;
}

export const renderCatalog = (harvestHtml) => {
    const harvestString = document.getElementById('messages')

    if ( harvestString ) {
        harvestString.innerHTML = harvestHtml
    }
    else {
        console.error('Could not find element with id "messages"');
    }
}