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
                <li> <strong>Mood:</strong> ${journalObject.mood.label}</li>
                <li> <strong>Entry:</strong> ${journalObject.entry}</li>
            </ul>
        </div>
        <button id="editEntry--${journalObject.id}">Edit</button>
        <button id="deleteEntry--${journalObject.id}">Delete Entry</button>
        <hr>
        `
    },

    moodSelectOptionConversion (moodObject) {
        return `<option class="optionChoice" value="${moodObject.label}">${moodObject.label}</option>`
    }
}

export default journalRepresentation;


