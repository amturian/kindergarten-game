document.onreadystatechange = () => {
	if (document.readyState === 'complete') {
		// create game
		displayLists();
		playAudio("habitatIntro");
	}
};


function displayLists() {
	Sortable.create(australia_list, {
	  group: {
		  name: 'australia_list',
		  put: function(to, from, element){
			  var isPut = element.dataset.list === 'australia_list';
			  debugger;
			  return isPut;
		  }
	  },
	  animation: 100
	});
	
	Sortable.create(bengal_list, {
	  group: {
		  name: 'bengal_list',
		  put: function(to, from, element){
			  var isPut = element.dataset.list === 'bengal_list';
			  debugger;
			  return isPut;
		  }
	  },
	  animation: 100
	});
	
	Sortable.create(sahara_list, {
	  group: {
		  name: 'sahara_list',
		  put: function(to, from, element){
			  var isPut = element.dataset.list === 'sahara_list';
			  debugger;
			  return isPut;
		  }
	  },
	  animation: 100
	});
	
	Sortable.create(padurea_ecuatoriala_list, {
	  group: {
		  name: 'padurea_ecuatoriala_list',
		  put: function(to, from, element){
			  var isPut = element.dataset.list === 'padurea_ecuatoriala_list';
			  debugger;
			  return isPut;
		  }
	  },
	  animation: 100
	});
	
	Sortable.create(nil_list, {
	  group: {
		  name: 'nil_list',
		  put: function(to, from, element){
			  var isPut = element.dataset.list === 'nil_list';
			  debugger;
			  return isPut;
		  }
	  },
	  animation: 100
	});
	
	Sortable.create(polul_nord_list, {
	  group: {
		  name: 'polul_nord_list',
		  put: function(to, from, element){
			  var isPut = element.dataset.list === 'polul_nord_list';
			  debugger;
			  return isPut
		  }
	  },
	  animation: 100
	});

	Sortable.create(animals_list, {
	  group: {
		  name: 'animals_list',
		  pull: true,
		  put: false
	  },
	  animation: 100,
	  onEnd: function(event) {
		  var list = event.from;
		  if (list.children.length === 0) {
			  playAudio("habitatSuccess");
			  displayBackButton();
		  }
	  }
	});
}

function playAudio(element) {
	// console.log("audio of " + element + " will be played");
	var audio = new Audio('../audio/' + element +'.m4a');
	audio.play();
}

function displayBackButton() {
	var container = document.getElementById("animals");
	clearContent(container);
	playAudio("habitatEnd");
	
	var button = document.createElement("img");
	button.setAttribute("src", "../images/home.png");
	button.setAttribute("alt", "Intoarcere la pagina principala");
	button.setAttribute("style", "cursor: pointer;");
	button.setAttribute("onclick", "backHome()");
	container.appendChild(button);
}

function clearContent(container) {
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
}

function backHome() {
	document.location.href = "../home/home.html";
}