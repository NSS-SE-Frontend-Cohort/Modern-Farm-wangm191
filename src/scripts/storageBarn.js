export const barn = () => {
    const storageBarn = []

    return {
        push: (crop) => storageBarn.push(crop),
        pop: () => {
            if ( storageBarn.length === 0 ){
                return "Nothing to pop from stack."
            }
            return storageBarn.pop()
        },
        peek: () => storageBarn[storageBarn.length - 1],
        isEmpty: () => storageBarn.length === 0 ? true : false, 
        getStorage: () => storageBarn
    }

}