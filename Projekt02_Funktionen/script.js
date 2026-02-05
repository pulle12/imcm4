var changedOnce = false;

function button1OnClick() {
    let input;
    if(changedOnce == false) {
        input = document.getElementById("textInput1").value;
        changedOnce = true;
    } else {
        input = document.getElementById("ergebnis").innerText;
    }
    let number = parseFloat(input);
    let result = number * 2;
    document.getElementById("ergebnis").innerText = result;
    console.log("Button 1 clicked, input:", input, "result:", result);
}

function button2OnClick() {
    let input;
    if(changedOnce == false) {
        input = document.getElementById("textInput1").value;
        changedOnce = true;
    } else {
        input = document.getElementById("ergebnis").innerText;
    }
    let number = parseFloat(input);
    let result = number / 2;
    document.getElementById("ergebnis").innerText = result;
    console.log("Button 2 clicked, input:", input, "result:", result);
}