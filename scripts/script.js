function translateColor(event) {
	if (event.keyCode === 13) {
		var code = document.getElementById("color").value;
		var element = document.getElementById("colorBox");
		element.style.background = code;
	}
}

function translateColor() {
		var code = document.getElementById("color").value;
		var element = document.getElementById("colorBox");
		element.style.background = code;
	
}
		