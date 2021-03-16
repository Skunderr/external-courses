function getDeepClone(clonedObj) {
    let clone;

    if (null === clonedObj || clonedObj !== "object") {
        return clonedObj;
    }

    if (Array.isArray(clonedObj)) {
        clone = [];

        clonedObj.forEach(elem => {
            clone[elem] = getDeepClone(elem);
        });
        
        return clone;
    }

    clone = {};

    for (let elem in clonedObj) {
        if (clonedObj.hasOwnProperty(elem)) {
            clone[elem] = getDeepClone(elem);
        }     
    }
    
    return clone;
}

module.exports = getDeepClone;
