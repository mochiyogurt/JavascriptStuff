function LList() {
    this.head = new Node("head");
    this.head.next = this.head;
    this.find = find;
    this.insert = insert;
    this.display = display;
    this.findPrevious = findPrevious;
    this.remove = remove;
} 


function Node(element) {
    this.element = element;
    this.next = null;
}

function find(item) {
    var currNode = this.head;
    while (currNode.element != item) { 
        currNode = currNode.next; 
    }
    return currNode;
}

function insert(newElement, item) {
    var newNode = new Node(newElement);
    var current = this.find(item);
    newNode.next = current.next;
    current.next = newNode;
}

function findPrevious(item) {
    var currNode = this.head;
    while (!(currNode.next == null) && (currNode.next.element != item)) { 
        currNode = currNode.next; 
    } 
    return currNode; 
}

function display() {
    var currNode = this.head;
    while (!(currNode.next == null) && !(currNode.next.element == "head")) {
        console.log(currNode.next.element);
        currNode = currNode.next; 
    } 
} 

function remove(item) {
    var currNode = this.find(item);
    var previous = this.findPrevious(item);
    if (currNode.next !== null) {
         previous.next = currNode.next;
         currNode.next.previous = currNode.previous;
         currNode.next = null;
         currNode.previous = null;
    } 
}


var cities = new LList();
cities.insert("Conway", "head");
cities.insert("Russellville", "Conway");
cities.insert("Carlisle", "Russellville");
cities.insert("Alma", "Carlisle"); 
cities.display(); 
console.log('\n\n');
cities.remove("Russellville");
cities.display();
