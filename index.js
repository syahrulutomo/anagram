var mapAnagram = require("./utils/map");
var collectCharCode = require("./utils/collect");

const data = ['kita', 'atik', 'tika', 'aku', 'kia', 'makan', 'kua'];

// get unique chararactercode from the data 
const charCodes = collectCharCode(data);

console.log(mapAnagram(charCodes, data));