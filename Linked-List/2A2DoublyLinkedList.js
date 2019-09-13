function DoublyLinkedList() {
    
        let Node = function(element){
    
            this.element = element;
            this.next = null;
            this.prev = null; //NEW
        };
    
        let length = 0;
        let head = null;
        let tail = null; //NEW
    
        this.append = function(element){
    
            let node = new Node(element),current;
    
            if (head === null){ //first node on list, 1 item so head and tail is the same
                head = node;
                tail = node; //NEW
            } else {
    
                // Bagel, Cream Cheese, Jelly
                //attach to the tail node //NEW
                tail.next = node;    //Make the last item cream cheese's next as the new node Jelly
                node.prev = tail;    //Make the new node Jelly prev as the original tail Cream Cheese
                tail = node;         //Now change the tail to the new node Jelly
            }
    
            length++; //update size of list now there is a new element added
        };
    
        this.insert = function(position, element){
    
            //check for out-of-bounds values
            if (position >= 0 && position <= length){
    
                let node = new Node(element),
                    current = head,
                    previous,
                    index = 0;
    
                if (position === 0)
                { //add on first position
    
                    if (!head){       //NEW
                        head = node;
                        tail = node;
                    } 
                    else 
                    {
                        //going forward from head
                        //current is head
                        node.next = current;  //set new node's next to current which is set to head
                        current.prev = node; //set current aka head's previous to node
                        head = node; //now finally set head as the new node after handling the next and prev links
                    }
    
                } 
                else  if (position === length) 
                { 
                    //going backward from tail
                    //current is tail
                    current = tail;  //set current aka head as the tail
                    current.next = node; //set tail's next as the new node
                    node.prev = current; //set the new node's previous to the old tail
                    tail = node; //now finally set tail as the new node after handling the next and prev links
    
                } 
                else 
                {
                    //1,2,4,5
                    //inserting in the middle  3 between 2 and 4
                    while (index++ < position){
                        previous = current;      //previous is equal to now the new current is 2  previous=2
                        current = current.next;  //current is set to new current 2's next is current=4
                    }
                    node.next = current;         //the new node's next is set as current   new node 3's next = 4
                    previous.next = node;        //the previous next is now set as the new node, previous=2 2's next = 3
    
                    current.prev = node; //NEW    //current's prev = 4's previous is 3
                    node.prev = previous; //NEW   //node's prev = 3's previous is 2 aka previous = current = 2 from above
                }
    
                length++; //update size of list
    
                return true;
    
            } else {
                return false;
            }
        };
    
        this.removeAt = function(position){
    
            //check for out-of-bounds values
            if (position > -1 && position < length){
    
                let current = head,
                    previous,
                    index = 0;
    
                //removing first item
                if (position === 0){
    
                    head = current.next; // {1}
    
                    //if there is only one item, then we update tail as well //NEW
                    if (length === 1){ // {2}
                        tail = null;
                    } else {
                        head.prev = null; // {3}
                    }
    
                } else if (position === length-1){ //last item //NEW
    
                    current = tail; // {4}
                    tail = current.prev;
                    tail.next = null;
    
                } else {
    
                    while (index++ < position){ // {5}
    
                        previous = current;
                        current = current.next;
                    }
    
                    //link previous with current's next and current's next to previous, skipping over middle removed element
                    previous.next = current.next; // {6}
                    current.next.prev = previous; //NEW
                }
    
                length--;
    
                return current.element;
    
            } else {
                return null;
            }
        };
    
        this.remove = function(element){
    
            let index = this.indexOf(element);
            return this.removeAt(index);
        };
    
        this.indexOf = function(element){
    
            let current = head,
                index = -1;
    
            //check first item
            if (element == current.element){
                return 0;
            }
    
            index++;
    
            //check in the middle of the list
            while(current.next){
    
                if (element == current.element){
                    return index;
                }
    
                current = current.next;
                index++;
            }
    
            //check last item
            if (element == current.element){
                return index;
            }
    
            return -1;
        };
    
        this.isEmpty = function() {
            return length === 0;
        };
    
        this.size = function() {
            return length;
        };
    
        this.toString = function(){
    
            let current = head,
                s = current ? current.element : '';
    
            while(current && current.next){
                current = current.next;
                s += ', ' + current.element;
            }
    
            return s;
        };
    
        this.inverseToString = function() {
    
            let current = tail,
                s = current ? current.element : '';
    
            while(current && current.prev){
                current = current.prev;
                s += ', ' + current.element;
            }
    
            return s;
        };
    
        this.print = function(){
            console.log(this.toString());
        };
    
        this.printInverse = function(){
            console.log(this.inverseToString());
        };
    
        this.getHead = function(){
            return head;
        };
    
        this.getTail = function(){
            return tail;
        }
    }

    
    let list = new DoublyLinkedList();
    list.append(1);
    list.append(2);
    list.append(3);
    list.append(5);
    list.append(6);
    list.append(7);
    list.insert(3,4);
    console.log(list.toString());
    list.removeAt(1);
    console.log(list.toString());