function startGame()
{
	changeBodyBg1();
	for(var i=1;i<=9;i++)
	{
		clearBox(i);
	}
	document.turn="X";
	if(Math.random()<0.5)
	{
		document.turn="O";
	}
	document.winner=null;
	setMessage(document.turn + " starts");
	document.getElementById("s1").style.color="#24e0e0";
	document.getElementById("s2").style.color="#24e0e0";
	document.getElementById("s3").style.color="#24e0e0";
	document.getElementById("s4").style.color="#24e0e0";
	document.getElementById("s5").style.color="#24e0e0";
	document.getElementById("s6").style.color="#24e0e0";
	document.getElementById("s7").style.color="#24e0e0";
	document.getElementById("s8").style.color="#24e0e0";
	document.getElementById("s9").style.color="#24e0e0";
}

function setMessage(msg)
{
	document.getElementById("message").textContent=msg;
}

function nextMove(Square)
{
	if (document.winner!=null)
	{
		setMessage(document.winner+" won the game!!");
	}
	else if (Square.textContent== "")
	{
		Square.textContent=document.turn;
		switchTurn();
	}
	else
	{
		setMessage("That square is used.");
	}
}

function switchTurn()
{
	if (checkForWinner(document.turn))
	{
		setMessage(document.turn +" wins!!");
		document.winner=document.turn;
		changeBodyBg();
	}
	else if(CheckforTie())
	{
		setMessage("It's a tie!!!! Restart the game");
	}
	else if(document.turn=="X")
	{
		document.turn="O";
		setMessage(document.turn+"'s turn");
	}
	else
	{
		document.turn="X";
		setMessage(document.turn+"'s turn");
	}
}

function checkForWinner(move)
{
	var result=false;
	if (checkRow(1,2,3,move) || checkRow(4,5,6,move) || checkRow(7,8,9,move) || checkRow(1,4,7,move) ||checkRow(2,5,8,move) ||checkRow(3,6,9,move) ||checkRow(1,5,9,move) || checkRow(3,5,7,move) )
	{
		result=true;
	}
	return result;
}

function checkRow(a,b,c,move)
{
	var result=false;
	if(getBox(a)==move && getBox(b)==move && getBox(c)==move)
	{
		result= true;
	}
	return result;
}

function getBox(number)
{
	return document.getElementById("s"+ number).textContent;
}

function clearBox(number)
{
	document.getElementById("s" + number).textContent= "";
}

function CheckforTie()
{
	for(var i=1; i<=9; i++)
	{
		if(getBox(i)=="")
			return false;
	}
	return true;
}

function changeBodyBg()
{
	document.body.style.backgroundImage="url('confetti.gif')";
}

function changeBodyBg1()
{
	document.body.style.backgroundImage="url('img.jpg')";
}