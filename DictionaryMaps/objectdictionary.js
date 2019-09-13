const object = {1:"apple", 2:"orange"};

//Loop through object
for(const [key, value] of Object.entries(object)){
    console.log(key,value);
}

console.log(object[1]); //returns apple
object[1] = 'nectarines'; //update apple to nectarines
console.log(object[1]);  //returns nectarines