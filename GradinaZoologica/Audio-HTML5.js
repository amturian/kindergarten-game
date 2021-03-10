var mp3snd = './audio/intro.m4a';
var loopsong = "no"
var autostarts = "yes"
var audiowidth = "300"
var borderw = "0"
var bordcolor = "0066FF"
var centerp = "no"

if (loopsong == "yes") {
	var looping5 = "loop";
	var loopingE = "true";
}
else {
	var looping5 = "";
	var loopingE = "false";
}
if (autostarts == "yes") {
	var h5auto = "autoplay";
	var h4auto = "1";
}
else {
	var h5auto = "";
	var h4auto = "0";
}

// function autoplayAudio(audioPath) {


// 	var audio = document.createElement("audio");
// 	audio.setAttribute(h5auto, h5auto);
// 	audio.setAttribute("controls", "controls");
// 	audio.setAttribute("style", 'visibility: hidden');

// 	var source = document.createElement("source");
// 	source.setAttribute("src", audioPath);
// 	source.setAttribute("type", '"audio/mpeg"');

// 	var object = document.createElement("object");
// 	object.setAttribute("classid", '"CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95"');
// 	object.setAttribute("type", '"application/x-mplayer2"');
// 	object.setAttribute("width", audiowidth);
// 	object.setAttribute("height", "45");

// 	var param1 = document.createElement("param");
// 	param1.setAttribute("name", 'filename');
// 	param1.setAttribute("value", audioPath);

// 	var param2 = document.createElement("param");
// 	param2.setAttribute("name", 'autostart');
// 	param2.setAttribute("value", h4auto);

// 	object.appendChild(param1);
// 	object.appendChild(param2);

// 	audio.appendChild(source);
// 	audio.appendChild(object);

// 	document.body.appendChild(audio);


// }

document.write('<audio ' + h5auto + ' controls ' + ' style="visibility: hidden">');
document.write('<source src="' + mp3snd + '" type="audio/mpeg">');
document.write('<object classid="CLSID:22D6F312-B0F6-11D0-94AB-0080C74C7E95" type="application/x-mplayer2" width="' + audiowidth + '" height="45">');
document.write('<param name="filename" value="' + mp3snd + '">');
document.write('<param name="autostart" value="' + h4auto + '">');
document.write('</object>');
document.write('</audio>');
