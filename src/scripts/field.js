const plantsArray = []

export const addPlant = (seed) => Array.isArray(seed) ? seed.forEach(element => plantsArray.push(element)) : plantsArray.push(seed);

export const usePlants = () => JSON.parse(JSON.stringify(plantsArray));