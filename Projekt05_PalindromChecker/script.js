function pruefePalindrom() { 
    const eingabe = document.getElementById('eingabe').value;
    let eingabeLength;

    if (eingabe.length === 0) {
        document.getElementById('ergebnis').innerText = "Bitte gib ein Wort ein.";
        return;
    } else {
        eingabeLength = eingabe.length;
    }

    const arrayRueckwaerts = new Array();

    for(let i = eingabeLength - 1; i >= 0; i--){
        arrayRueckwaerts.push(eingabe[i].toLowerCase());
    }

    const arrayVorwaerts = new Array();

    for(let i = 0; i < eingabeLength; i++) {
        arrayVorwaerts.push(eingabe[i].toLowerCase());
    }

    if(arrayVorwaerts.toString() === arrayRueckwaerts.toString()){
        document.getElementById('ergebnis').innerText = "Das Wort " + eingabe + " ist ein Palindrom.";
    } else {
        document.getElementById('ergebnis').innerText = "Das Wort " + eingabe + " ist kein Palindrom.";
    }
}