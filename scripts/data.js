//journal entry object listing individual journal entries
let journalEntries = [];

const getJournalData = () => {
    return fetch("http://localhost:3000/entries").then(
        (httpResponse) => {
            return httpResponse.json();
        }
    ).then(
        (journalEntryArray) => {
            journalEntries = journalEntryArray;
        }
    )
}

getJournalData().then(
    () => {
        entryLog();
    }
)
// const API = {
//     getJournalEntries () {
//         return fetch("http://localhost:3000/entries")
//             .then(response => response.json())
//     }
// }