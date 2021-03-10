var questions = [
	{
		id: "1",
		correctAnswers: ["wolf", "tiger"],
		question: "Care animale trăiesc în haită?",
	},
	
	{
		id: "2",
		correctAnswers: ["grumpy1", "grumpy2", "grumpy3"],
		question: "Adună toţi elefanţii care sunt ursuzi!",
	},
	
	{
		id: "3",
		correctAnswers: ["elephant", "ostrich", "dromader"],
		question: "Ce studiază zoologia?",
	},
	
	{
		id: "3",
		correctAnswers: ["backpack1", "backpack2", "backpack3"],
		question: "Adună toate personajele care au ceva în cârcă!",
	},
	
	{
		id: "4",
		correctAnswers: ["morning1", "morning2", "morning3"],
		question: "În care imagini sunt ilustraţi zorii?",
	},
	
	{
		id: "5",
		correctAnswers: ["polar", "tiger", "fox", "wolf"],
		question: "Care animale pot fi numite jivine?",
	}
	
];

var reqID, dir, questionIndex = 0, answersFound = 0;
var p, t, pw, ph, px, py, tw, th, tx, ty;
var div0 = document.createElement("div"), 
	div1 = document.createElement("div"), 
	div2 = document.createElement("div"), 
	div3 = document.createElement("div"), 
	div4 = document.createElement("div"),
	div5 = document.createElement("div");
	
var img0 = document.createElement("img"), 
	img1 = document.createElement("img"), 
	img2 = document.createElement("img"), 
	img3 = document.createElement("img"), 
	img4 = document.createElement("img"),
	img5 = document.createElement("img");

function detectCollisions(){
	
	if(answersFound == questions[questionIndex].correctAnswers.length){
		if(questionIndex < questions.length - 1) {
			document.onkeydown = null;
			document.getElementById("nextButton").style.visibility = 'visible';
			document.getElementById("nextButton").addEventListener("click", displayNextQuestion);
		}
		else{
			//back to the menu
			document.getElementById("homeButton").style.visibility = 'visible';
			console.log("aici");
		}
		p.style.visibility = "hidden";
	}
	else{
		for(i = 0; i < t.length; i++){
			pw = p.offsetWidth;
			ph = p.offsetHeight;
			px = p.offsetLeft;
			py = p.offsetTop;
			tw = t[i].offsetWidth;
			th = t[i].offsetHeight;
			tx = t[i].offsetLeft;
			ty = t[i].offsetTop;

			if((px+pw) > tx && px < (tx+tw) && (py+ph) > ty && py < (ty+th)){
				if(t[i].id == questions[questionIndex].correctAnswers[0] || t[i].id == questions[questionIndex].correctAnswers[1] || t[i].id == questions[questionIndex].correctAnswers[2] || t[i].id == questions[questionIndex].correctAnswers[3]){
					console.log("Collision detected with "+t[i].id);
					document.getElementById("animals-container").removeChild(t[i]);
					answersFound++;
				}
				else {
					document.onkeydown = null;
					//play
					//setTimeout(startAgain, 3000);
					startAgain();
				}
			}
		}
	}
	window.requestAnimationFrame(detectCollisions);
}

function displayNextQuestion(){
	questionIndex++;
	answersFound = 0;
	var questionsContainer = document.getElementById("questions-container");
	var question = createQuestion(questions[questionIndex]);
	questionsContainer.appendChild(question);
	document.getElementById("nextButton").style.visibility = 'hidden';
	p.style.visibility = "visible";
	startAgain();
	docReady();
	window["getAnswersForQuestion" + questionIndex]();
}

function startAgain(){
	p.style.top = '10px';
	p.style.left = '10px';
	document.onkeydown = move;
}

function stopAnimation() {
	window.cancelAnimationFrame(reqID);
}

function docReady(){
	playAudio(questionIndex+1);
	p = document.getElementById("player");
	t = document.getElementsByClassName("animal");

	detectCollisions();
	var questionsContainer = document.getElementById("questions-container");
	var question = createQuestion(questions[questionIndex]);
	questionsContainer.appendChild(question);
	
	var audioIndex = questionIndex + 1;
	document.getElementById("sound_icon").setAttribute("onclick", "playAudio('" + audioIndex + "')");
}

document.onreadystatechange = () => {
	if (document.readyState === 'complete') {
		playAudio("newWordsIntro", docReady);
	}
};

function move(e){
	if(e.keyCode == 37 && px > 0){ //left
		p.style.left = (p.offsetLeft -= 10) + 'px';
	}
	else if(e.keyCode == 39 && px < window.innerWidth - 60){ //right
		p.style.left = (p.offsetLeft += 10) + 'px';
	} 
	else if(e.keyCode == 38 && py > 0){ //top
		p.style.top = (p.offsetTop -= 10) + 'px';
	}
	else if(e.keyCode == 40 && py < window.innerHeight - 60){ //down
		p.style.top = (p.offsetTop += 10) + 'px';
	}
	reqID = window.requestAnimationFrame(move);
}

document.onkeydown = move;

function createQuestion(question) {
	if (!question.question) {
		return
	}
	var questionP = document.getElementById("question-p");
	// questionP.setAttribute("onclick", "playAudio('" + audioIndex + "')");
	questionP.setAttribute("title", question.question);
	var questionNode = document.createTextNode(question.question);
	questionP.innerHTML = "";
	questionP.appendChild(questionNode);
	return questionP;
}
	
function getAnswersForQuestion1(){
	var animalsContainer = document.getElementById("animals-container");
	animalsContainer.innerHTML = "";
	
	var div0 = document.createElement("div");
	div0.setAttribute("id", "elephant1");
	div0.setAttribute("class", "animal");
	
	var div1 = document.createElement("div");
	div1.setAttribute("id", "elephant2");
	div1.setAttribute("class", "animal");
	
	var div2 = document.createElement("div");
	div2.setAttribute("id", "elephant3");
	div2.setAttribute("class", "animal");
	
	var div3 = document.createElement("div");
	div3.setAttribute("id", "grumpy1");
	div3.setAttribute("class", "animal");
	
	var div4 = document.createElement("div");
	div4.setAttribute("id", "grumpy2");
	div4.setAttribute("class", "animal");
	
	var div5 = document.createElement("div");
	div5.setAttribute("id", "grumpy3");
	div5.setAttribute("class", "animal");
	
	var img0 = document.createElement("IMG");
    img0.setAttribute("src", "../images/elephant.png");
	img0.setAttribute("alt", "elefant vesel");
	var img1 = document.createElement("IMG");
    img1.setAttribute("src", "../images/elephant.png");
	img1.setAttribute("alt", "elefant vesel");
	var img2 = document.createElement("IMG");
    img2.setAttribute("src", "../images/elephant.png");
	img2.setAttribute("alt", "elefant vesel");
	var img3 = document.createElement("IMG");
    img3.setAttribute("src", "../images/grumpy.png");
	img3.setAttribute("alt", "elefant ursuz");
	var img4 = document.createElement("IMG");
    img4.setAttribute("src", "../images/grumpy.png");
	img4.setAttribute("alt", "elefant ursuz");
	var img5 = document.createElement("IMG");
    img5.setAttribute("src", "../images/grumpy.png");
	img5.setAttribute("alt", "elefant ursuz");
	
    div0.appendChild(img0);
	div1.appendChild(img1);
	div2.appendChild(img2);
	div3.appendChild(img3);
	div4.appendChild(img4);
	div5.appendChild(img5);
	
	animalsContainer.appendChild(div0);
	animalsContainer.appendChild(div1);
	animalsContainer.appendChild(div2);
	animalsContainer.appendChild(div3);
	animalsContainer.appendChild(div4);
	animalsContainer.appendChild(div5);
}

function getAnswersForQuestion2(){
	var game_images = ["dromader","elephant","ostrich","tree","flowers","flower"];
	var alt_tags = ["dromader", "elefant", "struţ", "copac", "flori", "floare"];
	setImages(game_images, alt_tags, '.png');
	myAppend();
}

function getAnswersForQuestion3(){
	var game_images = ["granny","kid","kid1","backpack1","backpack2","backpack3"];
	var alt_tags = ["bunicuţă", "copil care sare", "copil vesel", "fetiţă cu ghiozdan in spate", "Moş Crăciun cu sacul în spate", "băiat care duce bagaje în spate"];
	setImages(game_images, alt_tags, '.png');
	myAppend();
}

function getAnswersForQuestion4(){
	var game_images = ["morning1","morning2","morning3","night1","night2","night3"];
	var alt_tags = ["peisaj de dimineaţă", "peisaj de dimineaţă", "peisaj de dimineaţă", "peisaj de noapte", "peisaj de noapte", "peisaj de noapte"];
	setImages(game_images, alt_tags, '.jpg');
	myAppend();
}

function getAnswersForQuestion5(){
	var game_images = ["dog","sheep","fox","tiger","wolf","polar"];
	var alt_tags = ["câine", "oaie", "vulpe", "tigru", "lup", "urs polar"];
	setImages(game_images, alt_tags, '.png');
	myAppend();
}

function setImages(game_images, alt_tags, ext){
	div0.setAttribute("id", game_images[0]);
	div0.setAttribute("class", "animal");

	div1.setAttribute("id", game_images[1]);
	div1.setAttribute("class", "animal");
	
	div2.setAttribute("id", game_images[2]);
	div2.setAttribute("class", "animal");
	
	div3.setAttribute("id", game_images[3]);
	div3.setAttribute("class", "animal");
	
	div4.setAttribute("id", game_images[4]);
	div4.setAttribute("class", "animal");
	
	div5.setAttribute("id", game_images[5]);
	div5.setAttribute("class", "animal");
	
    img0.setAttribute("src", "../images/" + game_images[0] + ext);
    img1.setAttribute("src", "../images/" + game_images[1] + ext);
    img2.setAttribute("src", "../images/" + game_images[2] + ext);
    img3.setAttribute("src", "../images/" + game_images[3] + ext);
    img4.setAttribute("src", "../images/" + game_images[4] + ext);
    img5.setAttribute("src", "../images/" + game_images[5] + ext);
	
	img0.setAttribute("alt", alt_tags[0]);
	img1.setAttribute("alt", alt_tags[1]);
	img2.setAttribute("alt", alt_tags[2]);
	img3.setAttribute("alt", alt_tags[3]);
	img4.setAttribute("alt", alt_tags[4]);
	img5.setAttribute("alt", alt_tags[5]);
}

function myAppend(){
	var animalsContainer = document.getElementById("animals-container");
	animalsContainer.innerHTML = "";
	
	div0.appendChild(img0);
	div1.appendChild(img1);
	div2.appendChild(img2);
	div3.appendChild(img3);
	div4.appendChild(img4);
	div5.appendChild(img5);
	
	animalsContainer.appendChild(div0);
	animalsContainer.appendChild(div1);
	animalsContainer.appendChild(div2);
	animalsContainer.appendChild(div3);
	animalsContainer.appendChild(div4);
	animalsContainer.appendChild(div5);
}

function playAudio(question, endedCallback) {
	var audio = new Audio('../audio/words-lesson/words-game/' + question +'.m4a');
	if (endedCallback != undefined) {
		audio.addEventListener("ended", endedCallback);
	}
	audio.play();
}

function goHome() {
	document.location.href = "../home/home.html";
}