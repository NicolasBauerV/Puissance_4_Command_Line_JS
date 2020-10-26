const { question } = require("readline-sync");

let readLn = require('readline-sync');
let puissance4 = [];
let nbRow = 6;
let nbCol = 7;
let charJ1 = 'x';
let charJ2 = 'o';

puissance4 = initTab(nbRow, nbCol, 0);

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

/**
 * Main of the game
 * @param {Number} nbPlayer What player is playing ? 
 */
function playerPlay(nbPlayer) {
    let ligneVide = -1;
    let colonne = -1;
    while(ligneVide === -1 || colonne <= 0 || colonne > 7) {
        console.log('Choisir une colonne à emplacement vide');
        colonne = saisirColonne();
        ligneVide = returnRowVoidAndCol(colonne);
    }
    puissance4[ligneVide][colonne-1] = nbPlayer;
    displayTab(puissance4, charJ1, charJ2);
    return VerifWin(nbPlayer);
}

/**
 * Return a column that a player as chosen
 */
function saisirColonne() {
    return parseInt(readLn.question('Quelle colonne ?'));
}

/**
 * Return the the void row and add the player character to the last index of the current column
 * @param {Number} colonne the current column
 */
function returnRowVoidAndCol(colonne) {
    for (let i = nbRow-1; i >= 0; i--) {
        if (verifCase(i, colonne)) 
            return i;
    }
    return -1; //if the column is full
}

/**
 * //Return void index
 * @param {Number} row 
 * @param {Number} col 
 */
function verifCase(row, col) {
    return puissance4[row][col-1] === 0;
}

/**
 * Return while the game is not finish
 */
function VerifWin(joueur) {
    if (verifRow(joueur) || verifCol(joueur) || verifDiag(joueur))
        return true;
    return false;
}

function verifRow(joueur) {
    for (let i = nbRow-1; i >= 0; i--) {
        for (let j = 0; j < nbCol -3; j++) {
            if (
                puissance4[i][j] === joueur &&
                puissance4[i][j+1] === joueur &&
                puissance4[i][j+2] === joueur &&
                puissance4[i][j+3] === joueur
                )
                return true;
        }
    }
    return false;
}

function verifCol(joueur) {

}

function verifDiag(joueur) {

}

/**
 * Initialize tab with a specified row and col given in parameter and apply a character that the user wants.
 * @param {Number} nbRow 
 * @param {Number} nbCol 
 * @param {*} car 
 */
function initTab(nbRow, nbCol, char = '') {
    let tab = [];
    for(let i = 0; i < nbRow; i++) {
        let tabLigne = [];
        for(let j = 0; j < nbCol; j++) {
            tabLigne.push(char); //Add a charactere in each index of the arr tabLigne
        }
        tab.push(tabLigne); //Push the line to the final tab
    }
    return tab;
}


/**
 * This function display the tab
 * @param {Array<String>} tabP4 the P4 array
 * @param {String} j1Char char of J1
 * @param {String} j2Char char of J2
 */
function displayTab(tabP4, j1Char, j2Char) {
    for (let i = 0; i < tabP4.length; i++) {
        let ligne = ''; //Init row
        for (let j = 0; j < tabP4[i].length; j++) {
            ligne += '| ';
            if (tabP4[i][j] === 0) {
                ligne += '_';
            } else if (tabP4[i][j] === 1) {
                ligne += j1Char;
            } else if (tabP4[i][j] === 2) {
                ligne += j2Char;
            }
            ligne += ' |';
        }
        console.log(ligne);
    }
}