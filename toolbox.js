const { question } = require("readline-sync");

let readLn = require('readline-sync');

const toolbox = {
    /**
     * This function is a shortcut to readln.question()
     * @param {String} txt text that you want to ask and prompt
     */
    saisirString : function(txt) {
        return readLn.question(txt);
    },

    /**
     * Initialize tab with a specified row and col given in parameter and apply a character that the user wants.
     * @param {Number} nbRow 
     * @param {Number} nbCol 
     * @param {*} car 
     */
    initTab : function(nbRow, nbCol, char = '') {
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
}

module.exports = toolbox;