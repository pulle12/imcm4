function transformate() {
    let ipInput = document.getElementById('ipInput').value;
    const arrayOctetsDecimal = ipInput.split(".");
    for(let i = 0; i <= 3; i++) {
        if(isNaN(arrayOctetsDecimal[i]) || arrayOctetsDecimal[i] < 0 || arrayOctetsDecimal[i] > 255) {
            alert("Ungültige IP-Adresse! Bitte geben Sie eine gültige IP-Adresse im Format xxx.xxx.xxx.xxx ein, wobei xxx eine Zahl zwischen 0 und 255 ist.");
            return;
        }
    }
    let ipBinary = [];
    for(let i = 0; i <= 3; i++) {
        ipBinary[i] = (arrayOctetsDecimal[i] >>> 0).toString(2).padStart(8, "0");
    }
    document.getElementById("binaryOutput").innerHTML=ipBinary.join(".");
}

function resetForm() {
    let input = document.getElementById("ipInput");
    input.value="";
    input.focus();
    document.getElementById("binaryOutput").innerHTML="";
}