// Sicherstellen, dass das DOM vollständig geladen ist
$(document).ready(function () {

    $('#cityInput').val(''); // Eingabefeld leeren (document.getElementById('cityInput').value = '')

    // Event-Handler für den Button-Klick (wie document.getElementById('getWeatherBtn').addEventListener('click', function() { ... }))
    $('#getWeatherBtn').click(function () {
        const city = $('#cityInput').val(); // Hole den Wert aus dem Eingabefeld

        const apiKey = 'API_KEY'; // Ersetze dies durch deinen API-Key von Weatherstack

        const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

        $('#searchHistory').append(`<li>${city}</li>`); // Suchverlauf aktualisieren (anhängen)

        $('#weatherResult').html('<p>Lade Wetterdaten...</p>'); // Ladehinweis anzeigen (document.getElementById('weatherResult').innerHTML = '<p>Lade Wetterdaten...</p>')

        // jQuery GET-Request an die API
        $.get(apiUrl, function (data) { // wird aufgerufen, wenn die Anfrage erfolgreich war

            // Daten aus der Antwort (JSON) extrahieren
            const locationName = data.location.name;
            const imageUrl = data.current.weather_icons[0];
            const temperature = data.current.temperature;
            const weatherDesc = data.current.weather_descriptions[0];
            const windSpeed = data.current.wind_speed;

            // Daten auf der Webseite anzeigen
            $('#weatherResult').html(`
                        <h3>Wetter in ${locationName}</h3>
                        <img src="${imageUrl}" alt="Wetter-Icon">
                        <p><strong>Temperatur:</strong> ${temperature} °C</p>
                        <p><strong>Bedingungen:</strong> ${weatherDesc}</p>
                        <p><strong>Windgeschwindigkeit:</strong> ${windSpeed} km/h</p>
                    `);

        }).fail(function () { // wird aufgerufen, wenn die Anfrage fehlschlägt (z. B. Netzwerkfehler)
            $('#weatherResult').html('<p style="color: red;">Netzwerkfehler. Konnte die API nicht erreichen.</p>');
        }).always(function () { // wird immer augerufen, egal ob Erfolg oder Fehler
            console.log('API-Anfrage abgeschlossen');
        });
    });
});