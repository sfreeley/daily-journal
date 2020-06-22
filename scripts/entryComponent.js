/*Purpose:
This module is responsible for representing the HTML code that will go on the DOM*/ 

const journalRepresentation = {
    journalConversion (journalObject) {
        return `
        <hr>
        <div class="entryLog__components">
            <ul>
                <li> <strong>Date:</strong> ${journalObject.date}</li>
                <li> <strong>Concepts:</strong> ${journalObject.concepts}</li>
                <li> <strong>Mood:</strong> ${journalObject.mood}</li>
                <li> <strong>Entry:</strong> ${journalObject.entry}</li>
            </ul>
        </div>
        <hr>
        `
    }
}

export default journalRepresentation;


