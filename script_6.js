function arnInAcidsConvert(arn){
  let acids = [];
  
  arn.match(/.{1,3}/g).forEach((codon) => {
    //console.log(codon);
    switch (codon) {
      case "UCU":
      case "UCC":
      case "UCA":
      case "UCG":
      case "AGU":
      case "AGC":
        acids.push("Sérine");
        break;
      case "CCU":
      case "CCC":
      case "CCA":
      case "CCG":
          acids.push("Proline");
          break;
      case "UUA":
      case "UUG":
        acids.push("Leucine");
        break;
      case "UUU":
      case "UUC":
        acids.push("Phénylalanine");
        break;
      case "CGU":
      case "CGC":
      case "CGG":
      case "AGA":
      case "AGG":
        acids.push("Arginine");
        break;
      case "UAU":
      case "UAC":
        acids.push("Tyrosine");
        break;
      default:
        console.log("Cette entrée n'est pas reconnue");
        break;
    }
    //console.log(acids[acids.length-1]);
  });
  return acids.join('-');
}

let arn1 = "CCGUCGUUGCGCUACAGC";
let arn2 = "CCUCGCCGGUACUUCUCG";

console.log(`Les acides aminés qui composent l'ARN \"${arn1}\" sont :`);
console.log(arnInAcidsConvert(arn1));

console.log(`\nLes acides aminés qui composent l'ARN \"${arn2}\" sont :`);
console.log(arnInAcidsConvert(arn2));

