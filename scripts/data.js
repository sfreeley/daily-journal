// Purpose: 
// This module contains a method to make a fetch call to get journal entries




const API = {
    journalEntries: [],
    getJournalEntries () {
        return fetch("http://localhost:3000/entries")
            .then(response => response.json()).then( (journalEntryArray) => this.journalEntries = journalEntryArray);
    }
}

export default API;
