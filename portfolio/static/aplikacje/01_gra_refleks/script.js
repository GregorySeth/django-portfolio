var start = new Date().getTime();

var proby = 10;

var wyniki = [];

function losTakNie() {

	var los = Math.floor((Math.random() * 10) + 1);

	if (los < 6) {

		return false;

	} else {

		return true;

	}

}

function utworzFigure() {

	document.getElementById("figura").style.display = "block";
	nadajKsztalt();
	zmienPolozenie();
	zmienKolor();
	zmienRozmiar();
	zerujCzas();

}

function nadajKsztalt() {

	var los = losTakNie();

	if (los == true) {

		document.getElementById("figura").style.borderRadius = "50%";

	} else {

		document.getElementById("figura").style.borderRadius = "0%";

	}

}

function zmienPolozenie() {

	var wysokosc = Math.floor(Math.random() * 361);

	var szerokosc = Math.floor(Math.random() * 461);

	document.getElementById("figura").style.top = wysokosc + "px";

	document.getElementById("figura").style.left = szerokosc + "px";

}

function zmienKolor() {

	var r = Math.floor(Math.random() * 256);

	var g = Math.floor(Math.random() * 256);

	var b = Math.floor(Math.random() * 256);

	var kolor = "rgb(" + r + "," + g + "," + b + ")";

	document.getElementById("figura").style.backgroundColor = kolor;

}

function zmienRozmiar() {

	var rozmiar = (Math.floor(Math.random() * 245) + 50);
				
	document.getElementById("figura").style.height = rozmiar + "px";

	document.getElementById("figura").style.width = rozmiar + "px";

}

function licznik() {

	var end = new Date().getTime();

	var jakDlugo = (end - start) / 1000;

	document.getElementById("liczba").innerHTML = jakDlugo + " s.";

}

function kill() {

	licznik();

	if (proby > 0) {

		document.getElementById("figura").style.display = "none";

		czas = Math.floor(Math.random() * 2001)

		setTimeout(utworzFigure, czas);

		proby--;

		wyniki.push(" " + document.getElementById("liczba").innerHTML)

	} else { 

		document.getElementById("figura").style.display = "none";

		alert("KONIEC! Twoje wyniki: [" + wyniki + " ]");

		document.getElementById("liczba").innerHTML = "0.00 s.";

		}

}

function zerujCzas() {

	start = new Date().getTime();

}

function reset() {

	zerujCzas();

	proby = 10;

	wyniki = [];

	utworzFigure();

}