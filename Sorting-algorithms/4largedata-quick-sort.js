//Quick Sort is the fastest algorithm for large data sets
//Divide data set into left right sections that is less than or greater than a pivot value
//Split the left/right sections into subarrays and sort on pivot value
//sorted subarrays sorted left/right sections are concatenated back into a sorted array
function qSort(arr){
    if(arr.length == 0){
        return [];
    }
    var left = [];
    var right = [];
    var pivot = arr[0];
    for(var i=1; i<arr.length; i++){
        if(arr[i]<pivot){
            left.push(arr[i]);
        }
        else {
            right.push(arr[i]);
        }
    }

    return qSort(left).concat(pivot,qSort(right));
}

var a= [];
for(var i=0; i<10; i++){
    a[i] = Math.floor(Math.random()*100 + 1);
}

console.log(a); // Output 1 which prints random array values
console.log();
console.log(qSort(a));
