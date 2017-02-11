window.addEventListener("load", function () {

	function questionSubmitListener(){
		document.getElementsByClassName("question")[0].addEventListener("submit", submitQuestion);
	}

	function restartGameListener(){

		document.getElementById("start").addEventListener("click", restartGame);
	}

	questionSubmitListener();
	restartGameListener();
	

})

var questions = ["What is the first letter of alphebet?" , "What is 1 + 1?" , "Does thought require language?"];
var answers = ["a", 2, "probably"];
var questionsAsked = 0
var questionsWrong = 0


// controller function. fires once "Submit" is clicked. 
// 1. saves the answer to a variable
// 2. runs checkAnswer() to see if the answer was either True or False
// 3. with the return of checkAnswer() runs questionsResult() which lets the user know if their answer was correct
// 4. runs gameScore() which will end the game and give the score if there are no more questions
function submitQuestion(e){


	var answer = document.getElementsByClassName("input")[0].value

	questionResult(checkAnswer(answer))

	presentQuestions();
	gameScore()

	e.preventDefault()

}

//This function sets some node values so the page doesn't haven't to be refreshed to 
//begin a new game. After the values are set, presentQuestions() is ran.
function restartGame(e){
	
	document.getElementsByClassName("question")[0].style.display = "block"
	document.getElementsByClassName("submission")[0].style.display = "block"
	document.getElementById("checkAnswer").innerHTML = "Good Luck!"
	document.getElementById("qnumber").innerText = 0
	document.getElementById("score").innerHTML = ''
	questionsAsked = 0
	questionsWrong = 0 

	presentQuestions()
}

// presents the question based on which questions has been asked
// also writes the number of the question (Question 1, Question 2, etc.)
function presentQuestions(){

	if (questionsAsked == 0){
		document.getElementById("ask").innerHTML = questions[0];
		document.getElementById("qnumber").innerText = questionsAsked + 1
	
	} else if (questionsAsked < questions.length) {
		document.getElementById("ask").innerHTML = questions[questionsAsked];
		document.getElementById("qnumber").innerText = questionsAsked + 1
	}
}

// checks to see if the answer was correct and returns either true of false
function checkAnswer(answer){

	if (answer.toLowerCase() == answers[questionsAsked]){
		document.getElementsByClassName("input")[0].value = ''
		return true

	} else {
		document.getElementsByClassName("input")[0].value = ''
		return false
	}
}

// based on whether checkAnswer() returned true of false will change "checkAnswer" node
function questionResult(answer){
	
	if (answer == true) {

		questionsAsked += 1
		document.getElementById("checkAnswer").innerHTML = "That Answer Was Correct!"
	} else {
		document.getElementById("checkAnswer").innerHTML = "That Answer Was Not Correct!"
		questionsAsked += 1
		questionsWrong += 1
	}
}

// Declares the score once there are no more new question
function gameScore(){

	if (questionsAsked >= questions.length){

	document.getElementById("checkAnswer").innerHTML = ("Out of  " + questionsAsked + ", you got " + (questionsAsked - questionsWrong) + " correct.")
	document.getElementById("score").innerHTML = " Your score is " + (Math.floor(((questionsAsked - questionsWrong) / questionsAsked) * 100)) + "%"

	document.getElementsByClassName("question")[0].style.display = "none"
	}	
}



