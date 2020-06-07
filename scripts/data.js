//journal entry object listing individual journal entries
let journalEntries = [];

const API = {
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json()).then( (journalEntryArray) => journalEntries = journalEntryArray);
    }
}