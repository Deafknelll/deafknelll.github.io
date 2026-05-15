function makeBigger() {
	alert("Hello, world!");
	document.getElementById("textBox").style.fontSize = "24pt";
}

function fancifyText() {
	alert("Radio button changed!");

	var textArea = document.getElementById("textBox");

	if (document.getElementById("fancy").checked) {
		textArea.style.fontWeight = "bold";
		textArea.style.color = "blue";
		textArea.style.textDecoration = "underline";
	} else if (document.getElementById("boring").checked) {
		textArea.style.fontWeight = "normal";
		textArea.style.color = "black";
		textArea.style.textDecoration = "none";
	}
}

function mooText() {
	var textArea = document.getElementById("textBox");
	var text = textArea.value;

	text = text.toUpperCase();

	var sentences = text.split(".");
	text = sentences.join("-Moo.");

	textArea.value = text;
}