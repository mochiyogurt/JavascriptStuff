var mystr="Java is cool";
var size = mystr.length;
console.log(size);

//Substring
console.log(mystr.indexOf("Java"));
console.log(mystr.lastIndexOf("cool"));


var a = "cool";
var b = "beans";
console.log(a.concat(" ").concat(b));
console.log(a+" "+b);


var s = "Java";
var size = s.length;
var s2 = "";

for (i=size-1; i>=0; i--)
{
	s2 = s2 + s.charAt(i);
}
console.log(s2);

var abc = "Javas";
console.log(abc.substring(1, 4));



var test = "Testing World";
console.log(test.replace("Testing", "QA"));

var test2 = "Testing World";
var test3 = "testing world";

if(test == test3)
{
	console.log("Same");
}
else
{
	console.log("Not same");
}

if(test.toLowerCase() == test3.toLowerCase())
{
	console.log("Same");
}
else
{
	console.log("Not same");
}

