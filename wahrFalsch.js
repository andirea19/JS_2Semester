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