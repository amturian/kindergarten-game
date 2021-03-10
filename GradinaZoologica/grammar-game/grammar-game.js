var questions = [
	{
		id: "1",
		animalCorrect: "elephant",
		animalWrong: "snake",
		question: "Care animal este mai greu?"
	},
	{
		id: "2",
		animalCorrect: "snake",
		animalWrong: "polar",
		question: "Care animal este mai lung?"
	},
	{
		id: "3",
		animalCorrect: "crocodile",
		animalWrong: "tiger",
		question: "Care animal trăiește și 	în apă?"
	},
	{
		id: "4",
		animalCorrect: "wolf",
		animalWrong: "ostrich",
		question: "Care animal mănâncă oi?"
	},
	{
		id: "5",
		animalCorrect: "polar2",
		animalWrong: "camel2",
		question: "Cărui animal îi place frigul?"
	},
	{
		id: "6",
		animalCorrect: "camel",
		animalWrong: "elephant",
		question: "Care animal trăiește în deșert?"
	},
	{
		id: "7",
		animalCorrect: "ostrich",
		animalWrong: "snake",
		question: "Care animal are pene?"
	},
	{
		id: "8",
		animalCorrect: "kangoroo",
		animalWrong: "tiger",
		question: "Care animal are blana roșie?"
	},
	{
		id: "9",
		animalCorrect: "kangoroo",
		animalWrong: "elephant",
		question: "Care animal își poartă puii în marsupiu?"
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
	var audio = new Audio('../audio/' + animal + '.m4a');
	if (endedCallback != undefined) {
		audio.addEventListener("ended", endedCallback);
	}
	audio.play();
}

function startGame() {
	clearWindow();
	var animalsContainer = document.getElementById("animals-container");
	var questionsContainer = document.getElementById("questions-container");
	var buttonsContainer = document.getElementById("buttons-container");
	if (questionIndex === questions.length) {
		var home = createButton("home", "home.png");
		home.setAttribute("alt", "Intoarcere la pagina principala");
		buttonsContainer.appendChild(home);
		playAudio("grammarEnd");
		return;
	}
	var question = createQuestion(questions[questionIndex]);
	var correctAnimal = createAnimal(questions[questionIndex].animalCorrect, questionIndex);
	var wrongAnimal = createAnimal(questions[questionIndex].animalWrong, questionIndex);

	if (questionIndex % 2 == 0) {
		animalsContainer.appendChild(correctAnimal);
		animalsContainer.appendChild(wrongAnimal);
	} else {
		animalsContainer.appendChild(wrongAnimal);
		animalsContainer.appendChild(correctAnimal);
	}
	questionsContainer.appendChild(question);
	playAudio(questionIndex + 1, addAudioForCurrentAnimals); // add handler for mouse enter on animals after audio ends
}

function createAnimal(animalType, questionIndex) {
	var animal = document.createElement("IMG");
	animal.setAttribute("id", animalType);
	animal.setAttribute("src", "../images/" + animalType + ".png");
	animal.setAttribute("alt", "Animalul este " + animalType);
	animal.setAttribute("width", "400");
	animal.setAttribute("height", "400");
	return animal;
}

function addAudioForCurrentAnimals() {
	var correctAnimal = questions[questionIndex].animalCorrect;
	var correctAnimalImg = document.getElementById(correctAnimal);
	correctAnimalImg.setAttribute("onmouseover", "playAudio('" + correctAnimal + "')");
	correctAnimalImg.setAttribute("onclick", "checkAnimal('" + correctAnimal + "'," + questionIndex + ")");	

	var wrongAnimal = questions[questionIndex].animalWrong;
	var wrongAnimalImg = document.getElementById(wrongAnimal);
	wrongAnimalImg.setAttribute("onmouseover", "playAudio('" + wrongAnimal + "')");
	wrongAnimalImg.setAttribute("onclick", "checkAnimal('" + wrongAnimal + "'," + questionIndex + ")");
}

function removeAudioForCurrentAnimals() {
	var correctAnimal = questions[questionIndex].animalCorrect;
	var correctAnimalImg = document.getElementById(correctAnimal);
	correctAnimalImg.setAttribute("onmouseover", "");
	correctAnimalImg.setAttribute("onclick", "");

	var wrongAnimal = questions[questionIndex].animalWrong;
	var wrongAnimalImg = document.getElementById(wrongAnimal);
	wrongAnimalImg.setAttribute("onmouseover", "");
	wrongAnimalImg.setAttribute("onclick", "");
}

function checkAnimal(animal, currentQuestionIndex) {
	removeAudioForCurrentAnimals();
	var buttonsContainer = document.getElementById("buttons-container");

	if (animal === questions[currentQuestionIndex].animalCorrect) {
		playAudio(currentQuestionIndex + "success");
		var againButton = createButton("fail", "arrow-redo.png");
		var nextButton = createButton("success", "arrow-right.ico");

		buttonsContainer.appendChild(againButton);
		buttonsContainer.appendChild(nextButton);
	}
	else {
		playAudio(currentQuestionIndex + "fail");
		var againButton = createButton("fail", "arrow-redo.png");
		againButton.setAttribute("id", "fail-only")
		buttonsContainer.appendChild(againButton);
	}
	if (buttonsContainer.innerHTML !== "") {
		return;
	}

	var againButton = createButton("fail", "arrow-redo.png");
	var nextButton = createButton("success", "arrow-right.ico");

	buttonsContainer.appendChild(againButton);
	buttonsContainer.appendChild(nextButton);
	return animal === questions[currentQuestionIndex].animalCorrect;
}

function createButton(buttonType, buttonText) {
	var button = document.createElement("img");
	button.setAttribute("src", "../images/" + buttonText);// + ".png");
	button.setAttribute("class", buttonType + "-button");
	button.setAttribute("alt", "Buton de " + buttonType);
	button.setAttribute("style", "cursor: pointer;");
	
	if (buttonType === "home") {
		button.setAttribute("onclick", "goHome()");
	}
	else {
		button.setAttribute("onclick", "handleAnswer('" + buttonType + "')");
	}
	return button;
}

function goHome() {
	document.location.href = "../home/home.html";
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
	questionP.setAttribute("title", question.question);
	var questionNode = document.createTextNode(question.question);
	questionP.appendChild(questionNode);
	return questionP;
}

function clearWindow() {
	document.getElementById("animals-container").innerHTML = "";
	document.getElementById("question-p").innerHTML = "";
	document.getElementById("buttons-container").innerHTML = "";
}