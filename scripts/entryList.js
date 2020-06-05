//using function to loop through the journalEntries array in order to display all the object's values in the HTML;
const entryLog = () => {
    for (currentJournalObject of journalEntries) {
        // calling the journalConversion function and running the individual objects as arguments
        const journalHTML = journalConversion(currentJournalObject);

        // selecting the <article> element in order to put our HTML code in there
        const journalArticleElement = document.querySelector(".entryLog");

        // changing the <article> element's content by inserting the value of journalHTML which is a callback function to journalConversion(which returns the HTML code)
        journalArticleElement.innerHTML += journalHTML;
    }
}
