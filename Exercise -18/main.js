var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var countriestovisit = ["swizerland", "canada", "japan", "unitedkingdom", "germany"]; // making an array of countries and print its orignal order 
console.log("orignal order:", countriestovisit); // 
console.log("Alphabetical order:", __spreadArray([], countriestovisit, true).sort()); //print the array in alphabetical order without modifying the actual array list
console.log("still in orignal order:", countriestovisit); //show that tha array is still in its orignal order
console.log("Reverse order", __spreadArray([], countriestovisit, true).reverse()); //print the array in reversed order without  modifying the actual array list
console.log("still in orignal order:", countriestovisit); // show that the array is still in  its orignal order
console.log("orignal Array Reversed:", countriestovisit.reverse()); //we have changed the orignal array order now
console.log("Back to orignal order:", countriestovisit.reverse()); // print the array to show that its back to its orignal order
console.log("sorted in Alphabetical order:", countriestovisit.sort()); //print the array to show that it has been changed in alphabetical order now
console.log("orignal Array Reversed again:", countriestovisit.reverse()); //we have changed again the orignal array order now in reverse order again
