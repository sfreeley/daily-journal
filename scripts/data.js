// Purpose: 
// This module contains a method to make a fetch call to get journal entries


const API = {
    journalEntries: [],
    // this is the GET function that gets all entries from API
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json()).then( (journalEntryArray) => this.journalEntries = journalEntryArray);
    },
    // this is POST function that saves your object to the API and will take in a journal entry object created by factory function)
    saveJournalEntry (newEntryObject) {
        return fetch("http://localhost:3000/entries", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newEntryObject)
        }).then(response => response.json())
    }
}

export default API;
