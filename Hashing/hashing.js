// This is initialization of hash table
function Hashtable(){
    this.table = new Array(137); // 137 was declared to avoid any collisions.
    this.simpleHash = simpleHash;
    this.showDistro = showDistro;
    this.put = put;
}

function simpleHash(data){
    var total = 0;
    for(var i=0; i<data.length; ++i){
        total += data.charCodeAt(i);
    }
    return total % this.table.length;
}

function put(data){
    var pos = this.simpleHash(data);
    this.table[pos] = data;
}


// To show the basic distribution of hashing functionality (key and value pairs)
function showDistro(){
    var n=0;
    for(var i=0; i< this.table.length; ++i){
        if(this.table[i]!= undefined){
            console.log(i+ " : "+ this.table[i]);
        }
    }
}

var someNames = ["David", "Jennifer", "Donnie", "Raymond", "Cynthia","Mike", "Clayton", "Danny","Jonathan"];
console.log(someNames);
var hTable = new Hashtable(); // Initializing the hash table
for(var i=0; i<someNames.length; i++){
    hTable.put(someNames[i]);
}
hTable.showDistro();