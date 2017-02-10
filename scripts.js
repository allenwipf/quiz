window.addEventListener("load", function () {


	function postLikeListener(){
		document.getElementsByClassName("question")[0].addEventListener("submit", question);
	}

	function startGameListener(){
		document.getElementById("start").addEventListener("click", startGame);
	}

	function restartGameListener(){

		document.getElementById("restart").addEventListener("click", restartGame);
	}

	postLikeListener();
	startGameListener();
	restartGameListener();
	

})

var questions = ["first letter of alphebet" , "last letter of alphebet", "What is my name"];
var answers = ["a","z", "allen"];
var questionsAsked = 0
var questionsWrong = 0 
   


function restartGame(){

	location.reload();

}

function startGame(e){

	var qNum = parseInt(document.getElementById("qnumber").innerText)
	
	var x;

	if (qNum == 0){
		document.getElementById("ask").innerHTML = questions[0];
		document.getElementById("qnumber").innerText = 1;
	
	} else if (qNum < questions.length) {
		document.getElementById("ask").innerHTML = questions[qNum];
		document.getElementById("qnumber").innerText = qNum + 1;

    } else {

    	return
    }

	e.preventDefault();
}


function question(e){

	var qNum = parseInt(document.getElementById("qnumber").innerText) -1
	var answer = document.getElementsByClassName("input")[0].value

	if (answer == answers[qNum]){
		document.getElementsByClassName("input")[0].value = ''
		outPutResult("correct")
		startGame(e);

	} else {
		document.getElementsByClassName("input")[0].value = ''
		outPutResult("wrong")
		startGame(e);
	}
	e.preventDefault()
}


function outPutResult(answer){

	if (answer == "correct") {

		questionsAsked += 1
		document.getElementById("checkAnswer").innerHTML = "That Is Correct!"
	} else {
		document.getElementById("checkAnswer").innerHTML = "That Is Not Correct!"
		questionsAsked += 1
		questionsWrong += 1
	}

	if (questionsAsked == questions.length) 

		document.getElementById("checkAnswer").innerHTML = ("Out of  " + questionsAsked + ", you got " 
		+ (questionsAsked - questionsWrong) + " correct.")
	    + " Your score is " + (Math.floor(((questionsAsked - questionsWrong) / questionsAsked) * 100)) + "%"

}






