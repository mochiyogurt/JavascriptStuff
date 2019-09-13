class Node{
    constructor(value){
        this.value=value;
        this.next=null;
        this.prev=null;
    }
}
class DoublyLinkedList {
    constructor(value) {
      this.head = {
        value: value,
        next: null,
        prev: null
      };
      this.tail = this.head;
      this.length = 1;
    }
    append(value) {
      const newNode = new Node(value);
      console.log(newNode)
      newNode.prev = this.tail
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
      return this;
    }
    prepend(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head.prev = newNode
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
    insert(index, value){
      //Check for proper parameters;
      if(index >= this.length) {
        return this.append(value);
      }
      //1,10,5,16 insert 99 between 10 and 5
      const newNode = new Node(value);
      const leader = this.traverseToIndex(index-1); //10
      const follower = leader.next; //5
      leader.next = newNode;  //set leader.next to 99 newNode
      newNode.prev = leader; //set newNode 99 previous to leader 10
      newNode.next = follower; //set newNode 99 next to follower 5
      follower.prev = newNode;
      this.length++;
      return this.printList();
    }

    //1,10,99,5,16,88
    remove(index){
        const leader = this.traverseToIndex(index-1); //get leader 10
        const unwantedNode = leader.next; //get unwanted node as leader next which is 99
        leader.next = unwantedNode.next; //set leader.next as unwanted node 99's next which is 5
        const follower = leader.next;
        follower.prev = leader;
        this.length--;
        console.log(this);
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
  }
  
  let myLinkedList = new DoublyLinkedList(10);
  myLinkedList.append(5)
  myLinkedList.append(16)
  myLinkedList.prepend(1)
  myLinkedList.insert(2, 99)
  myLinkedList.insert(20, 88)
  myLinkedList.printList()
  myLinkedList.remove(2)
  myLinkedList.printList()
  // myLinkedList.reverse()
  
  
  
  