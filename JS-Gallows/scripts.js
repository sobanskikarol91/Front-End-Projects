var password = "Władca pierścieni";
password = password.toUpperCase();

var hiddenPassword = "";
var length = password.length;

var letters = new Array(35);
var wrong_answers=0;

var yes = new Audio("yes.wav");
var no = new Audio("no.wav");

letters[0] = "A";
letters[1] = "Ą";
letters[2] = "B";
letters[3] = "C";
letters[4] = "Ć";
letters[5] = "D";
letters[6] = "E";
letters[7] = "Ę";
letters[8] = "F";
letters[9] = "G";
letters[10] = "H";
letters[11] = "I";
letters[12] = "J";
letters[13] = "K";
letters[14] = "L";
letters[15] = "Ł";
letters[16] = "M";
letters[17] = "N";
letters[18] = "Ń";
letters[19] = "O";
letters[20] = "Ó";
letters[21] = "P";
letters[22] = "Q";
letters[23] = "R";
letters[24] = "S";
letters[25] = "Ś";
letters[26] = "T";
letters[27] = "U";
letters[28] = "V";
letters[29] = "W";
letters[30] = "X";
letters[31] = "Y";
letters[32] = "Z";
letters[33] = "Ż";
letters[34] = "Ź";

for(i=0;i<length;i++)
{
	if(password.charAt(i)==" ") hiddenPassword += " ";
	else hiddenPassword+= "-";
}

function write_password()
{
	document.getElementById("board").innerHTML=hiddenPassword;
}

function start()
{
	var div_content ="";

	for(i=0; i<=34;i++)
	{
		var res = String.fromCharCode(65)
		var element = "let" + i;
		div_content +=  '<div class="letter" onclick="check('+i+')" id="'+ element +'">'+ letters[i] +'</div>';
		if((i+1)%7==0 ) div_content += '<div style="clear:both;"></div>';
	}

	document.getElementById("alphabet").innerHTML = div_content;
	write_password();
}

String.prototype.changeLetter = function(index, letter)
{
	if(index > this.length-1) return this.toString();
	else return this.substr(0, index) + letter + this.substr(index + 1);
}


function check(nr)
{
	var element = "let" + nr;
	var isChecked = false;

	for(i=0;i<length;i++)
	{
		if(password.charAt(i) == letters[nr])
		{
			hiddenPassword = hiddenPassword.changeLetter(i, letters[nr]);
			isChecked = true;
		}
	}

	if(isChecked)
		correctLetter(element);
	else
		wrongLetter(element);

	// win
	if(password == hiddenPassword)
		win();
	else
		checkFail(wrong_answers);

	write_password();
}

function correctLetter(element)
{
	document.getElementById(element).style.background = "#003300";
	document.getElementById(element).style.color = "#00C000";
	document.getElementById(element).style.border ="3px solid #00C000";
	document.getElementById(element).style.cursor = "default";
	yes.play();
}

function wrongLetter(element)
{
	document.getElementById(element).style.background = "#330000";
	document.getElementById(element).style.color = "#C00000";
	document.getElementById(element).style.border ="3px solid #C00000";
	document.getElementById(element).style.cursor = "default";
	document.getElementById(element).setAttribute("onclick",";");
	wrong_answers++;
	no.play();

	var img = "img/s" + wrong_answers + ".jpg";
	document.getElementById("gallow").innerHTML = '<img src="' + img + '" alt=""/>';
}

function win()
{
	document.getElementById("alphabet").innerHTML = "Podano prawidlowe haslo: " + password + 
	'<br/><br/><span class="reset" onclick="location.reload()">Zagraj Ponownie</span>';	
	reset();
}

function checkFail(wrong_answers)
{
	if(wrong_answers >=9	)
	{
		document.getElementById("alphabet").innerHTML = "Przegrales! " +
		'<br/><br/><span class="reset" onclick="location.reload()">Zagraj Ponownie</span>';
		reset()
	}
}

function reset()
{
	'<br/><br/><span class="reset" onclick="location.reload()">Zagraj Ponownie</span>'	
	wrong_answers=0;	
}

window.onload = start;