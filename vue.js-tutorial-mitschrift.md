# Mitschrift zum Tutorial

## Video 1: Was ist Vue und um was geht es in diesem Tutorial?
Allgemeine Infos wurden gegeben. HTML, CSS und JavaScript werden vorausgesetzt. Es wird mit Vue 3 gearbeitet, da es die neueste Version ist und viele Verbesserungen bietet.

## Video 2: Warum sollte man Vue lernen?

### Kurzbeschreibung
- Vue ist ein **progressives Framework**.

### Popularität und Community (2024)
Quelle: Stack Overflow Survey und State of JS

- viert-beliebtestes Frontend-JavaScript-Framework
- 60,2 % Admiration Rating
- Platz 2 bei Nutzung, Bekanntheit und positiver Wahrnehmung
- Platz 3 bei Interesse und Retention

### GitHub-Statistiken
- 208.000 Stars
- 33.700 Forks

### Unternehmen, die Vue nutzen
- Adobe
- Nintendo
- Alibaba
- Zoom
- GitLab
- Grammarly
- Netlify
- Trustpilot
- und viele weitere

### npm-Downloads
- 5 bis 6 Millionen Downloads pro Woche

## Video 3: Erste Vue App erstellen
### Aufbau des Tutorials
Das Video bzw. Audio läuft im Hintergrund, links ist der Code und die Ordnerstruktur und rechts sieht man den Browser mit der laufenden App.
### Videoinhalte
Es wird mit CDN das vue.js-Skript eingebunden.
Funktionsweise von vue: Es hängt sich an ein HTML-Element (hier: `#app`) und steuert dessen Inhalt. Wichtig sind die doppelten geschweiften Klammern `{{}}`, die als Platzhalter für Daten dienen.

**Konzepte:**

In HTML: 
- Im Head wird das Vue.js-Skript eingebunden.
- Im Body wird ein div mit der ID `app` erstellt, das als Mounting Point dient.
- Statt `world`, wird `{{name}}` geschrieben.

In JavaScript: 
- Mit `const {createApp, ref} = Vue` wird die createApp-Funktion und die ref-Funktion aus dem Vue-Objekt extrahiert. `createApp` wird verwendet, um eine neue Vue-Anwendung zu erstellen, und `ref` wird verwendet, um reaktive Daten zu erstellen.
- `createApp({ ... }).mount('#app')` erstellt eine neue Vue-Anwendung mit den angegebenen Optionen und mountet sie an das HTML-Element mit der ID `app`. Als Inhalt wird setup() aufgerufen und die const name die wir in HTML brauchen, definiert und dann zurückgegeben.

Ich erweiterte das Testskript um eine weitere Variable `test` und gab ihr den Wert "servus". Es funktionierte.

## Video 4: Erste Vue App erstellen V2
Man bekommt eine Aufgabe gestellt, wo man die 404-Page mit Vue verändern soll, sodass man alle 4 Tags hat.
Die Aufgabenstellung wird als HTML-Kommentar eingefügt. Wenn das zu schwer ist, bekommt man noch eine `hint.md` zur Verfügung gestellt, die die exakte Syntax enthält.

Ich machte es ohne hint in folgendem Ablauf: 
- Vue CDN integrieren
- div mit id app erstellen
- neuen script Teil unterhalb des divs erstellen und alles importieren
- createApp erstellen und mounten
- ref variablen erstellen und zurückgeben
- Platzhalter in HTML einfügen

**Fehler:** Anführungszeichen bei der ID in HTML und JS vergessen und keinen neuen Emoji in span eingefügt.

**Folgendes fiel mir auf:** der Cursor im interaktiven Editor passt gar nicht mit meinem Mauszeiger überein, was die Übersicht erschwert. Mit der Zeit ging es komischerweise immer besser, weil ich draufkam, dass ich trotzdem dort bin, wo ich will, wenn ich dort hinklicke.

## Video 5: ...