//Lists have ordered sequence of data and there is no predefined number of elements to be defined in List.
//If a list has no elements then it is referred to as an empty list.

function List() {   
       this.listSize = 0;   
       this.pos = 0;   
       this.dataStore = []; // initializes an empty array to store list elements   this.clear = clear;   this.find = find;
    
       this.toString = toString;
       this.append = append;
       this.remove = remove;
       this.length = length;
        } 
    
    // Length of the list
    function length() {   return this.listSize; } 
    
    // Appending the element
    
    function append(element) {   this.dataStore[this.listSize++] = element; } 
    
    // Removing the element
    
    function find(element) {
        for (var i = 0; i < this.dataStore.length; ++i) { 
            if (this.dataStore[i] == element) {         return i;      }   }   return -1; }
    
    // Finding the element
    
    function remove(element) { 
        var foundAt = this.find(element); 
        if (foundAt > -1) {
            this.dataStore.splice(foundAt,1);
            --this.listSize;
              return true;
                } 
        return false;
    } 
    
    
    
    
    // Retrieving the List elements
    
    function toString() { 
        return this.dataStore;
    
    } 

    function clear(){
        delete this.dataStore;
        this.dataStore =[];
        this.listSize = 0;
    }
    
    var names = new List();
    names.append("Cynthia");
    names.append("Raymond");
    names.append("Parker");
    console.log(names);
    console.log(names.toString());
    console.log("The length of the given list: "+ names.length());
    
    
    