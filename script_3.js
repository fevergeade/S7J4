function pyramid(){
  let etage = ""
  let i = 1;
  while (etage <= 0){
    etage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
    if (etage <= 0) {
      console.log("choisi une valeur supérieur à zéro !!!");
    } else {
      while (i != (etage+1)) {
        if ((etage-i) < 0) {
          break;
        }
        console.log(`${" ".repeat(etage-i) + "#".repeat(i)}`);
        i++;
      }
    }
  }

}


console.log("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");
pyramid();