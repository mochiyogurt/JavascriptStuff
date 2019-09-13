function Fibonacci(length)
{
	var first=0;
	var second=1;

    for(i=0; i<length; i++)
    {
    	console.log(first);
    	third=first+second;
		first=second;
		second=third;
    }

}

Fibonacci(5);