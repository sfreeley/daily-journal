import API from './data.js'
import entryDOM from './entryList.js'
import updateFormFields from './updateForm.js'
import createJournalEntry from './createEntry.js'

//Module for add event listeners 

//target the section where your entries show up (will include all delete and edit buttons you want to target)
const deleteEntry = document.querySelector(".entryLog")
export default {
    registerListener () {
        deleteEntry.addEventListener("click", clickEvent => {
            if (event.target.id.startsWith("deleteEntry--")) {
                //from the button's id attribute, get the id value by doing .split() on a string to turn into array ([1] is saying you want the id number which is at index 1)
                const entryToDelete = clickEvent.target.id.split("--")[1]

                //invoking delete method from API module and passing in the entry id so it knows which one to delete, 
                API.deleteJournalEntry(entryToDelete)
                // get all entries and render them to DOM
                .then(API.getJournalEntries())
                .then(entryDOM.entryLog(API.journalEntries))
                //else if edit button functionality clicked
            } else if (clickEvent.target.id.startsWith("editEntry--")) {
                        const entryToEdit = clickEvent.target.id.split("--")[1]
                        //invoking updateforms module to set value of input fields to user input; this will take in an argument of the entry id so it knows which one to edit 
                        updateFormFields(entryToEdit)
                    }
                })
        },
        //clear field inputs after user saves edit
    clearInputFields() {
        document.querySelector("#date").value = "";
        document.querySelector("#concepts").value = "";
        document.querySelector("#entry").value = "";
        document.querySelector("#mood").value = "";
        
    },

        //save button functionality
        saveButtonFunction () {
            const saveEditButton = document.querySelector("#saveEdit")
            saveEditButton.addEventListener("click", clickEvent => {
                const hiddenEntryId = document.querySelector("#entryId")

                if (hiddenEntryId.value !== "") {
                    const newDateInput = document.querySelector("#date").value;
                    const newConceptsInput = document.querySelector("#concepts").value;
                    const newEntryInput = document.querySelector("#entry").value;
                    const newMoodInput = document.querySelector("#mood").value;

                    API.updateJournalEntry(hiddenEntryId.value, createJournalEntry(newDateInput, newConceptsInput, newEntryInput, newMoodInput))
                        .then(() => {
                            this.clearInputFields();
                            entryDOM.entryLog(API.journalEntries)
                        })
                } else {
                    alert("To use edit save, you must fill out all fields")
                }


            })
        }
    }
