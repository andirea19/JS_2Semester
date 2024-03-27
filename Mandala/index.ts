import p5 = require('p5');

export let p: p5;

new p5((p5: p5) => {
    p = p5;
    p.setup = setup;
    p.draw = draw;
});

// p5 ist eine grafik library, die ein Bild erzeugt
// dafür zuerst setup, dann draw

function setup() {
    p.createCanvas(460, 460);
}

function draw() {
    p.background('white');
    p.strokeWeight(1);      // Linienstärke
    p.stroke('black');      // Linienfarbe
    p.angleMode(p.DEGREES); // WInkel
    p.noFill();             // Füllfarbe
    p.translate(230, 230);  // Mittelpunkt sonst (0/0)

    p.push(); // notwendig zum Initialisieren
    p.circle(0, 0, 450); // großer Kreis
    p.fill(255, 0, 0, 55);
    p.circle(0, 0, 390); // Mittlerer Kreis
    p.fill(0, 255, 0, 55);
    p.circle(0, 0, 225); // kleiner Kreis
    p.pop(); // beendet Zeichnung

    p.push();
    for (let i = 0; i < 6; i++) { // 6 Linien
        p.line(0, -225, 0, 225); // Definition pro Linie
        p.rotate(30); // Rotiere die nächste Linie
    }
    p.pop();

    /* 
        p.push();
        for (let i = 0; i < 8; i++) { // 8 Linien
            p.line(0, -225, 0, 225);
            p.rotate(20); // Rotiere die nächste Linie
        }
        p.pop();
        */

        for (let i = 0; i < 6; i++) { // Schleife, die sechs mal wiederholt wird
            p.circle(113, 0, 225); // Zeichne weitere Kreise
            p.rotate(60); // Rotiere den nächsten Kreis um 60 Grad, damit ein Muster entsteht
        }
}
