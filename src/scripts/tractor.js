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
        switch (seed) {
            case "Asparagus":
                addPlant(createAsparagus())
                break;
            case "Corn":
                addPlant(createCorn())
                break;
            case "Potato":
                addPlant(createPotato())
                break;
            case "Soybean":
                addPlant(createSoybean())
                break;
            case "Sunflower":
                addPlant(createSunflower())
                break;
            case "Wheat":
                addPlant(createWheat())
                break;
        } 
    });

    return usePlants()
}