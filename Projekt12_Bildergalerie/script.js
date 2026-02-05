class Bildergalerie {
    constructor(bild) {
        this.bild = bild;
    }
    
    naechstesBild() {
        if(this.bild===bildListe[0]) {
            document.getElementById("bild").src=bildListe[1];
            document.getElementById("counter").innerHTML="2 / 3"
            this.bild=bildListe[1];
        } else if (this.bild===bildListe[1]) {
            document.getElementById("bild").src=bildListe[2];
            document.getElementById("counter").innerHTML="3 / 3"
            this.bild=bildListe[2];
        } else if (this.bild===bildListe[2]) {
            document.getElementById("bild").src=bildListe[0];
            document.getElementById("counter").innerHTML="1 / 3"
            this.bild=bildListe[0];
        }
    }
    vorherigesBild() {
        if(this.bild===bildListe[0]) {
            document.getElementById("bild").src=bildListe[2];
            document.getElementById("counter").innerHTML="3 / 3"
            this.bild=bildListe[2];
        } else if (this.bild===bildListe[2]) {
            document.getElementById("bild").src=bildListe[1];
            document.getElementById("counter").innerHTML="2 / 3"
            this.bild=bildListe[1];
        } else if (this.bild===bildListe[1]) {
            document.getElementById("bild").src=bildListe[0];
            document.getElementById("counter").innerHTML="1 / 3"
            this.bild=bildListe[0];
        }
    }
}

const bildListe = [
    "image1.png",
    "image2.png",
    "image3.png"
];

const meineGalerie = new Bildergalerie(bildListe[0]);