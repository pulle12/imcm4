function ausgeben() {
    let marke = document.getElementById("textInput1").value;
    let modell = document.getElementById("textInput2").value;
    let baujahr = document.getElementById("textInput3").value;
    let farbe = document.getElementById("textInput4").value;
    let kraftstoff = document.getElementById("textInput5").value;
    let ps = document.getElementById("textInput6").value;
    let result = "Die Marke des Autos ist " + marke + " und es hat " + ps + " PS.";
    document.getElementById("ergebnis1").innerText = result;
    let auto = {
        "marke": marke,
        "modell": modell,
        "baujahr": baujahr,
        "farbe": farbe,
        "kraftstoff": kraftstoff,
        "ps": ps
    };
    let jsonString = JSON.stringify(auto, null, 2);
    document.getElementById("ergebnis2").innerText = jsonString;
}