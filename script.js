

let pizza = document.querySelectorAll(".pizza");
let assaisonnement = document.querySelectorAll(".assaisonnement");
let prixUnite = document.querySelectorAll(".prixUnitaire");
let qte = document.querySelectorAll(".qte");
let pTotal = document.querySelectorAll(".total");
const btnLess = document.querySelectorAll(".less");
const btnMore = document.querySelectorAll(".more");

let gTOTAL = document.querySelector(".TOTAL");
let countBigTotal = 0;

let Sum = document.querySelector(".summarize"); 

            
for (let i = 0; i < pizza.length; i++){

  btnLess[i].addEventListener("click", function(){
    if (qte[i].innerHTML <= 0) return;   //return: mettre fin à l"execution de ma condition
    qte[i].innerHTML--;
    pTotal[i].innerHTML = prixUnite[i].innerHTML * qte[i].innerHTML;

    countBigTotal -= parseInt(prixUnite[i].innerHTML); //afficher le TOTAL
    gTOTAL.innerHTML = countBigTotal;

    recapPizza(i);  // j'appelle la fonction de recapitulatif dans mon bouton -
});

  btnMore[i].addEventListener("click", function(){
    qte[i].innerHTML++;
    pTotal[i].innerHTML = prixUnite[i].innerHTML * qte[i].innerHTML;
    
    countBigTotal = countBigTotal + parseInt(prixUnite[i].innerHTML);
    gTOTAL.innerHTML = countBigTotal;

    recapPizza(i);  // j'appelle la fonction de recapitulatif dans mon bouton +

    const payPal = document.querySelector("#smart-button-container");
     if (parseInt(qte[i].innerHTML) <= 0){     // bouton payPal MASQUER/AFFICHER
        payPal.style.visibility = "hidden";
    } else {
        payPal.style.visibility = "visible";
    };
}); 

};


const displayRecap = [];        // début de code de recapitulatif pizza
function recapPizza (i) {
  if (parseInt(qte[i].innerHTML) > 0) {
    displayRecap[i] = pizza[i].innerHTML + " " + parseInt(qte[i].innerHTML) + "x ; ";
  } else {
    displayRecap[i] = "";
  };
  Sum.innerHTML = displayRecap.join("");
};                             // fin de code de recapitulatif pizza



const btnReset = document.getElementById("reset");
btnReset.addEventListener("click", function() {
  location.reload();
}, 
false);