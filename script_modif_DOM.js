// Modification 1
function changeTitles(){

    let title = document.getElementsByClassName("jumbotron-heading");
    title[0].innerHTML = "Ce que j'ai appris à TS4A";

    let SubTitle = document.getElementsByClassName("lead text-muted");
    SubTitle[0].innerHTML = ("TS4A est une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un groupe de travail en présentiel. Après 12 semaines, les principaux langages et outils du web n'auront plus de secret pour vous !");
}

// Modification 2
function changeCallToActions(){

    let PrimaryButton = document.getElementsByClassName("btn btn-primary my-2");
    PrimaryButton[0].innerHTML = "OK je veux tester !";
    PrimaryButton[0].href = "http://www.techschool4afreeka.org";

    let SecondaryButton = document.getElementsByClassName("btn btn-secondary my-2");
    SecondaryButton[0].innerHTML = "Non Merci";
    SecondaryButton[0].href = "https://www.pole-emploi.fr/accueil/";
}

// Modification 3
function changeLogoName(){

    let NavbarTitle = document.getElementsByTagName("strong");
    NavbarTitle[0].innerHTML = "TS4A Experience";
    NavbarTitle[0].style.fontSize = "2em";
}

// Modefication 4
function populateImages(){

    let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png",
"https://img.icons8.com/color/480/000000/css3.png",
"https://img.icons8.com/color /480/000000/javascript.png",
"https://img.icons8.com/color/480/000000/ruby-programming-language.png",
"https://img.icons8.com/color/480/000000/bootstrap.png",
"https://img.icons8.com/color/480/000000/github.png",
"http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", 
"https://avatars2.githubusercontent.com/u/25484553?s=200&v=4",
"https://img.icons8.com/color/480/000000/heroku.png"];

let Images = document.getElementsByClassName("card-img-top");
for (let i = 0; i < Images.length; i++) {
    Images[i].src = imagesArray[i];
}
}

// Modification 5
function deleteLastCards(){

    let LastCards = document.getElementsByClassName("col-md-4");
    for (let i = 0; i < 3; i++) {
        LastCards[LastCards.length -1].remove();
    }
}

// Modification 6
function changeCardsText(){

    // Stockons les textes dans un array
    let textArray = ["L’HyperText Markup Language, généralement abrégé HTML, est le langage de balisage conçu pour représenter les pages web.",
    "Les feuilles de style en cascade, généralement appelées CSS de l'anglais Cascading Style Sheets, forment un langage informatique qui décrit la présentation des documents HTML et XML.",
    "JavaScript est un langage de programmation de scripts principalement employé dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à prototype."];

    let TextCards = document.getElementsByClassName("card-text");
    for (let i = 0; i < 3; i++){
        TextCards[i].innerHTML = textArray[i];
    }
}

// Modification 7
function changeViewButtons(){
    let AllButtons = document.getElementsByClassName("btn btn-sm btn-outline-secondary");
    for (i = 0; i < AllButtons.length; i++){
        AllButtons[i].className = "btn btn-sm btn-success";
    }
}



// Appelle des différentes fonctions
changeTitles();
changeCallToActions();
changeLogoName();
populateImages();
deleteLastCards();
changeCardsText();
changeViewButtons();

    