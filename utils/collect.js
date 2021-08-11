var isExist = require("./isExist");

/**
 * Get array of character code from given array
 * 
 * @param {*} arr 
 * @returns array
 */
const collectCharCode = function(arr) {
  const classified = [];
  // validate if arr is array
  if(Array.isArray(arr)) {
    arr.forEach(function(current){
      let sumOfCode = 0;
      
      // get the character code at each word in array
      for(let i = 0; i < current.length; i++) {
        let code = current.charCodeAt(i);
        sumOfCode += code;
      }
      // push sumOfCode to classified if it doesn't exist
      if(!isExist(sumOfCode, classified)) {
        classified.push(sumOfCode);
      }
      
    });
  } else {
    return;
  }

  // return classified
  return classified;
};


module.exports = collectCharCode; 