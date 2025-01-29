export const catalog = (harvestArray) => {
    let harvestHtml = '';

    const emojiMap = {
        'asparagus': '<i> &#129382</i>', 
        'corn': '<i> &#127805</i>',
        'potato': '<i> &#129364</i>',
        'soybean': '<i> &#127793</i>',
        'sunflower': '<i> &#127803</i>',
        'wheat': '<i> &#127806</i>'
    }

    harvestArray.sort((a, b) => {
        return a.type.toLowerCase().localeCompare(b.type.toLowerCase());
    });

    harvestArray.map(plant => {
        const emoji = emojiMap[plant.type.toLowerCase()];
        harvestHtml += `<section class="plant__type">${plant.type}&nbsp;${emoji} </section>`;
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