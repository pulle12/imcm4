$(document).ready(function () {
    $('#stockInput').val('');

    $('#addStockButton').click(function () {
        const stock = $('#stockInput').val();
        const apiKey = '';
        const apiUrl = `https://api.marketstack.com/v2/eod/latest?access_key=${apiKey}&symbols=${stock}`;
        $('#searchHistory').append(`<li>${stock}</li>`);
        $('#loadingText').html('<p>Lade Wetterdaten...</p>');

        $.get(apiUrl, function (data) {
            const first = data.data[0];
            const stockName = first.symbol;
            const stockPrice = first.close;
            
            $('#stock-table-body').html(`
                <tr>
                <td>${stockName}</td>
                <td>${stockPrice}</td>
                <td><button class="remove-stock">Entfernen</button></td>
            `);
            $('#loadingText').html();
        }).fail(function () {
            $('#loadingText').html('<p style="color: red;">Netzwerkfehler. Konnte die API nicht erreichen.</p>');
        }).always(function () {
            console.log('API-Anfrage abgeschlossen.');
        });
    });
});

// KI-generiertes Hilfs-Statement für das Löschen der Zeile in der Tabelle bei dem der Button zum Entfernen gedrückt wurde
$('#stock-table-body').on('click', '.remove-stock', function () {
    $(this).closest('tr').remove();
});