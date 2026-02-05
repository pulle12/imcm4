const teilnehmerSet = new Set();
const aufgabenMap = new Map();

function teilnehmerHinzufuegen() {
    let teilnehmerInput = document.getElementById("teilnehmerInput").value;
    if(teilnehmerInput.trim() !== "") {
        document.getElementById("fehlermeldung1").innerText = " ";
        teilnehmerSet.add(teilnehmerInput);
        document.getElementById("teilnehmerSet").innerText = JSON.stringify(Array.from(teilnehmerSet), null, "\t"); // von Perplexity generiert um das Set mit [] auszugeben
    } else {
        document.getElementById("fehlermeldung1").innerText = "Fehler: Sie müssen etwas eingeben!";
    }
}

function aufgabeHinzufuegen() {
    let teilnehmerInput = document.getElementById("teilnehmerInputAufgabe").value;
    let aufgabenInput = document.getElementById("aufgabenInput").value;
    if(teilnehmerSet.has(teilnehmerInput)) {
        document.getElementById("fehlermeldung2").innerText = " "; //Fehlermeldung wieder weglöschen falls davor was falsches eingegeben wurde
        aufgabenMap.set(teilnehmerInput, aufgabenInput);
        document.getElementById("aufgabenMap").innerText = JSON.stringify(Object.fromEntries(aufgabenMap), null , "\t"); // von Perplexity generiert um die Map mit {} auszugeben
    } else {
        document.getElementById("fehlermeldung2").innerText = "Fehler: Teilnehmer nicht in der Liste!";
    }
}