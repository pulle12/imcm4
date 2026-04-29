const app = Vue.createApp({
    // data() ist der zentrale Zustand (State) unserer Applikation
    data() {
        return {
            apiData: {},
            myTrades: [
                { symbol: 'AAPL', amount: 3, buyPrice: 150.00 },
                { symbol: 'MSFT', amount: 1, buyPrice: 350.00 }
            ],
            apiKey: 'DEIN_MARKETSTACK_API_KEY'
        }
    },
    // Lifecycle-Hook: Wird automatisch ausgeführt, sobald die App geladen ist
    mounted() {
        this.fetchPrices();
    },
    methods: {
        // Methode zum Abrufen der Live-Daten über eine REST-API
        fetchPrices() {
            const url = `http://api.marketstack.com/v1/eod/latest?access_key=${this.apiKey}&symbols=AAPL,MSFT,TSLA,AMZN,GOOGL,META,NVDA`;

            fetch(url)
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Netzwerkantwort war nicht ok (Status: ' + response.status + ')');
                    }
                    return response.json();
                })
                .then(responseData => {
                    let formattedData = {};
                    // Das empfangene Array für einfacheren Zugriff in ein Objekt umwandeln
                    responseData.data.forEach(item => {
                        formattedData[item.symbol] = item.close;
                    });
                    this.apiData = formattedData;
                })
                .catch(err => {
                    console.error("Ladefehler:", err);
                });
        },
        // Methode, die aufgerufen wird, wenn die Kind-Komponente einen Kauf meldet
        saveOrder(orderData) {
            this.myTrades.push(orderData);
            alert("Kauf erfolgreich eingetragen!");
        }
    }
});