function Queue(){
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue =  dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty =  empty;
}

// Inserting element in queue

function enqueue(element){
    this.dataStore.push(element);
}

// Removing an element from queue

function dequeue(){
    return this.dataStore.shift();
}

function front(){
    return this.dataStore[0];
}

function back(){
    return this.dataStore[this.dataStore.length - 1];
}