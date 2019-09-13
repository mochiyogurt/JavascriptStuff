// Initializing the Stack Class

function Stack(){
    this.dataStore = [];
    this.top = 0;
    this.push = push; // Inserting the element in Stack
    this.pop = pop; //Removing the element in Stack
    this.peek = peek;
    this.clear =  clear;
    this.length =  length;
}

// Adding an element in Stack
function push(element){
    this.dataStore[this.top++] =  element;
}

function peek(){
    return this.dataStore[this.top-1];

}

// Removing an element from the given stack
function pop(){
    return this.dataStore[--this.top];
}

function clear(){
    this.top=0;
}

function length(){
    return this.top;
}

var s =  new Stack();
s.push("David");
s.push("Raymond");
s.push("Mandy");
console.log("length of the stack is: "+s.length()); // 3
console.log(s.peek()); // Mandy
var popped =  s.pop();
console.log("The popped element is "+ popped); // Mandy
console.log(s.peek()); // Raymond
s.push("Cynthia");
s.clear();
console.log("The length is "+s.length()); // 0
s.push("Yvonne");
console.log("The length of new created Stack is "+s.length());// 1