//Selection Sort
//Find the smallest number and swap it with the first element.
//Find the 2nd smallest number and swap it with the 2nd element.
//Find the 3rd smallest number and swap it with the 3rd element.
//Repeat finding the smallest element and swapping it.

function setData(numElements) {
    var arr = [];
    for (var i = 0; i < numElements; i++) {
        arr[i] = Math.floor(Math.random() *(numElements+3));   
    }
    return arr;
}


//SORT NUMERICALLY WITH function(a, b){return a - b}
//The compare function should return a negative, zero, or positive value, depending on the arguments:
//function(a, b){return a - b}
//When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
//If the result is negative a is sorted before b.
//If the result is positive b is sorted before a.
//If the result is 0 no changes are done with the sort order of the two values.

function selectionSort(arr, compare_Function) {

    function compare(a, b) {
     return a - b;
     } 
    var min = 0;
    var index = 0;
    var temp = 0;
  
   //{Function} compare_Function Compare function
    compare_Function = compare_Function || compare;
  
    for (var i = 0; i < arr.length; i++) {
      index = i;
      min = arr[i];
  
      for (var j = i + 1; j < arr.length; j++) {
        if (compare_Function(min, arr[j]) > 0) {
          min = arr[j];
          index = j;
        }
      }
  
      temp = arr[i];
      arr[i] = min;
      arr[index] = temp;
    }
  
    //return sorted arr
    return arr;
  }
  

var mynums = setData(5);
console.log(mynums.toString());
console.log(selectionSort(mynums, function(a, b) { return a - b; })); 
console.log(selectionSort(mynums, function(a, b) { return b - a; }));