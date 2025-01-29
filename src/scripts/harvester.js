export const harvestPlants = (plantsArray) => {
    const harvestArray = []
    let currentId = 0;
    plantsArray.forEach(plant => {
        if (plant.type.toLowerCase() !== "corn"){
            for ( let i = 0; i < plant.output; i++ ) {
                harvestArray.push({ ...plant, id: currentId++ });
            }
        }
        else if (plant.type.toLowerCase() === "corn") {
            for ( let i = 0; i < plant.output / 2; i++ ){
                harvestArray.push({ ...plant, id: currentId++ });
            }
        }
    });

    return harvestArray;
}