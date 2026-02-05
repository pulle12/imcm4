console.log("Mark Gritsch")

function textAendern() {
    var text = document.getElementById("demo");
    text.innerHTML = "Das ist der neue Text.";
    text.style.color= "black";
}
function textZueruckAendern() {
    var text = document.getElementById("demo");
    text.innerHTML = "Das ist der alte Text.";
    text.style.color="darkblue";
}

function textAusgeben() {
    var a = 5;
    var b = 6;
    var addition = a+b;
    window.alert("Das Ergebnis von 5 und 6 ist " + addition + ".");
}

function bodyAendern() {
    var body = document.getElementById("body"); 
    body.classList.toggle("dark");
    var button4 = document.getElementById("button4"); 
    if(body.classList.contains("dark")) {
        button4.innerHTML = "Light-Mode";
    } else {
        button4.innerHTML = "Dark-Mode";
    }
}
