$(function () {

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

    const stockInput = document.getElementById('stockInput').value.trim();

    const apiResult = new XMLHttpRequest();
    const url =
        'http://api.weatherstack.com/current?access_key=meinapikey&symbols=' +
        encodeURIComponent(stockInput);

    apiResult.open('GET', url);
    apiResult.setRequestHeader("Accept", "application/json");
    apiResult.send();

    apiResult.forEach(stock => {
        addStockRow(stock.name, stock.price);
    });

    $("#stock-table-body").on("click", ".remove-stock", function () {
        $(this).closest("tr").remove();
    });
});