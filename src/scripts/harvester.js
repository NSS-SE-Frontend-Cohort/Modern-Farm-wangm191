export const harvestPlants = (plantsArray) => {
    const harvestArray = []
    plantsArray.forEach(plant => {
        if (plant.type !== "Corn"){
            for ( let i = 0; i < plant.output; i++ ) {
                harvestArray.push(plant)
            }
        }
        else if (plant.type === "Corn") {
            for ( let i = 0; i < plant.output / 2; i++ ){
                harvestArray.push(plant)
            }
        }
    });

    return harvestArray;
}