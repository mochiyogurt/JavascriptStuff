const map = new Map();
map.set(1, "apple");
map.set(2, "orange");
map.set(3, "bananas");
console.log(map.get(2)); //returns orange
console.log(map.has(2)); //returns true
map.delete(3);
console.log(map); //returns Map { 1 => 'apple', 2 => 'orange' }


const entries = map.entries();
const values = map.values();

for(const entry of entries)
{
    console.log(entry);

}

for(const value of values)
{
    console.log(value);
}