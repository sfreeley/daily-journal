/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

import API from './data.js'
import entryDOM from './entryList.js'
import createJournalEntry from './createEntry.js'
import displayMoodEntries from './filter.js'
import events from './events.js'


//this will get the entries from API and once info received will render them to DOM
API.getJournalEntries().then(() => entryDOM.entryLog(API.journalEntries))

// const showDetails = () => {
//     document.querySelector(".entryLog").style.display = "block";
//   }

// function to give user alert if they type in more than 50 characters into concept field
const conceptFieldMaxLength = () => {
    const conceptField = document.querySelector("#concepts")
    conceptField.addEventListener("input", inputEvent => {
        const conceptFieldValue = document.querySelector("#concepts").value
        if (conceptFieldValue.length > 50) {
            alert("Maximum characters allowed: 50")
        }
    })
}
conceptFieldMaxLength();

//Steps of recording the input data to the API with Save button functionality and posting it to the DOM

// target the save button
const saveButton = document.querySelector(".submitButton");
// add event Listener to save button to register user click
saveButton.addEventListener("click", clickEvent => {
    // assigning variables to user input value for each field in form
    const dateInput = document.querySelector("#date").value;
    const conceptsInput = document.querySelector("#concepts").value;
    const entryInput = document.querySelector("#entry").value;
    const moodInput = document.querySelector("#mood").value;
    // conditional statement to ensure no blank entries for any input field 
    if (dateInput === "" || conceptsInput === "" 
    || entryInput === "" || moodInput === "") {
        alert("All fields must be filled in before clicking 'Record Journal Entry'")
    } else {
        //if everything is filled out, invoke POST function once button clicked and pass it the object made by factory function on createEntry.js page
        //invoking generateJournalEntry factory function from creatEntry.js and passing user's input values as arguments
        const generateEntry = createJournalEntry(dateInput, conceptsInput, entryInput, moodInput)
        //passes in newly created journal object (based on user input value) to save it to the DOM
        API.saveJournalEntry(generateEntry)
        .then(
        () => {
        return API.getJournalEntries()
        })
        .then((allAPIObj) => {
        entryDOM.entryLog(allAPIObj)
        });
    }      
});
//invoking filtering by mood radio button NOTWORKING
displayMoodEntries.addMoodEventListener()

//invoking of method attaching event listener for delete button
events.registerListener()

//invoke save button functionality
events.saveButtonFunction();

