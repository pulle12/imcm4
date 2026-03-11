$(document).ready(function () {
    let barChart = null;
    let pieChart = null;

    const searchedCities = [];
    const cityTemperatures = [];
    
    $('#locationInput').val('');
    document.querySelector('#chartKastl').classList.add('hidden');

    // Auf Wetterdaten aus dem alten getWeather-Skript reagieren
    window.addEventListener('weatherDataReady', function (event) {
        const { locationName, temperature, humidity } = event.detail;

        // Daten in die Arrays für das Balkendiagramm übernehmen
        searchedCities.push(locationName);
        cityTemperatures.push(temperature);

        // Diagramme zeichnen/aktualisieren
        renderBarChart();
        renderPieChart(locationName, humidity);
        document.querySelector('#chartKastl').classList.remove('hidden');
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