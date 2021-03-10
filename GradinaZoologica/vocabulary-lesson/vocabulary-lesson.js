var lessons = [
    {
        id: "1",
        animal: "tiger",
        word: "carca",
		text: "Copii, ce inseamna a lua in carca? Nu stiti? Carca inseamna spate sau spinare. De aceea, a lua pe cineva in carca inseamna a-l duce in spate. Pe voi parintii va duc in carca?"
    },
    {
        id: "2",
        animal: "fox",
        word: "fauna",
		text: "Ne stii tu pe noi? Celebrele animale ale padurii? Noi suntem toate vietuitoatele din padure. Suntem fauna padurii. Eram tare mandre, dar am auzit un zvon ca mai exista si alte faune. Ca fiecare regiune are o fauna."
    },
    {
        id: "3",
        animal: "crocodile",
        word: "zoologia",
		text: "Copii, ati auzit cine ne studiaza pe noi animalele? Zoolgia. Ce o fi zoologia asta? O stiinta care se ocupa cu toate, toate speciile de animale din lume."
    },
    {
        id: "4",
        animal: "wolf",
        word: "haita",
		text: "Noi lupii traim in haite. Dar stii ce e o haita? O haita este un grup de animale care umbla impreuna dupa prada. Animalele care ataca in haita pot vana animale foarte mari pentru a se hrani. Mai sunt si alte animale care traiesc in haite: leii, hienele si chiar si tigrii."
    },
    {
        id: "5",
        animal: "snake",
        word: "jivine",
		text: "Stii de ce ne-a numit povestitorul jivine? Pentru ca suntem animale salbatice, adica nu am fost domesticite sau imblanzite de om. Inainte sa venim la gradina zoologica noi traiam in libertate si ne asiguram singure hrana si adapostul."
    },
    {
        id: "6",
        animal: "sun",
        word: "zori",
		text: "Haideti sa ne jucam pana maine in zori! Nu stiti ce inseamna? Inseamna sa povestim toata noaptea, pana dimineata sau pana cand rasare soarele."
    },
    {
        id: "7",
        animal: "grumpy_cat",
        word: "ursuz",
		text: "Stiti ce inseamna ca va privesc ursuz? Inseamna ca sunt morocanos si neprietenos. Dar sa nu credeti ca sunt asa in fiecare zi. Cred ca si voi aveti momente cand sunteti suparati si nu aveti chef de joaca."
    }
];

document.onreadystatechange = () => {
    if (document.readyState === 'complete') {
        startGame();
    }
};
var lessonIndex = 0;

function startGame() {
    clearWindow();
    var animalsContainer = document.getElementById("animals-container");
    var animalSpeaking = createAnimal(lessons[lessonIndex].animal, lessonIndex);

    animalsContainer.setAttribute("title", lessons[lessonIndex].text);
	animalsContainer.appendChild(animalSpeaking);
    playAudio(lessons[lessonIndex].word);
}

function createAnimal(animalType, lessonIndex) {
    var animal = document.createElement("IMG");
    animal.setAttribute("src", "../images/" + animalType + ".png");
    // animal.setAttribute("onmouseover", "playAudio('" + animalType + "')");
    // animal.setAttribute("onclick", "checkAnimal('" + animalType + "'," + lessonIndex + ")");
    animal.setAttribute("width", "400");
    animal.setAttribute("height", "400");
    return animal;
}
function clearWindow() {
    document.getElementById("animals-container").innerHTML = "";
    // document.getElementById("question-p").innerHTML = "";
    //document.getElementById("buttons-container").innerHTML = "";
}
function nextWord() {
    if(lessonIndex < lessons.length - 1) {
        lessonIndex++;
        clearWindow();
        var buttons = document.getElementsByClassName('next-button');
        for (var i=0; i< buttons.length; i++) {
            hideButton(buttons[i]);
        }
        var animalsContainer = document.getElementById("animals-container");
        var animalSpeaking = createAnimal(lessons[lessonIndex].animal, lessonIndex);

		animalsContainer.setAttribute("title", lessons[lessonIndex].text);
        animalsContainer.appendChild(animalSpeaking);
        playAudio(lessons[lessonIndex].word);
    }
}
function playAudio(word) {
    var audio = new Audio('../audio/words-lesson/' + word +'.m4a');
    audio.addEventListener("ended", function()
    {
		var buttons = document.getElementsByClassName('next-button');
        if(lessonIndex === lessons.length - 1) {
            clearWindow();
            for (var i=0; i< buttons.length; i++) {
                hideButton(buttons[i]);
            }
            var homeBtn = document.getElementById("home-btn-container");
            showButton(homeBtn);
        } else {
            for (var i=0; i< buttons.length; i++) {
                showButton(buttons[i]);
            }
        }

    });
    audio.play();
}
function showButton(button) {
    button.style.display = 'block';
}
function hideButton(button) {
    button.style.display = 'none';
}
function goHome() {
    document.location.href = "../home/home.html";
}