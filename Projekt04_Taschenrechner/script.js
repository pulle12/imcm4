let zahl1, zahl2, operation;

window.onload = function () {
    zahl1 = getValidNumber("Bitte gib die erste Zahl ein:");
    operation = getValidOperation("Bitte gib die Rechenoperation ein (+, -, *, /):");
    zahl2 = getValidNumber("Bitte gib die zweite Zahl ein:");
    berechnen();
};

function getValidNumber(message) {
    let num;
    do {
        num = parseFloat(prompt(message));
    } while (isNaN(num)); 
    return num;
}

function getValidOperation(message) {
    let op;
    const validOperations = ["+", "-", "*", "/"];
    do {
        op = prompt(message);
    } while (!validOperations.includes(op));
    return op;
}

function berechnen() {
    let ergebnis, ausgabe;
    switch (operation) {
        case "+":
            ergebnis = zahl1 + zahl2;
            ausgabe = `Ergebnis von ${zahl1} + ${zahl2}:  ${ergebnis}`;
            break;
        case "-":
            ergebnis = zahl1 - zahl2;
            ausgabe = `Ergebnis von ${zahl1} - ${zahl2}:  ${ergebnis}`;
            break;
        case "*":
            ergebnis = zahl1 * zahl2;
            ausgabe = `Ergebnis von ${zahl1} * ${zahl2}:  ${ergebnis}`;
            break;
        case "/":
            if (zahl2 === 0) {
                ausgabe = "Fehler: Division durch 0 ist nicht erlaubt!";
            } else {
                ergebnis = zahl1 / zahl2;
                ausgabe = `Ergebnis von ${zahl1} / ${zahl2}:  ${ergebnis}`;
            }
            break;
        default:
            ausgabe = "Ungültige Operation";
    }
    document.getElementById("ergebnis").textContent = ausgabe;
}