// Purpose: 
// This module contains a method to make a fetch call to get journal entries

 
const API = {
    journalEntries: [],
    moodsArray: [],
    // this is the GET function that gets all entries from API
    getJournalEntries () {
        return fetch("http://localhost:3000/entries?_expand=mood")
            .then(response => {return response.json()})
            .then(journalArray => this.journalEntries = journalArray)
    },
    //GET function that gets all moods from API
    getMoods () {
        return fetch("http://localhost:3000/moods")
        .then(response => {return response.json()})
        .then(gotMoodsArray => this.moodsArray = gotMoodsArray)
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
