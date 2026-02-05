let zahlenarray = [];

function inArraySpeichern() {
    let eingabe = document.getElementById("zahlEingabe").value;
    eingabe = eingabe.replace(",", ".");
    let zahl = parseFloat(eingabe);
    if(!isNaN(zahl)) {
        zahlenarray.push(zahl);
    } else {
        return;
    }
}

function alleZahlenAnzeigen() {
    if(zahlenarray.length !== 0) {
        document.getElementById("alleZahlen").innerHTML=zahlenarray;
    } else {
        document.getElementById("alleZahlen").innerHTML="Keine Zahlen im Array.";
    }
}

function groessteZahlAnzeigen() {
    if(zahlenarray.length !== 0) {
        let a = zahlenarray[0];
        for(let i = 0; i < zahlenarray.length; i++) {
            if(zahlenarray[i]>a) {
                a = zahlenarray[i];
            }
        }
        document.getElementById("groessteZahl").innerHTML=a;
    } else {
        document.getElementById("groessteZahl").innerHTML="Keine Zahlen im Array.";
    }
}

function durchschnittAnzeigen() {
    let summe = 0;
    let anzahl = zahlenarray.length;
    if(anzahl !== 0) {
        for(let i = 0; i < anzahl; i++) {
            summe = summe + zahlenarray[i];
        }
        let durchschnitt = summe / anzahl;
        document.getElementById("durchschnitt").innerHTML=durchschnitt;
    } else {
        document.getElementById("durchschnitt").innerHTML="Keine Zahlen im Array.";
    }
}

function zufallszahlAnzeigen() {
    if(zahlenarray.length !== 0) {
        let randomIndex = Math.floor(Math.random()*zahlenarray.length)
        document.getElementById("zufallszahl").innerHTML=zahlenarray[randomIndex];
    } else {
        document.getElementById("zufallszahl").innerHTML="Keine Zahlen im Array.";
    }
}