function Queue(){
    this.dataStore = [];
    this.enqueue =  enqueue;
    this.dequeue =  dequeue;
    this.front = front;
    this.back = back;
    this.toString = toString;
    this.empty = empty;
}

function Patient(name,code){
    this.name =  name;
    this.code = code;
}

function dequeue() { 
      var priority = this.dataStore[0].code; 
        for (var i = 1; i < this.dataStore.length; ++i) {
                  if (this.dataStore[i].code < priority) {
                      priority = i;
                          } 
                 }   
                 return this.dataStore.splice(priority,1);
        } 


function empty() {
    if (this.dataStore.length == 0) {
        return true; 
    }
    else { 
        return false; 
    }
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

function enqueue(element){
    this.dataStore.push(element);
}

var p = new Patient("Smith", 3);
var ed = new Queue();
ed.enqueue(p);
p = new Patient("Carrow", 4);
ed.enqueue(p);
p = new Patient("Miller", 2);
ed.enqueue(p);
p= new Patient("McCarthy", 5);
ed.enqueue(p);
console.log(ed);
//console.log(ed.toString());

var seen = ed.dequeue();
console.log("Patient being treated:"+ seen[0].name); //Miller