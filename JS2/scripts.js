function display()
{
	var number1 = document.getElementById("field1").value;
	var number2 = document.getElementById("field2").value;

	var label = "";

	for(i=number1; i<= number2; i++)
	{
		label += i + " ";
	}
	document.getElementById("result").innerHTML=label;
}
