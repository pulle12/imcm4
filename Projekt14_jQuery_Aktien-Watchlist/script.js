let lineChart = null;
let stocks = [];
let datums = [];

$(document).ready(function () {
    $('#stockInput').val('');

    $('#addStockButton').click(function () {
        const stock = $('#stockInput').val().trim().toUpperCase();
        const apiKey = '923f5e085aa50b51d4e83b549b07b157';

        if (!stock) {
            $('#loadingText').html('<p style="color: red;">Bitte gib ein Aktiensymbol ein.</p>');
            return;
        }

        if (!apiKey) {
            $('#loadingText').html('<p style="color: red;">Trage zuerst deinen Marketstack API-Key in script.js ein.</p>');
            return;
        }

        const apiUrl = `https://api.marketstack.com/v1/eod?access_key=${apiKey}&symbols=${stock}&limit=30&sort=ASC`;
        $('#searchHistory').append(`<li>${stock}</li>`);
        $('#loadingText').html('<p>Lade Aktienkursdaten...</p>');

        $.get(apiUrl, function (data) {
            const entries = data.data;

            if (!entries || entries.length === 0) {
                $('#loadingText').html('<p style="color: red;">Keine Kursdaten fuer dieses Symbol gefunden.</p>');
                return;
            }

            const first = entries[0];
            const stockName = first.symbol;
            const stockPrice = first.close;

            stocks = [];
            datums = [];

            for (let i = 0; i < entries.length; i++) {
                stocks.push(entries[i].close);
                datums.push(entries[i].date.slice(0, 10));
            }

            $('#stock-table-body').append(`
                <tr>
                    <td>${stockName}</td>
                    <td>${stockPrice}</td>
                    <td><button class="remove-stock">Entfernen</button></td>
                </tr>
            `);

            $('#loadingText').html('');
            renderLineChart();
        }).fail(function (jqXHR) {
            let message = 'Netzwerkfehler. Konnte die API nicht erreichen.';

            if (jqXHR.responseJSON && jqXHR.responseJSON.error && jqXHR.responseJSON.error.message) {
                message = jqXHR.responseJSON.error.message;
            }

            if (jqXHR.status === 401) {
                message = 'API-Key ungueltig oder nicht eingetragen.';
            }

            if (jqXHR.status === 403) {
                message = 'Dein Marketstack-Tarif unterstuetzt diesen Aufruf nicht.';
            }

            $('#loadingText').html(`<p style="color: red;">${message}</p>`);
        });
    });

    $('#stock-table-body').on('click', '.remove-stock', function () {
        $(this).closest('tr').remove();
    });
});

function renderLineChart() {
    if (lineChart) {
        lineChart.destroy();
    }

    lineChart = new Chart(document.getElementById('lineGraph'), {
        type: 'line',
        data: {
            labels: datums,
            datasets: [{
                label: 'Schlusskurs',
                backgroundColor: 'rgba(0, 123, 255, 0.2)',
                borderColor: 'rgba(0, 123, 255, 1)',
                data: stocks,
                tension: 0.2
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: false
                }
            }
        }
    });
}