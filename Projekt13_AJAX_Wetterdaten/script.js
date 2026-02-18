function getWeather() {
    const locationInput = document.getElementById('locationInput').value.trim();

    if (!locationInput) {
        alert('Bitte einen Ort eingeben.');
        return;
    }

    const xhttp = new XMLHttpRequest();
    const url =
        'http://api.weatherstack.com/current?access_key=DEIN_API_KEY&units=m&query=' +
        encodeURIComponent(locationInput);

    xhttp.onload = function () {
        if (xhttp.status === 200) {
            try {
                const data = JSON.parse(xhttp.responseText);

                if (data.error) {
                    document.getElementById('weatherTemperature').innerText =
                        'Fehler: ' + data.error.info;
                    return;
                }

                document.getElementById('weatherTemperature').innerText =
                    data.current.temperature + ' °C in ' + data.location.name;
            } catch (e) {
                document.getElementById('weatherTemperature').innerText =
                    'Antwort konnte nicht gelesen werden.';
            }
        } else {
            document.getElementById('weatherTemperature').innerText =
                'HTTP-Fehler: ' + xhttp.status;
        }
    };

    xhttp.onerror = function () {
        document.getElementById('weatherTemperature').innerText =
            'Netzwerkfehler beim Abrufen der Wetterdaten.';
    };

    // Anfrage senden
    xhttp.open('GET', url);
    xhttp.send();
}