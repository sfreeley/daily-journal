// module to update the fields in form
const updateFormFields = (journalEntryId) => {
//targeting the individual input fields
//hidden input field that user will not see that will specify the entry ID
    const hiddenEntryId = document.querySelector("#entryId");
    const editDateInput = document.querySelector("#date");
    const editConceptsInput = document.querySelector("#concepts");
    const editEntryInput = document.querySelector("#entry");
    const editMoodInput = document.querySelector("#mood");

    //fetch needs to occur for the PUT(Edit) operation and in url it will be specified what the journal entry Id is so knows which one to edit
    fetch(`http://localhost:3000/entries/${journalEntryId}`)
    //parse data from string to array of journal objects 
    .then(response => response.json())
    //using parsed array information and for each input field it will populate (once the edit button is clicked) the entry's id (hidden) date, concepts, entry, mood that you want to edit 
    .then(entry => {
        hiddenEntryId.value = entry.id
        editDateInput.value = entry.date
        editConceptsInput.value = entry.concepts
        editEntryInput.value = entry.entry
        editMoodInput.value = entry.moodId
    })
}

export default updateFormFields