function acneBot(){
  let acne_Bot = "Acné-bot: \"Tu veux quoi !\" (Fuck pour quitter)"
  let speaker = "";
  while (true) {
    speaker = prompt(acne_Bot);
    console.log(`chatter : \"${speaker}\"`)

    if (speaker.endsWith("?")) {
      acne_Bot ="Acné-Bot : \"Ouais ouais...\"" + "\n\"Tu veux quoi !\"(Fuck pour quitter)"
      console.log("Acné-Bot : \"Ouais ouais...\"");
    } else if (speaker === speaker.toUpperCase() && speaker !== "") {
      acne_Bot ="Acné-Bot : \"Pwa, calme-toi...\"" + "\n\"Tu veux quoi !\"(Fuck pour quitter)"
      console.log("Acné-Bot : \"Pwa, calme-toi...\"");
    } else if (speaker.toLowerCase().includes("fortnite")) {
      acne_Bot ="Acné-Bot : \"on s' fait une partie soum-soum ?\"" + "\n\"Tu veux quoi !\"(Fuck pour quitter)"
      console.log("Acné-Bot : \"on s' fait une partie soum-soum ?\"");     
    } else if (speaker === "") {
      acne_Bot ="Acné-Bot : \"t'es en PLS ?\"" + "\n\"Tu veux quoi !\"(Fuck pour quitter)"
      console.log("Acné-Bot : \"t'es en PLS ?\"");
    } else if (speaker === "Fuck") {
      console.log("Acné-Bot : \"va faire\"");
      break;
    } else {
      console.log("Acné-Bot : \"balek.\"");
    }
  }
}

console.log("tu veux quoi !");
acneBot();

