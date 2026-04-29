app.component('order-form', {
    // Props definieren, welche Daten diese Komponente von außen (Eltern) erwartet
    props: {
        marketPrices: { type: Object, required: true }
    },
    data() {
        return {
            inputSymbol: '',
            inputAmount: 1
        }
    },
    template:
        /*html*/
        `
    <form @submit.prevent="executeTrade">
        <h3>Aktie kaufen</h3>
        
        <label>Aktiensymbol eingeben (z.B. AAPL, MSFT):</label>
        <input type="text" v-model="inputSymbol" placeholder="Symbol eintragen...">
        
        <p v-if="isValidSymbol" style="color: green;">
            Kurs gefunden: {{ marketPrices[inputSymbol] }} $
        </p>
        <p v-else-if="inputSymbol !== ''" style="color: red;">
            Symbol nicht gefunden.
        </p>

        <label>Anzahl:</label>
        <input type="number" v-model.number="inputAmount" min="1">
            
        <button type="submit" :disabled="!isValidSymbol || inputAmount <= 0">
            Kauf bestätigen
        </button>     
    </form>
    `,
    // Berechnete Eigenschaften: Aktualisieren sich automatisch und effizient, wenn sich Daten ändern
    computed: {
        isValidSymbol() {
            if (!this.inputSymbol) return false;
            // Prüft, ob das eingegebene Symbol in den API-Daten (marketPrices) existiert
            return this.marketPrices.hasOwnProperty(this.inputSymbol);
        }
    },
    methods: {
        executeTrade() {
            if (!this.isValidSymbol || this.inputAmount <= 0) return;

            // $emit sendet ein eigenes Event nach oben an die Hauptinstanz (Kommunikation Child -> Parent)
            this.$emit('buy-stock', {
                symbol: this.inputSymbol,
                amount: this.inputAmount,
                buyPrice: this.marketPrices[this.inputSymbol]
            });

            // Formular nach dem Kauf zurücksetzen
            this.inputSymbol = '';
            this.inputAmount = 1;
        }
    }
});