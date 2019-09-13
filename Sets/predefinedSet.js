var aset = new Set();

aset.add("nectarines");
aset.add("strawberries");
aset.add("blueberries");
aset.add("strawberries");
console.log(aset.has("nectarines"));
aset.delete("blueberries");
console.log(aset); //print set


//Loop through set
aset = Array.from(aset);
for(let item in aset)
{
    console.log(aset[item]);
}
for(let item in aset)
{
    if(aset[item]==='strawberries'){
        console.log(aset[item]);
    }
}



