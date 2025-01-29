import { catalog, renderCatalog } from "./catalog.js"
import { harvestPlants } from "./harvester.js"
import { createPlan } from "./plan.js"
import { plantSeeds } from "./tractor.js"

console.log("Welcome to the main module")

const yearlyPlan = createPlan()

const plantedArray = plantSeeds(yearlyPlan)

const harvestedArray = harvestPlants(plantedArray)

const catalogHtml = catalog(harvestedArray)
renderCatalog(catalogHtml)
