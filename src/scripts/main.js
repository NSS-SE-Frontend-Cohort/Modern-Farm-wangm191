import { catalog, renderCatalog } from "./catalog.js"
import { harvestPlants } from "./harvester.js"
import { createPlan } from "./plan.js"
import { processor } from "./processingFacility.js"
import { barn } from "./storageBarn.js"
import { plantSeeds } from "./tractor.js"

console.log("Welcome to the main module")

const yearlyPlan = createPlan()

const plantedArray = plantSeeds(yearlyPlan)

const harvestedArray = harvestPlants(plantedArray)

const storageBarn = barn()

if (storageBarn.isEmpty()) {
    console.log("Storage Barn is empty")
}
console.log(storageBarn.push(harvestedArray[0]))
console.log(storageBarn.peek())
console.log(storageBarn.push(harvestedArray[1]))
console.log(storageBarn.peek())

if (!storageBarn.isEmpty()) {
    console.log("Storage Barn contains crop")
}
console.log(storageBarn.pop())
console.log(storageBarn.getStorage())

const processorFacility = processor()

console.log(processorFacility.isEmpty())
console.log(processorFacility.enqueue(harvestedArray[0]))
console.log(processorFacility.enqueue(harvestedArray[1]))

console.log(processorFacility.next())
console.log(processorFacility.last())
console.log(processorFacility.size())

console.log(processorFacility.dequeue())
console.log(processorFacility.isEmpty())

const catalogHtml = catalog(harvestedArray)
renderCatalog(catalogHtml)
