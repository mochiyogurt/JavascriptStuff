/***
let myLinkedList = {
    head: {
        value: 10,
        next: {
            value: 5,
            next: {
                value: 16,
                next: null
            }
        }
    }
}
***/
class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    };
    this.tail = this.head;
    this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
  printList() {
    const array = [];
    let currentNode = this.head;
    while(currentNode !== null){
        array.push(currentNode.value)
        currentNode = currentNode.next
    }
    return console.log(array);
  }
  add(index, value){
    //Check for proper parameters;
    if(index >= this.length) {
      return this.append(value);
    }
    
    const newNode = new Node(value);
    const leader = this.traverseToIndex(index-1);
    const holdingPointer = leader.next;
    leader.next = newNode;
    newNode.next = holdingPointer;
    this.length++;
    return this.printList();
  }
  traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while(counter !== index){
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }
//1,10,99,5,16,88
  remove(index){
      const leader = this.traverseToIndex(index-1); //get leader 10
      const unwantedNode = leader.next; //get unwanted node as leader next which is 99
      leader.next = unwantedNode.next; //set leader.next as unwanted node 99's next which is 5
      this.length--;
      return this.printList();
  }

}

let myLinkedList = new LinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.add(2, 99);
myLinkedList.add(20, 88);
myLinkedList.remove(2);
