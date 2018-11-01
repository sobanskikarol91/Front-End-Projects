var currentNr = Math.floor(Math.random()*5)+1;

var timer1 = 0;
var timer2 = 0;

function hide()
{
	$("#slider").fadeOut(500);
}


function changeSlide()
{
	currentNr++;
	if(currentNr > 5) currentNr = 1;

	var file = "<img src=\"slajdy/slajd" + currentNr + ".png\"/>";
	document.getElementById("slider").innerHTML = file;

	$("#slider").fadeIn(500);
	timer1 = setTimeout("hide()", 1500);
	timer2 = setTimeout("changeSlide()", 2500);
}

function setSlider(numer)
{
	clearTimeout(timer1);
	clearTimeout(timer2);

	currentNr= numer-1;
	hide();
	timer2 = setTimeout("changeSlide()",500)
}