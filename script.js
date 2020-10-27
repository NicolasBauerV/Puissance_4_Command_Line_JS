const toolbox = require('./toolbox.js');
const jeu = require('./game.js');

jeu.charJ1 = choixChar(1);
jeu.charJ2 = choixChar(2);

intro();
jeu.init();
jeu.displayTab();

//Permantly played until one of the player win the game
while(true) {
    if(playerPlay(1)) {
        console.log('Player 1 Win !');
        break;
    }

    if (playerPlay(2)) {
        console.log('Player 2 Win !');
        break;
    }
}

function intro() {
    console.log('************** Bienvenu(e) dans Puissance 4 **************');
}

/**
 * Main of the game
 * @param {Number} nbPlayer What player is playing ? 
 */
function playerPlay(nbPlayer) {
    let ligneVide = -1;
    let colonne = -1;
    while(ligneVide === -1 || colonne <= 0 || colonne > 7) {
        console.log('Choisir une colonne à emplacement vide');
        colonne = jeu.saisirColonne();
        ligneVide = jeu.returnRowVoidAndCol(colonne);
    }
    jeu.puissance4[ligneVide][colonne-1] = nbPlayer;
    jeu.displayTab();
    return jeu.VerifWin(nbPlayer);
}

/**
 * Apply a character for a player
 * @param {Number} player current player
 */
function choixChar(player) {
    let t = "Choisissez le caractère du joueur " + player + " : ";
    return toolbox.saisirString(t);
}