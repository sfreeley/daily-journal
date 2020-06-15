/*
    Main application logic that uses the functions and objects
    defined in the other JavaScript files.
*/

import API from './data.js'
import entryDOM from './entryList.js'

API.getJournalEntries().then(() => entryDOM.entryLog());