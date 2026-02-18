function getWeather() {
    let locationInput = document.getElementById('locationInput').value;

    const xhttp = new XMLHttpRequest();

    xhttp.onload = function() {
        document.getElementById("weatherTemperature").innerHTML = data.;
    }

    // Send a request
    xhttp.open("GET", "http://api.weatherstack.com/current?access_key=MYAPIKEY&units=m&query=" + locationInput);
    xhttp.send();
    const data = JSON.parse(xhttp);
}