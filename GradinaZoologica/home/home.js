document.onreadystatechange = () => {
	if (document.readyState === 'complete') {
		var storyButton = document.getElementById("story-container").childNodes[0];
		storyButton.setAttribute("class", "story-button-animation");
		var audio = new Audio('../audio/homeIntro1.m4a');
		audio.addEventListener("ended", function(){
			var gameButtons = document.getElementsByClassName("game-container"),
			length = gameButtons.length;
			
		for(var i = 0; i < length; i++) {
			var game = gameButtons[i].childNodes[0];
			if(game.setAttribute) {
				game.setAttribute("class", "game-animation");
			}
		}
		playAudio('homeIntro2');
		});
		audio.play();
		
	}
};

function playAudio(element) {
	var audio = new Audio('../audio/' + element +'.m4a');
	audio.play();
}