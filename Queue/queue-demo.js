function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function enqueue(element) {
    this.dataStore.push(element);
} 

function dequeue() {
    return this.dataStore.shift(); 
} 

function front() {
    return this.dataStore[0]; 
}

function back() {
    return this.dataStore[this.dataStore.length-1]; 
} 

function toString() {
    var retStr = "";
    for (var i = 0; i < this.dataStore.length; ++i) {
        retStr += this.dataStore[i] + "\n";
    } 
return retStr;
} 

function empty() {
    if (this.dataStore.length == 0) {
        return true; 
    }
    else { 
        return false; 
    }
}

// test program

var q = new Queue();
q.enqueue("Cynthia");
q.enqueue("Raymond");
q.enqueue("Parker");

console.log(q.toString()); // Output 1  fetching the queue value
q.dequeue();
console.log(q.toString()); // Output 2
console.log("Front of queue: "+ q.front()); //Output 3
console.log("Rear of queue: "+q.back()); // Output 4
q.dequeue();
console.log("Front of queue: "+ q.front());
console.log("Rear of queue: "+q.back()); 

