//program to enter month number and print number of days in month

var month = "December";

if (month=="September" || month=="April" || month=="June" || month=="November")
{
	console.log("30 days");
}
else if(month=="February")
{
	console.log("28 days");
}
else
{
	console.log("31 days");
}