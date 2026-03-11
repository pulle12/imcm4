$(document).ready(function () {
    // --- NEU: Variablen für Chart.js ---
    let barChart = null;
    let pieChart = null;

    // Arrays für den Suchverlauf (für das Säulendiagramm)
    const searchedCities = [];
    const cityTemperatures = [];

    $('#cityInput').val('');

    $('#getWeatherBtn').click(function () {
        const city = $('#cityInput').val();

        const apiKey = 'API_KEY'; // Ersetze dies durch deinen API-Key von Weatherstack

        const apiUrl = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;

        $('#searchHistory').append(`<li>${city}</li>`);

        $('#weatherResult').html('<p>Lade Wetterdaten...</p>');

        $.get(apiUrl, function (data) {

            const locationName = data.location.name;
            const imageUrl = data.current.weather_icons[0];
            const temperature = data.current.temperature;
            const weatherDesc = data.current.weather_descriptions[0];
            const windSpeed = data.current.wind_speed;
            const humidity = data.current.humidity; // NEU: Luftfeuchtigkeit

            $('#weatherResult').html(`
                        <h3>Wetter in ${locationName}</h3>
                        <img src="${imageUrl}" alt="Wetter-Icon">
                        <p><strong>Temperatur:</strong> ${temperature} °C</p>
                        <p><strong>Bedingungen:</strong> ${weatherDesc}</p>
                        <p><strong>Windgeschwindigkeit:</strong> ${windSpeed} km/h</p>
                    `);

            // Arrays für das Säulendiagramm befüllen
            searchedCities.push(locationName);
            cityTemperatures.push(temperature);

            // Diagramme zeichnen (Aufruf der ausgelagerten Funktionen)
            renderBarChart();
            renderPieChart(locationName, humidity);

        }).fail(function () {
            $('#weatherResult').html('<p style="color: red;">Netzwerkfehler. Konnte die API nicht erreichen.</p>');
        }).always(function () {
            console.log('API-Anfrage abgeschlossen');
        });
    });

    // Funktion 1: Säulendiagramm (Temperaturverlauf aller Suchen)
    function renderBarChart() {
        if (barChart) {
            barChart.destroy(); // Alten Chart zerstören
        }

        barChart = new Chart("barChart", { // id des Canvas-Elements in der HTML
            type: 'bar',
            data: {
                labels: searchedCities, // X-Achse: Die Städte
                datasets: [{
                    label: 'Temperatur (°C)',
                    data: cityTemperatures, // Y-Achse: Die Temperaturen
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true } // Y-Achse soll bei 0 starten
                }
            }
        });
    }

    // Funktion 2: Kreisdiagramm (Luftfeuchtigkeit der aktuell gesuchten Stadt)
    function renderPieChart(cityName, humidityValue) {
        if (pieChart) {
            pieChart.destroy(); // Alten Chart zerstören
        }

        pieChart = new Chart("pieChart", { // id des Canvas-Elements in der HTML
            type: 'pie',
            data: {
                // Ein Kreisdiagramm braucht Beschriftungen für die "Kuchenstücke"
                labels: ['Luftfeuchtigkeit (%)', 'Trockene Luft (%)'],
                datasets: [{
                    // Array mit genau zwei Werten, die zusammen 100 ergeben
                    data: [humidityValue, 100 - humidityValue],
                    backgroundColor: [
                        'rgba(75, 192, 192, 0.7)', // Türkis für Wasser/Feuchtigkeit
                        'rgba(201, 203, 207, 0.4)'  // Grau für den Rest
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    title: {
                        display: true,
                        text: `Luftfeuchtigkeit in ${cityName}`
                    }
                }
            }
        });
    }
});