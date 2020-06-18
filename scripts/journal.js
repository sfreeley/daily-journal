/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

import API from './data.js'
import entryDOM from './entryList.js'
import generateJournalEntry from './createEntry.js'
//this will get the entries from the API and once info received will render them to DOM
API.getJournalEntries().then(() => entryDOM.entryLog());


//First step of recording the input data to the API with Save button functionality 
//declaring variables for user input value

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
        console.log(dateInput, conceptsInput, entryInput, moodInput)
        //if everything is filled out, invoke POST function once button clicked and pass it the object made by factory function on createEntry.js page
        //invoking generateJournalEntry factory function and passing user's input values as arguments
        const generateEntry = generateJournalEntry(dateInput, conceptsInput, entryInput, moodInput)
        //passes in newly created journal object (based on user input value) to save it to the DOM
        API.saveJournalEntry(generateEntry)
        .then(
        () => {
        return API.getJournalEntries()
        })
        .then((allAPIObj) => {
        entryDOM.entryLog(allAPIObj)
        })
    }      
});


    
    


