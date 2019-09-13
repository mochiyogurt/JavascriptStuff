//Bubble Sort
//Use for small data sets, compare 2 elements at a time and swap them, and keep repeating

function setData(numElements) {
    var arr = [];
    for (var i = 0; i < numElements; i++) {
        arr[i] = Math.floor(Math.random() *(numElements+3));   
    }
    return arr;
}

function bubbleSort(arr) {
    var length = arr.length;
    //Number of passes
    for (var i = 0; i < length; i++) { 
        //Notice that j < (length - i)
        for (var j = 0; j < (length - i - 1); j++) { 
            //Compare the adjacent positions
            if(arr[j] > arr[j+1]) {
                //Swap the numbers
                var tmp = arr[j];  //Temporary variable to hold the current number
                arr[j] = arr[j+1]; //Replace current number with adjacent number
                arr[j+1] = tmp; //Replace adjacent number with current number
            }
        }        
    }
    return arr;
}

var mynums = setData(5);
console.log(mynums.toString());
var sorted = bubbleSort(mynums);
console.log();
console.log(sorted.toString());

