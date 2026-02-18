function getWeather() {
    const locationInput = document.getElementById('locationInput').value.trim();

    if (!locationInput) {
        alert('Bitte einen Ort eingeben.');
        return;
    }

    const xhttp = new XMLHttpRequest();
    const url =
        'http://api.weatherstack.com/current?access_key=apikey&units=m&query=' +
        encodeURIComponent(locationInput);

    xhttp.onload = function () {
        if (xhttp.status === 200) {
            try {
                const data = JSON.parse(xhttp.responseText);

                if (data.error) {
                    document.getElementById('errorMessage').innerText =
                        'Fehler: ' + data.error.info;
                    return;
                }

                document.getElementById('weatherTemperature').innerText =
                    data.current.temperature + ' °C in ' + data.location.name;
                document.getElementById('weatherIcon').src =
                    data.current.weather_icons[0];
                document.getElementById('weatherHeadline').innerText = data.location.name;
                document.getElementById('weatherDescription').innerText = data.current.weather_descriptions[0];
                document.getElementById('weatherSpeed').innerText = 'Windgeschwindigkeit: ' + data.current.wind_speed + ' km/h';
                if(document.getElementById('weatherIcon')) {
                    document.getElementById('weatherIcon').style.display = 'block';
                }
            } catch (e) {
                document.getElementById('errorMessage').innerText =
                    'Antwort konnte nicht gelesen werden.';
            }
        } else {
            document.getElementById('errorMessage').innerText =
                'HTTP-Fehler: ' + xhttp.status;
        }
    };

    xhttp.onerror = function () {
        document.getElementById('errorMessage').innerText =
            'Netzwerkfehler beim Abrufen der Wetterdaten.';
    };

    // Anfrage senden
    xhttp.open('GET', url);
    xhttp.send();
}