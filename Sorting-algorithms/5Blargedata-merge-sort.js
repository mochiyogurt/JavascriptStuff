//Merge Sort use for large data sets
//Divide the unsorted list into n sublists, each containing 1 element (a list of 1 element is considered sorted).
//Repeatedly merge sublists to produce new sorted sublists until there is only 1 sublist remaining. 
//This will be the sorted list.

//Divide the list into two (or more) sublists
//Sort each sublist (Conquer)
//Merge them into one list intelligently

//65318724
//65 31 87 24
//56 13 78 24
//1356 2478
//12345678

//Solution from https://wsvincent.com/javascript-algorithms-mergesort/

function merge(left, right) {
    let arr = [];
  
    while ((left.length >0 ) && (right.length >0)) {
      if (left[0] < right[0]) {
        arr.push(left.shift());
      } else {
        arr.push(right.shift());
      }
    }
    return arr.concat(left.slice().concat(right.slice()));
  }
  
  function mergeSort(arr) {
    if (arr.length < 2) {
      return arr;
    }
  
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
  
    return merge(mergeSort(left), mergeSort(right));
  }

var a= [];
for(var i=0; i<10; i++){
    a[i] = Math.floor(Math.random()*100 + 1);
}

console.log(a);
console.log();
console.log(mergeSort(a));
