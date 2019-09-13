function setData(numElements) {
    var arr = [];
    for (var i = 0; i < numElements; i++) {
        arr[i] = Math.floor(Math.random() *(numElements+100));   
    }
    return arr;
}


//Insertion sort
//Good for small data sets
//Sort one item at a time. It puts the item in the correct position one at a time.
//Similiar to us sorting the cards dealt to us in a game. Sorting each card at a time.

function insertionSort(arr)
{
  for (var i = 1; i < arr.length; i++) 
  {
    if (arr[i] < arr[0]) 
    {
      //move current element to the first position 
      //unshift adds to beginning of array 
      //splice removes an element from array to create a subset array, have to use [0] to access the new array data
      arr.unshift(arr.splice(i,1)[0]);
    } 
    else if (arr[i] > arr[i-1]) 
    {
      //leave current element where it is
      continue;
    } 
    else {
      //find where element should go
      for (var j = 1; j < i; j++) {
        //if i element is less than j element but still greater than the element before j
        //j-1=4, i=5, j=6    4,5,6  was 4,6,5  then cut i and move it to j position
        if (arr[i] > arr[j-1] && arr[i] < arr[j]) 
        {
          //move element
          //add at position j and remove 0 elements. add sliced subset array -> arr.splice(i,1) access with [0]
          arr.splice(j,0,arr.splice(i,1)[0]);
        }
      }
    }
  }
  return arr;
}



var mynums = setData(6);
console.log(mynums.toString());
var sorted = insertionSort(mynums);
console.log(sorted.toString());
