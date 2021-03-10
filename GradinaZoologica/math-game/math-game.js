var questions = [
	{
		id: "1",
		answer: 7,
		firstNumber: 5,
		secondNumber: 2,
		animalType: "wolf2",
		questionType: "add",
		possibleAnswers: [5, 7, 9],
		showSecondNumber: true,
		question: ["În pădure sunt ", " lupi. Mai vin încă ", " lupi. Câți lupi sunt în total în pădure?"]
	},
	{
		id: "2",
		answer: 6,
		firstNumber: 9,
		secondNumber: 3,
		animalType: "ostrich",
		questionType: "remove",
		possibleAnswers: [9, 3, 6],
		showSecondNumber: true,
		question: ["În ogradă sunt ", " struți. ",  " se duc la plimbare. Câti struți au rămas?"]
	},
	{
		id: "3",
		answer: 3,
		firstNumber: 5,
		secondNumber: 2,
    possibleAnswers: [1, 3, 0],
    questionType: "remove",
		animalType: "elephant",
		showSecondNumber: true,
		question: ["", " elefanți ne privesc bucuroși. Alți ", " se întristează și devin ursuzi. Câti elefanți bucuroși rămân?"]
	},
	{
		id: "4",
		answer: 3,
		firstNumber: 6,
		secondNumber: 3,
    animalType: "camel",
    questionType: "remove",
		possibleAnswers: [9, 3, 2],
		showSecondNumber: false,
		question: ["În deșert ", " cămile sunt însetate. Apa ajunge numai pentru jumătate din ele. ","Câte cămile vor rămâne fără apă?"]
	},
	{
		id: "5",
		answer: 6,
		firstNumber: 8,
		secondNumber: 2,
    animalType: "crocodile",
    questionType: "remove",
		possibleAnswers: [9, 3, 6],
		showSecondNumber: true,
		question: ["Pe malul râului sunt ", " crocodili. Intra în apă  ", ". Câți crocodili au rămas pe mal?"]
	},
	{
		id: "6",
		answer: 4,
		firstNumber: 2,
		secondNumber: 2,
    animalType: "kangoroo",
    questionType: "add",
		possibleAnswers: [5, 9, 4],
		showSecondNumber: false,
		question: ["Mama cangur are ", " canguri mititei în brațe. Ea mai poartă în marsupiu încă o dată pe atâția canguri mititei. ","Câți copilași are mama cangur?"]
	},
	{
		id: "7",
		answer: 5,
		firstNumber: 3,
		secondNumber: 2,
		animalType: "tiger",
    possibleAnswers: [5, 8, 6],
	questionType: "add",
	showSecondNumber: true,
		question: ["Tigrul are ", " prieteni buni. În grupul lor se alătură ", " tigri. Câți priteni are tigrul acum?"]
	},
	{
		id: "8",
		answer: 9,
		firstNumber: 5,
		secondNumber: 4,
    animalType: "sheep",
    questionType: "add",
	possibleAnswers: [5, 4, 9],
	showSecondNumber: true,
		question: ["Ciobanul are ", " oi care dau lapte. Mai cumpără încă ", " oi pentru blană. Câte oi are ciobanul?"]
	},
	{
		id: "9",
		answer: 7,
		firstNumber: 9,
		secondNumber: 2,
    animalType: "polar",
    questionType: "remove",
	possibleAnswers: [9, 7, 3],
	showSecondNumber: true,
		question: ["La Polul Nord s-a facut o întrunire cu ", " urși polari. ", " au adormit și nimeni nu îi vede. Câți urși polari sunt atenți la întrunire?"]
	},
	{
        id: "10",
        answer: 9,
        firstNumber: 7,
        secondNumber: 2,
        animalType: "lion",
        questionType: "add",
		possibleAnswers: [8, 9, 1],
		showSecondNumber: true,
        question: ["În junglă se aud ", " lei care rag. Însă ", " sunt liniștiți. Câți lei sunt în junglă de fapt?"]
    }
];

var questionIndex = 0;

document.onreadystatechange = () => {
	if (document.readyState === 'complete') {
		startGame();
	}
};

function playAudio(animal, endedCallback) {
	// console.log("audio of " + animal + " will be played");
	var audio = new Audio('../audio/math-game/' + animal + '.m4a');
	if (endedCallback != undefined) {
		audio.addEventListener("ended", endedCallback);
	}
	audio.play();
}

function startGame() {
	clearWindow();
	var buttonsContainer = document.getElementById("buttons-container");	
	var animalsContainer = document.getElementById("animals-container");
	var questionsContainer = document.getElementById("questions-container");
	
	if (!document.getElementById("second-set-container")){
		document.getElementById("first-set-container").classList.remove("mystyle");
		var secondSetContainer = document.createElement("div");
		secondSetContainer.setAttribute("id", "second-set-container");
		animalsContainer.appendChild(secondSetContainer);
	}
	document.getElementById("second-set-container").innerHTML = "";

	if (questionIndex === questions.length) {
		var home = createButton("home", "home.png");
		home.setAttribute("alt", "Intoarcere la pagina principala");
		buttonsContainer.appendChild(home);
		playAudio("mathEnd");
		return;
	}
	var question = createQuestion(questions[questionIndex]);
	createAnimalSet(questions[questionIndex], animalsContainer);
	createpossibleAnswers(questions[questionIndex].possibleAnswers, questionIndex);
	questionsContainer.appendChild(question);
	playAudio(questionIndex+1, addClickEventForAnswers);
}

function goHome() {
	document.location.href = "../home/home.html";
}

function createpossibleAnswers(possibleAnswers, questionIndex) {
	var container = document.getElementById("answers-container");
	for (var i = 0; i < possibleAnswers.length; i++) {
		var questionP = document.getElementById("answer" + i);
		var questionNode = document.createTextNode(possibleAnswers[i]);
		questionP.appendChild(questionNode);
		container.appendChild(questionP);
	}
}

function addClickEventForAnswers() {
	var possibleAnswers = questions[questionIndex].possibleAnswers;
	for (var i = 0; i < possibleAnswers.length; i++) {
		var questionP = document.getElementById("answer" + i);
		questionP.setAttribute("onclick", "checkAnswer('" + possibleAnswers[i] + "'," + questionIndex + ")");
	}
}

function removeClickEventForAnswers() {
	var possibleAnswers = questions[questionIndex].possibleAnswers;
	for (var i = 0; i < possibleAnswers.length; i++) {
		var questionP = document.getElementById("answer" + i);
		questionP.setAttribute("onclick", "");
	}
}

function createAnimalSet(question, animalsContainer) {
	var firstSetContainer = document.getElementById("first-set-container");
	var secondSetContainer = document.getElementById("second-set-container");

	for (var i = 0; i < question.firstNumber; i++) {
		var animal = document.createElement("IMG");
		animal.setAttribute("src", "../images/" + question.animalType + ".png");
		animal.setAttribute("alt", "Animalul este " + question.animalType);
		animal.setAttribute("width", "100");
		animal.setAttribute("height", "100");
		animal.classList.add("image-element");
		firstSetContainer.appendChild(animal);
	}
	if (question.questionType === "remove") {
		secondSetContainer.parentNode.removeChild(secondSetContainer);
		firstSetContainer.classList.add("single-container");
		setTimeout(function () {
			var animals = firstSetContainer.getElementsByClassName("image-element");
			for (var i = 0; i < question.secondNumber; i++) {
				firstSetContainer.removeChild(animals[i]);
			}
		}, 3000);
	}
	else {
		for (var i = 0; i < question.secondNumber; i++) {
			var animal = document.createElement("IMG");
			animal.setAttribute("src", "../images/" + question.animalType + ".png");
			animal.setAttribute("alt", "Animalul este " + question.animalType);
			animal.setAttribute("width", "100");
			animal.setAttribute("height", "100");
			animal.classList.add("flipped");
			animal.classList.add("image-element");
			secondSetContainer.appendChild(animal);
		}
	}

	if (questionIndex % 2 == 0) {
		animalsContainer.appendChild(firstSetContainer);
		if (question.questionType === "add") {
			animalsContainer.appendChild(secondSetContainer);
    }
    animalsContainer.appendChild(firstSetContainer);
	} else {
		if (question.questionType === "add") {
			animalsContainer.appendChild(secondSetContainer);
		}
		animalsContainer.appendChild(firstSetContainer);
	}
}

function checkAnswer(selectedAnswer, currentQuestionIndex) {
	removeClickEventForAnswers();
	var buttonsContainer = document.getElementById("buttons-container");

	if (selectedAnswer == questions[currentQuestionIndex].answer) {
		playAudio(currentQuestionIndex + "success");
		var againButton = createButton("fail", "arrow-redo.png");
		var nextButton = createButton("success", "arrow-right.ico");

		buttonsContainer.appendChild(againButton);
		buttonsContainer.appendChild(nextButton);
	}
	else {
		playAudio(currentQuestionIndex + "fail");
		var againButton = createButton("fail", "arrow-redo.png");
		againButton.setAttribute("id", "fail-only");
		buttonsContainer.appendChild(againButton);
	}
	if (buttonsContainer.innerHTML !== "") {
		return;
	}
	var againButton = createButton("fail", "arrow-redo.png");
	var nextButton = createButton("success", "arrow-right.ico");

	buttonsContainer.appendChild(againButton);
	buttonsContainer.appendChild(nextButton);
}

function createButton(buttonType, buttonText) {
	var button = document.createElement("img");
	button.setAttribute("src", "../images/" + buttonText);// + ".png");
	button.setAttribute("class", buttonType + "-button");
	button.setAttribute("alt", "Buton de " + buttonType);
	if (buttonType === "home") {
		button.setAttribute("onclick", "goHome()");
	}
	else {
		button.setAttribute("onclick", "handleAnswer('" + buttonType + "')");
	}
	return button;
}

function handleAnswer(answer) {
	switch (answer) {
		case "success":
			questionIndex++;
			console.log("success");
			startGame();
			break;
		case "fail":
			console.log("fail");
			startGame();
			break;
		default:
			console.log("default");
	}
}

function createQuestion(question) {
	if (!question.question) {
		return
	}
	var questionP = document.getElementById("question-p");
	var questionText = createQuestionText(question);
	questionP.setAttribute("title", questionText);
	var questionNode = document.createTextNode(questionText);
	questionP.appendChild(questionNode);
	return questionP;
}

function createQuestionText(question) {
	return question.showSecondNumber ? 
	question.question[0] + question.firstNumber + question.question[1] + question.secondNumber + question.question[2]
	:question.question[0] + question.firstNumber + question.question[1] + question.question[2];
}

function clearWindow() {
	document.getElementById("first-set-container").innerHTML = "";
	if (document.getElementById("second-set-container")) {
		document.getElementById("second-set-container").innerHTML = "";
	}
	document.getElementById("question-p").innerHTML = "";
	document.getElementById("buttons-container").innerHTML = "";
	document.getElementById("answer0").innerHTML = "";
	document.getElementById("answer1").innerHTML = "";
	document.getElementById("answer2").innerHTML = "";
}

function goHome() {
	playAudio("grammarEnd");
	document.location.href = "../home/home.html";
}