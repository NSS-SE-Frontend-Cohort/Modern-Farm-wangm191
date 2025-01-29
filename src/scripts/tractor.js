import { addPlant, usePlants } from "./field.js";
import { createAsparagus } from "./seeds/asparagus.js";
import { createCorn } from "./seeds/corn.js";
import { createPotato } from "./seeds/potato.js";
import { createSoybean } from "./seeds/soybean.js";
import { createSunflower } from "./seeds/sunflower.js";
import { createWheat } from "./seeds/wheat.js";

export const plantSeeds = (yearlyPlan) => {
    const flatPlan = yearlyPlan.flat()

    flatPlan.forEach(seed => {
        switch (seed.toLowerCase()) {
            case "asparagus":
                addPlant(createAsparagus())
                break;
            case "corn":
                addPlant(createCorn())
                break;
            case "potato":
                addPlant(createPotato())
                break;
            case "soybean":
                addPlant(createSoybean())
                break;
            case "sunflower":
                addPlant(createSunflower())
                break;
            case "wheat":
                addPlant(createWheat())
                break;
        } 
    });

    return usePlants()
}