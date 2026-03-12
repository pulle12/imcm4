function getWeather() {
    const locationInput = document.getElementById('locationInput').value.trim();

    if (!locationInput) {
        alert('Bitte einen Ort eingeben.');
        return;
    }

    const xhttp = new XMLHttpRequest();
    const key = ''; // API-Key von Weatherstack
    const url = 'http://api.weatherstack.com/current?access_key=' + key + '&units=m&query=' +
        encodeURIComponent(locationInput); //URL bleibt immer gültig (Sonderzeichen und so werden kodiert)
    document.getElementById('searchHistory').appendChild(document.createElement('li')).textContent = locationInput;
    xhttp.onload = function () { // wird automatisch aufgerufen, wenn die Antwort vom Server da ist
        if (xhttp.status === 200) {
            try {
                const data = JSON.parse(xhttp.responseText); //wandelt den JSON-Text den der Server mir geschickt hat in ein JavaScript-Objekt um

                if (data.error) {
                    document.getElementById('errorMessage').innerText =
                        'Fehler: ' + data.error.info;
                    return;
                }

                // Wetterdaten für andere Skripte (z.B. Charts) bereitstellen

                const locationName = data.location.name;
                const temperature = data.current.temperature;
                const humidity = data.current.humidity;

                document.getElementById('weatherTemperature').innerText =
                    temperature + ' °C in ' + locationName;
                document.getElementById('weatherIcon').src =
                    data.current.weather_icons[0];
                document.getElementById('weatherHeadline').innerText = locationName;
                document.getElementById('weatherDescription').innerText = data.current.weather_descriptions[0];
                document.getElementById('weatherSpeed').innerText = 'Windgeschwindigkeit: ' + data.current.wind_speed + ' km/h';
                if(document.getElementById('weatherIcon')) { //Icon nur anzeigen, wenn es auch wirklich da ist
                    document.getElementById('weatherIcon').style.display = 'block';
                }

                // Custom Event feuern, damit andere Skripte auf die Daten reagieren können
                window.dispatchEvent(new CustomEvent('weatherDataReady', {
                    detail: { locationName, temperature, humidity }
                }));
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

    xhttp.open('GET', url);
    xhttp.setRequestHeader("Accept", "application/json");
    xhttp.send();
}