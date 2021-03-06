function getSliceArr(array, begin, end) {
    const sliceArr = [];

    for (let elem of array) {
        const index = array.indexOf(elem);

        if (arguments.length === 3 && index >= begin && index < end) {
            sliceArr.push(elem);
        } 
        
        if (end < 0 && index < Math.abs(begin)-1 && index >= Math.abs(end)-1) {
            sliceArr.push(elem);
        }

        if (arguments.length === 2 && index >= begin) {    
            sliceArr.push(elem);
        }
    
        if (arguments.length === 1) {
            sliceArr.push(elem);
        }
    }

    return sliceArr;
}

module.exports = getSliceArr;
