function resultado (dado, elemento) {
	var span = document.getElementById(elemento);
	var dado = Math.floor(Math.random() * dado) + 1;
	span.innerText = dado;
}
