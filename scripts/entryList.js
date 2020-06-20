/* Purpose:
This module contains a method that takes the journal entries and puts it on the DOM */

import API from './data.js'
import journalRepresentation from './entryComponent.js'


const entryDOM = {
    entryLog (currentJournalObject) {
        //loop through the journalEntries array in order to display all the individual journal entries to the DOM;
        for (currentJournalObject of API.journalEntries) {
            // calling the journalConversion function and running the individual objects as arguments
            const journalHTML = journalRepresentation.journalConversion(currentJournalObject);
    
            // selecting the <article> element in order to put our HTML code in there
            const journalArticleElement = document.querySelector(".entryLog");
    
            // changing the <article> element's content by inserting the value of journalHTML which is a callback function to journalConversion(which returns the HTML code)
            journalArticleElement.innerHTML += journalHTML;
    
        }    
    }
    
}

export default entryDOM

