function updateTime() {
    let now = new Date();
    let futureDate = new Date(2025, 11, 24);
    let difference = futureDate - now;
    let days = Math.floor(difference / (1000 * 60 * 60 * 24)); //abrunden
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);
    document.getElementById("days").innerText = String(days).padStart(2, '0'); // immer zweistellig
    document.getElementById("hours").innerText = String(hours).padStart(2, '0');
    document.getElementById("minutes").innerText = String(minutes).padStart(2, '0');
    document.getElementById("seconds").innerText = String(seconds).padStart(2, '0');
    document.getElementById("futureDate").innerText = "Bis " + futureDate + " sind es noch";

}

updateTime(); // Initialer Aufruf, damit am Anfang nicht immer kurz 0 da steht.
setInterval(updateTime, 1000); // Aktualisiert die Zeit jede Sekunde
