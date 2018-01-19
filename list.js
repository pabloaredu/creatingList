var node = require('./node')


// Creating the list
var list = [];

var addNumber = function storeValuesToTheList(value) {
  list.push(value);
  return list;
}


// Sorting the list
var sortList = function sortValuesInTheList() {
  finalList = list.sort(compare);
  return finalList;
}

var compare = function sortInAscendingOrder(a,b) {
    return a - b;
}

// console.log(sortList(list));




// Connecting Modules
exports.addNumber = addNumber;
exports.sortList = sortList;