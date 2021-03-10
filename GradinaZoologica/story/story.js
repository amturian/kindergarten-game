var images = [
	{
		name: "zoo1",
		text: "Grădina zoologică e un fel de magazin de jucării, unde tigrii, girafele şi leoparzii sînt vii."
	}, 
	{
		
		name: "wolf1",
		text: "Rogi lupul să te ia puţin în cîrcă şi cînd colo te mănîncă. Hei, ca pe Scufiţa Roşie te-ar mjnca, cuşca dacă l-ar lăsa."
	}, 
	{
		name: "granny",
		text: "Dar, vedeţi, aceste cuşti de fier, sau colivii, sînt ca nişte bunicuţe ale lor : au grijă să nu facă prostii."
	}, 
	{
		name: "zoologia",
		text: "Copii! lăsaţi un pic gălăgia. Faceţi acum cunoştinţă cu zoologia."
	}, 
	{
		name: "fauna",
		text: "Iată aici reprezentanţii mîndrei faune, care ştiu să urle, să ragă, să zbiere şi să schiaune."
	}, 
	{
		name: "lion",
		text: "Dar, miraţi-vă mai încet, dragii mei, că asurziţi aceşti lei."
	}, 
	{
		name: "snake",
		text: "Oriunde întorci capul vezi un şirpe sau un leopard, care sare peste un gard."
	}, 
	{
		name: "tiger",
		text: "Iată tigrul adus din Bengal cu cheltuială. Toată blana de pe el e naturală."
	}, 
	{
		name: "ostrich",
		text: "Mirela, acela nu se strigă cuţu-cuţu, că e struţul."
	}, 
	{
		name: "crocodile",
		text: "Balaurul care se prăjeşte .pe nisip e crocodilul, iar bazinul de lîngă el e Nilul."
	}, 
	{
		name: "elephant",
		text: "Elefantul care vă priveşte ursuz e întrebuinţat în loc de troleibuz. încaleci pe el dimineaţa şi pleci la şcoală, mergînd o mie de staţii prin pădurea ecuatorială."
	}, 
	{
		name: "camel",
		text: ". Sahara e o regiune şi mai dificilă. Pe acolo circulă numai această cămilă. Orişiunde ar pleca, îşi ia întotdeauna apă cu ea, aşa cam la vreo două-trei butoiaşe; cred că în cele două cocoaşe! (Fiindcă-i limpede ca bună seara : nu poţi şti cînd curge apa în Sahara!)"
	}, 
	{
		name: "kangoroo",
		text: "Cangurul, uite, are blana roşă. Ga să nu-şi piardă puii, îi poartă cu el într-o sacoşă (că i-a mai pierdut odată, i-a căutat Australia toată)."
	}, 
	{
		name: "wolf2",
		text: "Lupul trăieşte în haite şi pe la noi. Mănîncă dimineaţa oi, la prînz oi, şi seara tot oi. Din cauza acestui meniu fix, umblă oamenii după el prin păduri, cu puşti şi cu topoare, să-1 cam omoare."
	}, 
	{
		name: "polar",
		text: "Ursul polar poartă, ca un moş, cojoc şi fular. îi e ciudă că aici nu-i aşa ger şi-ar intra într-un frigider."
	}, 
	{
		name: "rino",
		text: "Ce să vă mai arăt ? Rinocerul ?"
	}, 
	{
		name: "dromader",
		text: "Dromaderul?"
	}, 
	{
		name: "zoo2",
		text: "Grădina zoologică e foarte frumoasă, dar eu zic să mai mergem şi-acasă."
	}, 
	{
		name: "rattlesnake",
		text: "E tîrziu : a sunat şarpele cu clopoţei de ora trei. Şi animalelor nu le place să mai întîrziem pe-aici după orele lor de servici."
	}, 
	{
		name: "parents",
		text: "Ş-apoi, cei urîţi or fi venit de la lucru acasă şi acum ne aşteaptă la masă."
	}, 
	{
		name: "zori",
		text: "Şi e musai pînă mîine în Jori, să le povestim totul, măcar de-o sută de ori"
	}, 
	{
		name: "jivine",
		text: "Cum a fost, cum a decurs toată treaba... Altfel, înseamnă c-am văzut atîtea jivine degeaba."
	}
]; // check wheter to add more images to follow the story like zoo, carca, cage, grandma near the cage (Diana's proposal)

var imagesX = ["zoo1", "wolf1", "granny", "zoologia", "fauna", "lion", "snake", "tiger", "ostrich", "crocodile", "elephant", "camel", "kangoroo", "wolf2", "polar", "rino", "dromader", "zoo2", "rattlesnake", "parents", "zori", "jivine"];

var index = 0;


document.onreadystatechange = () => {
	if (document.readyState === 'complete') {
		var audio = new Audio('../audio/story/storyIntro.m4a');
		audio.addEventListener("ended", function() 
		 {
			 var body = document.getElementsByTagName("BODY")[0];
			 var container = document.getElementById("book-container");
			 body.removeChild(container);
			 display();
		 });
		// workaround because https://gamedev.stackexchange.com/questions/163365/html5-games-play-failed-because-the-user-didnt-interact-with-the-document-fi
		document.getElementById("book-container").addEventListener('click', () => audio.play());
		// audio.play();	
	}
};

function playAudio(element) {
	var audio = new Audio('../audio/story/' + element +'.m4a');
	audio.addEventListener("ended", function() 
	 {
		 displayNext();
	 });
	audio.muted = false;
	audio.play();
}

function display() {
	var container = document.getElementById("grammar-game-container");
	var imageContainer = document.createElement("div");
	imageContainer.setAttribute("class", "image-story-container");
	var image = document.createElement("img");
	image.setAttribute("class", "image-story");
	image.setAttribute("src", "../images/" + images[index].name + ".png");
	image.setAttribute("alt", "Imaginea este " + images[index].name);
	imageContainer.setAttribute("title", images[index].text);
	imageContainer.appendChild(image);
	container.appendChild(imageContainer);
	playAudio(images[index].name);
}

function displayNext() {
	clearContainer();
	index = index + 1;
	if (images[index] != undefined) {
		display();
	} else {
		showHomePage(); // this should be the page with all the games and also the story in order to listen to it again if wanted.
	}
}

function clearContainer() {
	var container = document.getElementById("grammar-game-container");
	while (container.firstChild) {
		container.removeChild(container.firstChild);
	}
}

function showHomePage() {
	var button = document.createElement("img");
	button.setAttribute("src", "../images/home.png");// + ".png");
		button.setAttribute("onclick", "goHome()");
		document.getElementById("grammar-game-container").appendChild(button);
		button.style = "  position: absolute;\n" +
            "  left: 0;\n" +
            "  right: 0;\n" +
            "  top: 30px;\n" +
			" margin: auto;\n" +
            "  text-align: center;";
}

function goHome() {
	document.location.href = "../home/home.html";
}