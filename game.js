const toolbox = require('./toolbox.js');

const game = {
    puissance4 : [],
    nbRow : 6,
    nbCol : 7,
    charJ1 : 'x',
    charJ2 : 'o',

    init : function() {
        this.puissance4 = toolbox.initTab(this.nbRow, this.nbCol, 0);
    },

    /**
     * Return the the void row and add the player character to the last index of the current column
     * @param {Number} colonne the current column
     */
    returnRowVoidAndCol : function(colonne) {
        for (let i = this.nbRow-1; i >= 0; i--) {
            if (this.verifCase(i, colonne)) 
                return i;
        }
        return -1; //if the column is full
    },

    /**
     * //Return void index
     * @param {Number} row 
     * @param {Number} col 
     */
    verifCase : function(row, col) {
        return this.puissance4[row][col-1] === 0;
    },

    /**
     * Return a column that a player as chosen
     */
    saisirColonne : function() {
        return parseInt(toolbox.saisirString('Quelle colonne ?'));
    },

    /**
     * Return while the game is not finish
     */
    VerifWin : function(player) {
        if (this.verifRow(player) || this.verifCol(player) || this.verifDiag(player))
            return true;
        return false;
    },

    /**
     * Return true when the player complete a line
     * @param {Number} joueur 
     */
    verifRow : function(player) {
        for (let i = this.nbRow-1; i >= 0; i--) {
            for (let j = 0; j < this.nbCol -3; j++) {
                if (
                    this.puissance4[i][j] === player &&
                    this.puissance4[i][j+1] === player &&
                    this.puissance4[i][j+2] === player &&
                    this.puissance4[i][j+3] === player
                    )
                    return true;
            }
        }
        return false;
    },

    /**
     * Return true when the player complete a column
     * @param {Number} joueur 
     */
    verifCol : function(player) {
        for (let i = 0; i < this.nbCol; i++) {
            for (let j = this.nbRow-4; j >= 0; j--) {
                if (
                    this.puissance4[j][i] === player &&
                    this.puissance4[j+1][i] === player &&
                    this.puissance4[j+2][i] === player &&
                    this.puissance4[j+3][i] === player
                    )
                    return true;
            }
        }
        return false;
    },

    /**
     * Return when the player complete a diagonal left or right
     * @param {Number} joueur 
     */
    verifDiag : function(player) {
        for (let i = this.nbRow-1; i >= 3; i--) {
            for (let j = 0; j < this.nbCol; j++) {
                //Diagonal right
                if (
                    this.puissance4[i][j] === player &&
                    this.puissance4[i-1][j+1] === player &&
                    this.puissance4[i-2][j+2] === player &&
                    this.puissance4[i-3][j+3] === player
                    )
                    return true;
                //Diagonal left
                if (
                    this.puissance4[i][j] === player &&
                    this.puissance4[i-1][j-1] === player &&
                    this.puissance4[i-2][j-2] === player &&
                    this.puissance4[i-3][j-3] === player
                    )
                    return true;
            }
        }
        return false;
    },


    /**
     * This function display the tab
     * @param {Array<String>} tabP4 the P4 array
     * @param {String} j1Char char of J1
     * @param {String} j2Char char of J2
     */
    displayTab : function() {
        for (let i = 0; i < this.puissance4.length; i++) {
            let ligne = ''; //Init row
            for (let j = 0; j < this.puissance4[i].length; j++) {
                ligne += '| ';
                if (this.puissance4[i][j] === 0) {
                    ligne += '_';
                } else if (this.puissance4[i][j] === 1) {
                    ligne += this.charJ1;
                } else if (this.puissance4[i][j] === 2) {
                    ligne += this.charJ2;
                }
                ligne += ' |';
            }
            console.log(ligne);
        }
    },
};

module.exports = game;