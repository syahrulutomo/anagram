/**
 * Check if given number is exist in given array
 * 
 * @param {*} number 
 * @param {*} arr 
 * @returns boolean
 */
function isExist(number, arr) {
    if(Array.isArray(arr)) {
      for(let i = 0; i < arr.length; i++) {
        // return true if found the same number
        if(arr[i] === number) {
          return true
        }
      }
    }
  
    return false;
}

module.exports = isExist; 