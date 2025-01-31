export const processor = () => {
    let processorQueue = [];

    return {
        enqueue: (crop) => {
            if (processorQueue.length >= 4 ){
                return console.log("Processor Facility is full")
            }
            return processorQueue.push(crop)
        },
        dequeue: () => {
            if (processorQueue.length === 0) {
                return console.log("Processor Facility is empty.")}
            return processorQueue.shift()},
        isEmpty: () => processorQueue.length === 0 ? true : false,
        next: () => {
            if (processorQueue.length === 0) {
                return console.log("No elements in queue.")
            }
            return processorQueue[0]
        },
        last: () => {
            if (processorQueue.length === 0) {
                return console.log("No elements in queue.")
            }
            return processorQueue[processorQueue.length -1]
        },
        size: () => processorQueue.length
        
    }
}