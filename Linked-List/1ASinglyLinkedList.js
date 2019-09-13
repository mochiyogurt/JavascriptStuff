
    function LList() {
        this.head = new Node("head");
        this.find = find;
        this.insert = insert;
        this.previous = previous;
        this.remove = remove;   
        this.display = display;
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
    function previous(item) {
        var currNode = this.head;
        while (!(currNode.next == null) && (currNode.next.element != item)) { 
            currNode = currNode.next; 
        } 
        return currNode; 
    }

    function remove(item) {
        var currNode = this.find(item);
        var previousNode = this.previous(item);
        if (!(currNode.next == null)) {
            previousNode.next = currNode.next;
            currNode.next = 0;
        } 
    }

    function display() {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next; 
        } 
    }

var cities = new LList();
cities.insert("Mumbai", "head");
cities.insert("New York", "Mumbai");
cities.insert("Seattle", "New York");
cities.insert("Los Angeles","Seattle");
//console.log(cities);
cities.remove("Seattle");
//console.log(JSON.stringify(cities));
cities.display();


