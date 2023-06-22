Ce repository contient **un fichier HTML exo_modif_DOM.html et son fichier JS script_modif_DOM.js** qui contient les fonctions des modifications suivantes:

	- Modification n°1
Écris une fonction ***changeTitles()*** qui va :
1. Pointer vers le titre en haut de page ("Album Example") et le changer en "Ce que j'ai appris à
TS4A"
2. Pointer vers le sous-titre ("Something short and leading about…") et le changer en "TS4A est
une formation qui, en 3 mois, à plein temps, vous apportera des connaissances actionnables
pour vous permettre de voir plus loin. Chez nous, pas de professeurs, pas de locaux, mais un
groupe de travail en présentiel. Après 12 semaines, les principaux langages et outils du web
n'auront plus de secret pour vous !"
Pour cette fonction comme toutes les suivantes : exécute la fonction dans ton code JS en
l'appelant en bas avec un changeTitles().

Dès que tu fais une modification sur la fonction, rafraîchis la page HTML dans ton navigateur pour voir si la modification apportée est OK.


	- Modificaion n°2
Écris une fonction ***changeCallToActions()*** qui va:
1. Changer le texte du bouton ***"Main call to action"*** en ***"OK je veux tester !"***
2. Ajouter l'URL (un href) vers laquelle le bouton "Main call to action" va pointer :
   
[http://www.techschool4afreeka.org](http://www.techschool4afreeka.org)

4. Changer le texte du bouton ***"Secondary action"*** en ***"Non Merci"***
5. Ajouter l'URL vers laquelle le bouton "Secondary action" va pointer

[https://www.pole-emploi.fr/accueil/](https://www.pole-emploi.fr/accueil/)

	- Modification n°3
Écris une fonction ***changeLogoName()*** qui va modifier le titre "Album" de la navbar (en haut
à gauche) de la façon suivante :
1. Change "Album" par "TS4A Experience" ;
2. Change la taille du texte pour le passer en 2em.

.

	- Modification n°4

Écris une fonction ***populateImages()*** qui va ajouter, dans chacune des 9 cards, une image dont
l'URL est contenue dans l'array suivant :let imagesArray = ["https://img.icons8.com/color/480/000000/html-5.png",

"https://img.icons8.com/color/480/000000/css3.png",

"https://img.icons8.com/color/480/000000/javascript.png",

"https://img.icons8.com/color/480/000000/ruby-programming-language.png",

"https://img.icons8.com/color/480/000000/bootstrap.png",

"https://img.icons8.com/color/480/000000/github.png",

"http://jeudisdulibre.be/wp-content/uploads/2014/02/Ruby_on_Rails-logo.png", 

"https://avatars2.githubusercontent.com/u/25484553?s=200&v=4",

"https://img.icons8.com/color/480/000000/heroku.png"];

Une petite boucle des familles va être utile ici.

	- Modification n°5
Écris une fonction ***deleteLastCards()*** qui va supprimer les 3 dernières cards via une boucle. Je
donne ci-dessous 2 coups de main sur cette modification : les plus à l'aise peuvent essayer de
ne pas les lire.
Coups de main sur cette modif
Pour les lire, surligne le texte ci-dessous en le sélectionnant (c'est écrit blanc sur blanc )passe
lors au numéro 7 et le numéro 9 passe au numéro 8.

	- Modification n°6
Écris une fonction ***changeCardsText()*** qui va modifier le texte des 3 premières cards et le
remplacer avec cela :
	- Carte HTML : "L’HyperText Markup Language, généralement abrégé HTML, est le langage de
balisage conçu pour représenter les pages web"
	- Carte CSS : "Les feuilles de style en cascade, généralement appelées CSS de l'anglais
Cascading Style Sheets, forment un langage informatique qui décrit la présentation des
documents HTML et XML"
	- Carte JS : "JavaScript est un langage de programmation de scripts principalement employé
dans les pages web interactives mais aussi pour les serveurs. C'est un langage orienté objet à
prototype."
Essaye de mettre ça dans une boucle.

	- Modification n°7
Écris une fonction ***changeViewButtons()*** qui va modifier tous les boutons "View" des cards
pour les passer en vert. En gros il faut leur mettre la classe btn-success et enlever btn-outline-
secondary. Les boutons Edit ne doivent pas changer. Évite bien sûr de faire les 6
modifications une à une ... faut de la boucle là !
