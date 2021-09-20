// Séléctionner les aiguilles de montre
const AIGUILLEHR = document.querySelector("#hour");
const AIGUILLEMIN = document.querySelector("#minute");
const AIGUILLESEC = document.querySelector("#second");

//Extraire l'heure actuel à l'aide de l'objet Date()

//Stocker l'heure , minute , seconde  dans des varaiables


// Calculer de degré de mouvement de l'aiguille heure, de l'aiguille minute, de l'aiguille seconde
// Hint : Tous les aiguilles doivent se déplacer chaque second selon un degré

let dateActuelle = new Date();

    let hour = dateActuelle.getHours();
    let minute = dateActuelle.getMinutes();
    let second = dateActuelle.getSeconds();

// Afficher les aiguilles à l'instant T

    function initialiserAffichage(){

    

    AIGUILLESEC.style.transform = "rotate("+second*6+"deg)";
    AIGUILLEMIN.style.transform = "rotate("+60*minute*0.1+"deg)";
    AIGUILLEHR.style.transform = "rotate("+3600*hour*0.0083+"deg)";

}

initialiserAffichage();


// Déplacer les aiguilles 

    function demarrerLaMontre() {

    dateActuelle = new Date();

    hour = dateActuelle.getHours();
    minute = dateActuelle.getMinutes();
    second = dateActuelle.getSeconds();

    AIGUILLESEC.style.transform = "rotate("+second*6+"deg)";
    AIGUILLEMIN.style.transform = "rotate("+60*minute*0.1+"deg)";
    AIGUILLEHR.style.transform = "rotate("+3600*hour*0.0083+"deg)";

}

// Exercuter la fonction chaque second
var interval = setInterval(demarrerLaMontre, 1000);

