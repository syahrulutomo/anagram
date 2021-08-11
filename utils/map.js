/**
 * Group the given data based on given charCodeArray
 * 
 * @param {*} charCodeArray 
 * @param {*} data 
 * @returns array || string
 */
const mapAnagram = function(charCodeArray, data) {
    //check if given data is an array
    if(Array.isArray(data) && Array.isArray(charCodeArray)) {
        const classified = [];
        charCodeArray.forEach(function(current, index){
            // create new array for each 'current'
            const temp = [];
            // find all words that have same character code as 'current'
            for(let i = 0; i < data.length; i++) {
                let sumOfCode = 0;
                for(let w = 0; w < data[i].length; w++) {
                    sumOfCode +=  data[i].charCodeAt(w);
                }
                
                // if the caracter code is same, push to 'temp'
                if(current === sumOfCode) {
                    temp.push(data[i]);
                }
            }

            // if temp is not empty, push temp to classified
            if(temp.length > 0) {
                classified.push(temp);
            }
        });

        // if classified is not empty, return classified
        if(classified.length > 0) {
            return classified;
        }
    }

    // if given parameters are not array, return this string
    return 'Data should be an array';
}

module.exports = mapAnagram;