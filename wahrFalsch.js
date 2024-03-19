// Schreiben Sie einen Generator, der abwechselnd true oder false zurückgibt. 

//Unendlich:

// Variable für den Zustand
let falschWahr = true;

// Unendliche Schleife
while (true) {
  // Wenn der Zustand "an" ist, ändere ihn zu "aus" und umgekehrt
  falschWahr = !falschWahr;
  console.log(falschWahr);
}

// Mit einem Stop

let wahrFalsch = true;
let flip = 0;

// Schleife, die 10 Flips durchführt
while (flip < 10) {
  // Wenn der Zustand "an" ist, ändere ihn zu "aus" und umgekehrt
  wahrFalsch = !wahrFalsch;
  console.log(wahrFalsch);

  flip++;
}

// Generator-Funktion, die mit den Sekunden umschaltet
// * bedeutet Generator!

function* sekundenGenerator() {
  while (true) {
    // Zeit mit "Date" erhalten, in Sekunden umwandeln und prüfen, ob sie odd oder even sind
    const jetzt = new Date();
    const sekunden = jetzt.getSeconds();
    const istGerade = sekunden % 2 === 0;

    // "true" für gerade Sekunden und "false" für ungerade Sekunden zurückgeben - yield stoppt den generator und gibt einen wert zurücj
    yield istGerade;

    // Wartet eine Sekunde, bzw. 1000 Milisekunden; Promise muss gesetzt werden, damit es dann wieder startet
    yield new Promise(resolve => setTimeout(resolve, 1000));
  }
}

// Generator rufen (Hallo)
const sekundenIterator = sekundenGenerator();

// Dann Output vom Generator in der Konsole ausgeben
function nextSekundenStatus() {
  console.log(sekundenIterator.next().value);
  sekundenIterator.next().value.then(nextSekundenStatus);
}

//Funktion aufrufen und Holladrio
nextSekundenStatus(); 