//journal entry object listing individual journal entries
let journalEntries = [];

const getJournalData = () => {
    return fetch("http://localhost:3000/entries").then(
        (httpResponse) => {
            return httpResponse.json();
        }
    ).then(
        (journalEntryArray) => {
            journalEntries = journalEntryArray;
        }
    )
}

   

//using a function to represent the HTML code that will go into index.html
const journalConversion = (journalObject) => {
    const journalHTMLRepresentation = `
    <div class="entryLog__components">
        <ul>
            <li> <strong>Date:</strong> ${journalObject.date}</li>
            <li> <strong>Concepts:</strong> ${journalObject.concepts}</li>
            <li> <strong>Mood:</strong> ${journalObject.mood}</li>
            <li> <strong>Entry:</strong> ${journalObject.entry}</li>
        </ul>
    </div>
    `
    return journalHTMLRepresentation;
}
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


getJournalData().then(
    () => {
        entryLog();
    }
)

    
