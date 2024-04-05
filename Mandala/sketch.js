import p5 from 'p5';

let colors = [];
let circleCount = 1;

new p5((p) => {
    p.setup = () => {
        let canvas = p.createCanvas(460, 460);
        canvas.parent('sketchContainer');
        p.randomSeed(0); // P5 setzt Seeds, sicherzustellen, dass die Zufallsfarben gleich sind
    };

    function createRandomShapes() {
        colors = [];
        for (let i = 0; i < 3; i++) {
            colors.push(color(random(255), random(255), random(255)));
        }
        circleCount = floor(random(1, 6)); // Zufällige Anzahl von Kreisen zwischen 1 und 5 - TODO: Wie verschieben?
    }
    p.draw = () => {
        p.background('white');
        p.strokeWeight(1);
        p.stroke('black');
        p.angleMode(p.DEGREES);
        p.noFill();
        p.translate(230, 230);

        for (let i = 0; i < circleCount; i++) {
            let randomColor = colors[p.floor(p.random(colors.length))];
            p.fill(randomColor);
            p.circle(p.random(-200, 200), p.random(-200, 200), p.random(50, 200));
        }
    };
});

document.getElementById('settingsForm').addEventListener('submit', (event) => {
    // Verhindert das Neuladen der Seite beim Absenden des Formulars - siehe JS 2
    event.preventDefault(); 

    // Farben aus dem Formular lesen
    let colorInputs = document.getElementById('colorInput').value;
    colors = Array.from(colorInputs.split(','));

    // Anzahl der Kreise aus dem Formular lesen
    circleCount = parseInt(document.getElementById('circleCount').value);
});
