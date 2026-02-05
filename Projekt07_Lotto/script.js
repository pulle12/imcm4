window.onload = function () {
    let correctTips = 0;
    let idZiehung = "ziehung";
    let idTips = "zahl";
    const zahlen = [];
    const eingaben = [];

    // Hier generiere ich die 6 zufälligen Lottozahlen
    for (let i = 0; i <= 5; i++) {
        let zufallszahl;
        do {
            zufallszahl = Math.floor(Math.random() * 45) + 1;
        } while (zahlen.includes(zufallszahl)); 
        zahlen[i] = zufallszahl;
    }

    // Hier lasse ich den User die Zahlen eingeben und validiere sie
    for (let i = 0; i <= 5; i++) {
        let num;
        do {
            num = getValidNumber("Geben Sie die " + (i + 1) + ". Zahl ein (1–45):");
            if (num < 1 || num > 45) {
                alert("Bitte eine Zahl zwischen 1 und 45 eingeben!");
                num = NaN; 
            } else if (eingaben.includes(num)) {
                alert("Diese Zahl haben Sie bereits eingegeben!");
                num = NaN; 
            }
        } while (isNaN(num));

        eingaben[i] = num;
    }


    // Die beiden Arrays werden ausgegeben, verglichen und das Ergebnis gesetzt
    for(let i=0;i<=5;i++) {
        if(eingaben[i] === zahlen[0] || eingaben[i] === zahlen[1] || eingaben[i] === zahlen[2] || eingaben[i] === zahlen[3] || eingaben[i] === zahlen[4] || eingaben[i] === zahlen[5]) {
            correctTips++;
        }
        document.getElementById(idTips.concat((i+1))).innerHTML = eingaben[i];
        document.getElementById(idZiehung.concat((i+1))).innerHTML = zahlen[i];
    }

    document.getElementById("ergebnis").innerHTML = `Sie haben ${correctTips} von 6 Zahlen richtig getippt.`;
    document.getElementById("wahrscheinlichkeit2").innerHTML = `Die Wahrscheinlichkeit, 3 Richtige zu tippen, liegt bei` + ` 1 zu ${Math.pow(45,3)}.`;
    document.getElementById("wahrscheinlichkeit").innerHTML = `Die Wahrscheinlichkeit, 6 Richtige zu tippen, liegt bei` + ` 1 zu ${Math.pow(45,6)}.`;
}

//Hilfsfunktion zur Eingabevalidierung
function getValidNumber(message) {
    let num;
    do {
        num = parseFloat(prompt(message));
    } while (isNaN(num)); 
    return num;
}
//Mani kracht