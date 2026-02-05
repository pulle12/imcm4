let tipps = 1;
let erraten = false;
let limitErreicht = false;

window.onload = function() {
    let start = 1;
    let end = 1000;
    window.alert("Du denkst dir eine Zahl zwischen 1 und 1000 aus.");
    while(!erraten && !limitErreicht) {
        let tipp = Math.floor((start+end) / 2);
        let feedback = window.prompt(tipps + ". Versuch: " + tipp);
        if(feedback.toLowerCase() === "richtig") {
            erraten = true;
        } else if (feedback.toLowerCase() === "zu hoch") {
            tipps++;
            end = tipp - 1;
        } else if (feedback.toLowerCase() === "zu niedrig") {
            start = tipp + 1;
            tipps++;
        } else {
            window.alert("Deine Eingabe war falsch. Sie muss entweder 'richtig', 'zu hoch' oder 'zu niedrig' sein.");
        }
        if(tipps>10) {
            limitErreicht=true;
        }
    }
    if(erraten) {
        document.getElementById('ergebnis').innerHTML="Ich habe die Zahl erraten.";
        document.getElementById('tipps').innerHTML="Gebrauchte Tipps: " + tipps;
    } else if (limitErreicht) {
        document.getElementById('ergebnis').innerHTML="Ich konnte deine Zahl nicht finden.";
    }
}