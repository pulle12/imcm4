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



function loadPrices() {
    // Hilfsfunktion: eine Zeile in die Tabelle einfügen
    function addStockRow(name, price) {
        const rowHtml = `
            <tr>
                <td>${name}</td>
                <td>${price} €</td>
                <td><button class="remove-stock">Entfernen</button></td>
            </tr>
        `;
        $("#stock-table-body").append(rowHtml);
    }

    const symbols = $("#stockInput").val().trim();

    if (!symbols) {
        alert("Bitte mindestens ein Aktiensymbol eingeben.");
        return;
    }

    $.ajax({
        url: "DEINE_API_URL?symbols=" + encodeURIComponent(symbols),
        method: "GET",
        dataType: "json",
        success: function (response) {
            
            if (!response.stocks) {
                console.error("Unerwartetes API-Format:", response);
                return;
            }

            response.stocks.forEach(function (stock) {
                addStockRow(stock.name, stock.price);
            });
        },
        error: function (xhr, status, error) {
            console.error("API-Request fehlgeschlagen:", status, error);
        }
    });

    $("#stock-table-body").on("click", ".remove-stock", function () {
        $(this).closest("tr").remove();
    });
}