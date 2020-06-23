// module to update the fields in form
const updateFormFields = (journalEntryId) => {

    const hiddenEntryId = document.querySelector("#entryId");
    const editDateInput = document.querySelector("#date");
    const editConceptsInput = document.querySelector("#concepts");
    const editEntryInput = document.querySelector("#entry");
    const editMoodInput = document.querySelector("#mood");

    fetch(`http://localhost:3000/entries/${journalEntryId}`)
    .then(response => response.json())
    .then(entry => {
        hiddenEntryId.value = entry.id
        editDateInput.value = entry.date
        editConceptsInput.value = entry.concepts
        editEntryInput.value = entry.entry
        editMoodInput.value = entry.mood
        console.log("it's working so far")
    })
}

export default updateFormFields