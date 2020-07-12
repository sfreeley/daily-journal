import API from './data.js'
import entryDOM from './entryList.js'

let userMoodChoice = "";
let filteredMoodArray;
let filteredEntriesArray;

const displayMoodEntries = {
    //clearing entry log section
    clearEntryLog() {

        const clearEntry = document.querySelector(".entryLog")
        clearEntry.innerHTML = "";
        console.log("It's working to clear")
    },

    addMoodEventListener() {
        //adding event listener to each mood radio button
        const moodListener = document.getElementsByName("radioMood")
        moodListener.forEach(button => {
            button.addEventListener("click", clickEvent => {
                userMoodChoice = clickEvent.target.value;
                console.log(userMoodChoice);
                if (userMoodChoice === "showAll") {
                    this.clearEntryLog();
                    entryDOM.entryLog(API.journalEntries)
                } else {
                    //filtering through journal entries array and returning only entries to new filteredMoodArray that return true with specified user mood choice (via radio button click);
                    filteredMoodArray = API.journalEntries.filter(entry => {
                        return userMoodChoice === entry.moodChoice.label;
                    })
                    console.log(filteredMoodArray)
                    //invoking clearing entry log section so each time radio button clicked it clears previous entries out 
                    this.clearEntryLog();
                    //rendering to DOM the newly filtered array with the objects that correspond with radio button choice 
                    entryDOM.entryLog(filteredMoodArray);
                }

            })

        })
    },

    //search field functionality 
    searchField() {
        let searchTerm
        //target search input field
        const searchInput = document.querySelector("#searchInput")
        //event listener placed on keypress for ENTER
        searchInput.addEventListener("keypress", event => {
            if (event.charCode === 13) {
                //declare variable with the value of the keypress
                searchTerm = event.target.value;
                //.filter() array method to iterate through individual journal entry objects and
                //return only those entries (which have to be converted from its array of values to a string)
                //that match the search term declared above (toLowerCase() method will make the search for either capital or lowercase )
                //once refactored json mood data, have to also filter through moodChoice's value because now it is an object
                filteredEntriesArray = API.journalEntries.filter(entries => {
                    let entryValues = Object.values(entries)
                    let entryMoodValues = Object.values(entries.moodChoice)

                    return (entryValues.join()
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                        Object.values(entryMoodValues).join()
                            .toLowerCase()
                            .includes(searchTerm.toLowerCase()))

                })
                this.clearEntryLog();
                entryDOM.entryLog(filteredEntriesArray);

            }

        })

    }
}


export default displayMoodEntries