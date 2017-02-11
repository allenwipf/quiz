window.addEventListener("load", function () {


	function questionSubmitListener(){
		document.getElementsByClassName("question")[0].addEventListener("submit", question);
	}


	function restartGameListener(){

		document.getElementById("start").addEventListener("click", restartGame);
	}

	questionSubmitListener();
	restartGameListener();
	

})

var questions = ["first letter of alphebet" , "last letter of alphebet", "What is 1 + 1"];
var answers = ["a","z", 2];
var questionsAsked = 0
var questionsWrong = 0 
   

//This fuction sets some node values so the page doesn't haven't to be refreshed to 
//begin a new game
function restartGame(){
	
	document.getElementsByClassName("question")[0].style.display = "block"
	document.getElementsByClassName("submission")[0].style.display = "block"
	document.getElementById("checkAnswer").innerHTML = "Good Luck!"
	document.getElementById("qnumber").innerText = 0
	document.getElementById("score").innerHTML = ''
	questionsAsked = 0
	questionsWrong = 0 

	startGame()
}

function startGame(e){

	var qNum = parseInt(document.getElementById("qnumber").innerText);
	var x;

	if (qNum == 0){
		document.getElementById("ask").innerHTML = questions[0];
		document.getElementById("qnumber").innerText = 1
	
	} else if (qNum < questions.length) {
		document.getElementById("ask").innerHTML = questions[qNum];
		document.getElementById("qnumber").innerText = qNum + 1
	}
}


function question(e){

	var qNum = parseInt(document.getElementById("qnumber").innerText) -1
	var answer = document.getElementsByClassName("input")[0].value

	if (answer.toLowerCase() == answers[qNum]){
		document.getElementsByClassName("input")[0].value = ''
		outputResults("correct")
		startGame(e);

	} else {
		document.getElementsByClassName("input")[0].value = ''
		outputResults("wrong")
		startGame(e);
	}
	 e.preventDefault(e)
}


function outputResults(answer){
	
	if (answer == "correct") {

		questionsAsked += 1
		document.getElementById("checkAnswer").innerHTML = "That Is Correct!"
	} else {
		document.getElementById("checkAnswer").innerHTML = "That Is Not Correct!"
		questionsAsked += 1
		questionsWrong += 1
	}

	declareWinner()
}


function declareWinner(){

	if (questionsAsked >= questions.length){

	document.getElementById("checkAnswer").innerHTML = ("Out of  " + questionsAsked + ", you got " 
	+ (questionsAsked - questionsWrong) + " correct.")
	document.getElementById("score").innerHTML = " Your score is " + (Math.floor(((questionsAsked - questionsWrong) / questionsAsked) * 100)) + "%"

	document.getElementsByClassName("question")[0].style.display = "none"
	}	
}



