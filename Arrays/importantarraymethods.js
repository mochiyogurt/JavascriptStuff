//var arr = ["QA", 2, true];
//console.log(arr);
//update element
//arr[2]=false;
//console.log(arr);

//The push() method adds new element and returns the array's length.
//var arr = ["QA", 2, true];
//var arraylength = arr.push(3.14);
//console.log(arr);
//console.log(arraylength); //returns 4

//The pop() method removes the last element from an array: 
//The pop() method returns the value that was "popped out":
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//var popped = fruits.pop();
//console.log(fruits);
//console.log(popped);

//The shift() method removes 1st array element and shifts all other elements to a lower index.
//The shift() method returns the string that was shifted out/popped out from 1st spot
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//var shifted = fruits.shift();  
//console.log(fruits);
//console.log(shifted);

//The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements: 
//The unshift() method returns the new array length.
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//var arraylength = fruits.unshift("Lemon");    // Adds a new element "Lemon" to fruits 
//console.log(fruits);
//console.log(arraylength);

//Since JavaScript arrays are objects, elements can be deleted by using the JavaScript operator delete:
//Using delete may leave undefined holes in the array. Use pop() or shift() instead.
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//delete fruits[0]; 
//console.log(fruits); 

//The toString() method convert array to String.
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits.toString());

//The join() method also joins all array elements into a string.
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//console.log(fruits.join(", "));

//The splice() method can be used to add new items to and remove items from an array: 
//The first parameter (2) defines the position where new elements should be added (spliced in).
//The second parameter (0) defines how many elements should be removed.
//The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.
//The splice() method returns an array with the deleted items: 
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(2, 0, "Lemon", "Kiwi");
//console.log(fruits);
//var fruits2 = ["Banana", "Orange", "Apple", "Mango"];
//var deleted = fruits2.splice(2, 2, "Lemon", "Kiwi");
//console.log(fruits2);
//console.log(deleted);
//With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array: 
//var fruits = ["Banana", "Orange", "Apple", "Mango"];
//fruits.splice(0, 1);  
//console.log(fruits);

//The concat() method creates a new array by merging (concatenating) existing arrays:
//The concat() method does not change the existing arrays. It always returns a new array.
//var arr1 = ["Cecilie", "Lone"];
//var arr2 = ["Emil", "Tobias", "Linus"];
//var arr3 = ["Robin", "Morgan"];
//var myChildren = arr1.concat(arr2, arr3);   // Concatenates arr1 with arr2 and arr3 
//console.log(myChildren);

//The concat() method can also take values as arguments:
//var arr1 = ["Charles", "Lena"];
//var myChildren = arr1.concat(["Esther", "Thomas"]);  
//console.log(myChildren);

//The slice() method slices out a piece of an array into a new array.
//This example slices out a part of an array starting from array element 3 ("Apple"):
//var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//var citrus = fruits.slice(3);
//console.log(citrus);
//[ 'Apple', 'Mango' ]

//The method then selects elements from the start argument, and up to (but not including) the end argument.
//var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//var citrus = fruits.slice(1, 3);
//console.log(citrus);
//[ 'Orange', 'Lemon' ]

//If the end argument is omitted, like in the first examples, the slice() method slices out the rest of the array.
//var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
//var citrus = fruits.slice(2);
//console.log(citrus);
//[ 'Lemon', 'Apple', 'Mango' ]

//SORT() sorts an array alphabetically
//var fruits = ["Watermelon", "Banana", "Orange", "Apple", "Mango"];
//fruits.sort();
//console.log(fruits);


//The reverse() method reverses the elements in an array.
//You can use it to sort an array in descending order: 
//var fruits = ["Banana", "Orange", "Apple", "Mango", "Watermelon"];
//fruits.sort();        // First sort the elements of fruits
//fruits.reverse();     // Then reverse the order of the elements 
//console.log(fruits);



//SORT NUMERICALLY WITH function(a, b){return a - b}
//The compare function should return a negative, zero, or positive value, depending on the arguments:
//function(a, b){return a - b}
//When the sort() function compares two values, it sends the values to the compare function, and sorts the values according to the returned (negative, zero, positive) value.
//If the result is negative a is sorted before b.
//If the result is positive b is sorted before a.
//If the result is 0 no changes are done with the sort order of the two values.
//Example:
//The compare function compares all the values in the array, two values at a time (a, b).
//When comparing 40 and 100, the sort() method calls the compare function(40, 100).
//The function calculates 40 - 100 (a - b), and since the result is negative (-60),  the sort function will sort 40 as a value lower than 100.
//sort ascending
//var grades = [90, 100, 85, 95, 95, 98];
//grades.sort(function(a, b){return a - b});
//console.log(grades); //[ 85, 90, 95, 95, 98, 100 ]
//sort descending
//var grades2 = [90, 100, 85, 95, 95, 98];
//grades2.sort(function(a, b){return b - a});
//console.log(grades2); //[ 100, 98, 95, 95, 90, 85 ]


//Sorting an Array in Random Order
//var points = [40, 100, 1, 5, 25, 10];
//points.sort(function(a, b){return 0.5 - Math.random()});
//console.log(points);

//Sorting Object Arrays
//Even if objects have properties of different data types, the sort() method can be used to sort the array.
//The solution is to write a compare function to compare the property values:
var cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
  ]; 
cars.sort(function(a, b){return a.year - b.year}); 
console.log(cars);


//Max Math.max.apply(null, arr);
//Min Math.min.apply(null, arr);
//var grades = [90, 100, 85, 65, 95, 98];
//var max = Math.max.apply(null, grades);
//var min = Math.min.apply(null, grades);
//console.log(max);
//console.log(min);

let arr = ['apples', 'oranges', 'grapes'];
console.log(arr);

