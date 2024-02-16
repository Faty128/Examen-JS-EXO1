function calculerIMC(taille, poids) {
  // Calcul de l'IMC
  var imc = poids / (taille * taille);
  return imc;
}

// Demander à l'utilisateur de saisir sa taille et son poids
var taille = parseFloat(prompt("Entrez votre taille en mètres :"));
var poids = parseFloat(prompt("Entrez votre poids en kilogrammes :"));

// Calculer l'IMC en utilisant la fonction
var resultatIMC = calculerIMC(taille, poids);

// Afficher le résultat
console.log("Votre IMC est : " + resultatIMC);
