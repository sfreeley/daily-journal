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
                //from the button's id attribute, get the id value
                const entryToDelete = clickEvent.target.id.split("--")[1]

                //invoking delete method from API module, get all entries and render them to DOM
                API.deleteJournalEntry(entryToDelete)
                .then(API.getJournalEntries())
                .then(entryDOM.entryLog(API.journalEntries))
                //else if  edit button functionality clicked
            } else if (clickEvent.target.id.startsWith("editEntry--")) {
                        const entryToEdit = clickEvent.target.id.split("--")[1]
                        //invoking updateforms module to set value of input fields to user input
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
        console.log("it's clearing it woot")
    },

        //save button functionality
        saveButtonFunction () {
            const saveButton = document.querySelector("#saveEdit")
            saveButton.addEventListener("click", clickEvent => {
                const hiddenEntryId = document.querySelector("#entryId")

                if (hiddenEntryId.value !== "") {
                    const newDateInput = document.querySelector("#date").value;
                    const newConceptsInput = document.querySelector("#concepts").value;
                    const newEntryInput = document.querySelector("#entry").value;
                    const newMoodInput = document.querySelector("#mood").value;

                    API.updateJournalEntry(hiddenEntryId.value, createJournalEntry(newDateInput, newConceptsInput, newEntryInput, newMoodInput))
                        .then(() => {
                            console.log("What's up it's updating it")
                            this.clearInputFields();
                            entryDOM.entryLog(API.journalEntries)
                        })
                } else {
                    alert("To use edit save, you must fill out all fields")
                }


            })
        }
    }
