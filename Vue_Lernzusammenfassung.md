# Vue.js Lernzusammenfassung

## 1. Grundidee von Vue.js

Vue.js ist ein progressives JavaScript-Framework für Benutzeroberflächen. Es wird verwendet, um Webseiten in kleine, wiederverwendbare Komponenten aufzuteilen und Daten reaktiv darzustellen.

Wichtige Ideen:
- Vue verbindet Daten und Oberfläche automatisch miteinander.
- Änderungen im State werden sofort im Template sichtbar.
- Komponenten machen Code übersichtlicher und besser wartbar.

## 2. Wichtige Begriffe aus der Theorie

### createApp und mount
- `createApp(...)` erstellt eine neue Vue-Anwendung.
- `mount('#app')` hängt die App an ein HTML-Element mit der ID `app`.
- Dieses Element ist der Startpunkt der Anwendung.

### template
- Das `template` enthält das HTML einer Komponente.
- Dort stehen Vue-Direktiven wie `v-if`, `v-for`, `v-model` und Kurzformen wie `:` und `@`.
- Im Template werden Daten mit `{{ ... }}` angezeigt.

### data
- In `data()` liegen die veränderbaren Daten der Komponente.
- Diese Daten heißen auch State.
- Beispiel: Eingabewerte, Listen oder API-Daten.

### props / property
- `props` sind Eigenschaften, die eine Komponente von außen erhält.
- Die Elternkomponente übergibt Daten an die Kindkomponente.
- Beispiel: `marketPrices`, `holdings`, `currentPrices`.

### computed
- `computed` sind berechnete Eigenschaften.
- Sie werden automatisch neu berechnet, wenn sich abhängige Daten ändern.
- Gut für Logik, die direkt aus vorhandenen Daten entsteht, zum Beispiel Prüfungen oder Anzeigen.

### methods
- `methods` enthalten Funktionen, die Aktionen ausführen.
- Beispiele: Formular abschicken, Daten laden, Text bestimmen, Werte berechnen.
- Methoden werden im Template oder in anderen Methoden aufgerufen.

### emit
- Mit `emit` sendet eine Kindkomponente ein Event an die Elternkomponente.
- Das ist wichtig für Kommunikation von Child zu Parent.
- In der Demo wird das mit `$emit('buy-stock', ...)` gemacht.

## 3. Vue-Direktiven und Kurzformen

### v-bind und Kurzform :
- `v-bind` bindet HTML-Attribute dynamisch an Daten.
- Kurzform: `:`
- Beispiele:
  - `:disabled="..."`
  - `:class="..."`
  - `:key="index"`

### v-on und Kurzform @
- `v-on` reagiert auf Events wie Klick, Input oder Submit.
- Kurzform: `@`
- Beispiele:
  - `@submit.prevent="executeTrade"`
  - `@buy-stock="saveOrder"`

### v-model
- `v-model` verbindet Input-Felder direkt mit Daten.
- Die Eingabe und der Wert im State bleiben synchron.
- Beispiel: `v-model="inputSymbol"`
- Mit Modifiern:
  - `v-model.number` wandelt den Wert in eine Zahl um.

### v-if / v-else-if / v-else
- Diese Direktiven blenden Inhalte abhängig von Bedingungen ein oder aus.
- Beispiel: Symbol gefunden, Symbol nicht gefunden oder nichts anzeigen.

### v-for
- `v-for` erstellt Listen aus Arrays.
- Beispiel: Aktienpositionen in einer Schleife anzeigen.

### weitere wichtige Modifier
- `.prevent` verhindert das Standardverhalten eines Events.
- In der Demo wird damit das Neuladen des Formulars verhindert.

## 4. Demo aus Projekt14~555

Die Demo in Projekt14~555 zeigt eine kleine Trading-App mit Live-Kursdaten, einem Kaufformular und einer Portfolioversicht.

### Aufbau der Demo
- [index.html](Projekt14~555_Vuejs_Demo/index.html) bindet Vue per CDN ein und mountet die App an `#app`.
- [main.js](Projekt14~555_Vuejs_Demo/main.js) erstellt die App mit `Vue.createApp(...)`, hält den State und lädt im `mounted()`-Hook die Kursdaten.
- [components/OrderForm.js](Projekt14~555_Vuejs_Demo/components/OrderForm.js) enthält das Formular für Käufe.
- [components/PortfolioView.js](Projekt14~555_Vuejs_Demo/components/PortfolioView.js) zeigt die gekauften Positionen an.

### Was die Demo zeigt
- Daten werden über `data()` zentral gespeichert.
- Die App startet beim Laden automatisch über `mounted()`.
- Kursdaten werden per `fetch` geholt und in `apiData` gespeichert.
- `OrderForm` bekommt Daten per Prop wie `marketPrices`.
- Das Formular nutzt `v-model`, `v-if`, `v-else-if`, `v-model.number` und `@submit.prevent`.
- Ein Kauf wird mit `$emit('buy-stock', ...)` an die Elternkomponente gemeldet.
- `PortfolioView` verwendet `v-for`, `:key`, `:class` und Methoden für Status und Wertberechnung.

### Was man daran gut lernen kann
- Eltern-Kind-Kommunikation über Props und Emit
- Dynamische Attribute mit `v-bind` und Kurzform `:`
- Ereignisse mit `v-on` und Kurzform `@`
- Formularbindung mit `v-model`
- Berechnete Anzeige mit `computed`
- Trennung von Darstellung und Logik in Komponenten

## 5. Theorieinhalte zu Vue.js aus dem VUEMASTERY-Kurs

### Getting Started
- Vue wird als progressives Framework eingeführt.
- Der Einstieg passiert direkt im Browser über CDN oder in einem lokalen Projekt.
- Das Mount-Element `#app` verbindet HTML mit Vue.
- Die doppelte geschweifte Klammer `{{ }}` zeigt reaktive Werte im Template an.

### Root App und Datenfluss
- Mit `createApp(...)` entsteht die Vue-Anwendung.
- Mit `mount('#app')` wird sie an die Seite gehängt.
- Daten werden zentral im App-State gehalten.
- Das Template liest diese Daten nur aus und zeigt sie an.

### Direktiven und Kurzformen
- `v-bind` und `:` für dynamische Attribute
- `v-on` und `@` für Events
- `v-if`, `v-else-if`, `v-else` für Bedingungen
- `v-for` für Listen
- `v-model` für bidirektionale Formularbindung

### Komponenten, Props und Events
- Komponenten teilen die Oberfläche in kleine Teile.
- Props gehen von Parent zu Child.
- Emit geht von Child zu Parent.
- So bleibt die Anwendung modular und der Datenfluss nachvollziehbar.

### Computed und Methods
- `computed` sind abgeleitete Werte mit Cache-Verhalten.
- `methods` sind Funktionen für Aktionen und Logik.
- `computed` eignet sich für Anzeige- und Prüfwerte.
- `methods` eignet sich für Klicks, Formulare und Berechnungen.

### Projektstruktur
- `index.html` enthält den Mount-Point.
- `main.js` startet die Vue-App.
- `assets` enthält Styles und Bilder.
- In späteren Schritten kommen Komponenten dazu, wenn die App größer wird.

## 6. Praxisaufgaben des VUEMASTERY-Kurses

### Praxis 1: App starten und mounten
- Vue per CDN einbinden.
- `#app` als Mount-Element verwenden.
- Die App mit `mount('#app')` starten.

### Praxis 2: Daten laden und anzeigen
- Im `mounted()`-Hook Daten laden.
- API-Daten in einem Objekt speichern.
- Werte im Template mit `{{ ... }}` ausgeben.

### Praxis 3: Formular mit v-model
- Eingaben mit `v-model` an State binden.
- Zahlen mit `v-model.number` direkt als Number verarbeiten.
- Bedingungen mit `v-if` und `v-else-if` anzeigen.

### Praxis 4: Events und Emit
- Formularaktionen mit `@submit.prevent` abfangen.
- Aktionen in `methods` auslagern.
- Kaufdaten per `$emit` an die Elternkomponente schicken.

### Praxis 5: Liste und Status
- Positionen mit `v-for` ausgeben.
- Einen Schlüssel mit `:key` setzen.
- Status und Klassen mit Methoden und `:class` steuern.

### Praxis 6: Komponenten, Props und Computed
- Daten per Props weitergeben.
- Abgeleitete Werte mit `computed` prüfen.
- Die Anwendung in klar getrennte Komponenten aufteilen.

## 7. Lernmerksätze

- `props` gehen von Parent zu Child.
- `emit` geht von Child zu Parent.
- `computed` ist für abgeleitete Werte.
- `methods` sind für Aktionen und Logik.
- `mounted()` läuft nach dem Einhängen der App.
- `template` beschreibt die sichtbare Oberfläche.
- `:` ist die Kurzform von `v-bind`.
- `@` ist die Kurzform von `v-on`.

## 8. Kurzfazit

Vue.js macht es leicht, Daten, Logik und Oberfläche sauber zu trennen. Die Demo in Projekt14~555 verbindet die wichtigsten Bausteine zu einer kleinen echten Anwendung: Mounten der App, Daten laden, Formular binden, Positionen anzeigen und Käufe per Emit weitergeben. So sieht man die Theorie direkt in einer funktionierenden Struktur.
