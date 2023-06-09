// les boucles while

let noms = ["kamdjou", "Duplex", "Marie"];

let i = 5;

do {
  console.log(`Nom minuscule: ${noms[i]}`);
  console.log(`Nom majuscule: ${noms[i].toUpperCase()}`);
  i++;
} while (i < noms.length);
console.log("Boucle termine");
