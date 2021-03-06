// Purpose: 
// This module contains a method to make a fetch call to get journal entries

 
const API = {
    journalEntries: [],
    // this is the GET function that gets all entries from API
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => {return response.json()})
            .then(journalArray => this.journalEntries = journalArray)
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
    },
    deleteJournalEntry (journalEntryId) {
        return fetch(`http://localhost:3000/entries/${journalEntryId}`, {
            method: "DELETE"
        })
        .then(response => response.json())
    },
    updateJournalEntry (journalEntryId, journalObj) {
        return fetch(`http://localhost:3000/entries/${journalEntryId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(journalObj)
            })
        }
    }


export default API;
