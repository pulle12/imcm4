app.component('portfolio-view', {
    props: {
        holdings: { type: Array, required: true },
        currentPrices: { type: Object, required: true }
    },
    template:
        /*html*/
        `
    <div>
        <h3>Meine Positionen</h3>
        
        <div v-if="holdings.length === 0">Keine Aktien vorhanden.</div>
        
        <ul style="list-style-type: none; padding: 0;">
            <li v-for="(trade, index) in holdings" :key="index" style="padding: 10px; border-bottom: 1px solid #ccc;">
                <strong>{{ trade.amount }}x {{ trade.symbol }}</strong><br>
                Aktueller Wert gesamt: {{ calculateCurrentTotal(trade) }} $ <br>
                
                Status: <span :class="getStatusClass(trade)">{{ getStatusText(trade) }}</span>
            </li>
        </ul>
    </div>
    `,
    methods: {
        // Methode zur Berechnung des aktuellen Gesamtwertes einer Aktienposition
        calculateCurrentTotal(trade) {
            const currentPrice = this.currentPrices[trade.symbol];
            if (!currentPrice) return 'Lädt...';
            return (currentPrice * trade.amount).toFixed(2);
        },
        // Methode zur Ermittlung des Status-Textes (Gewinn oder Verlust)
        getStatusText(trade) {
            const currentPrice = this.currentPrices[trade.symbol];
            if (!currentPrice) return '';

            if (currentPrice > trade.buyPrice) return 'Im Plus';
            if (currentPrice < trade.buyPrice) return 'Im Minus';
            return 'Unverändert';
        },
        // Methode zur Zuweisung der passenden Farbe (CSS-Klasse) basierend auf dem Status
        getStatusClass(trade) {
            const text = this.getStatusText(trade);
            if (text === 'Im Plus') return 'status-plus';
            if (text === 'Im Minus') return 'status-minus';
            return 'status-neutral';
        }
    }
});