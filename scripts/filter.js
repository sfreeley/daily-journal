import API from './data.js'
import entryDOM from './entryList.js'

let userMoodChoice ="";
let filteredMoodArray;

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
                //filtering through journal entries array and returning only entries to new filteredMoodArray that return true with specified user mood choice (via radio button click);
                filteredMoodArray = API.journalEntries.filter(entry => {
                    return userMoodChoice === entry.mood
                })
                console.log(filteredMoodArray)
                //invoking clearing entry log section so each time radio button clicked it clears previous entries out 
                this.clearEntryLog();
                //rendering to DOM the newly filtered array with the objects that correspond with radio button choice 
                entryDOM.entryLog(filteredMoodArray)


            })

        })
    }



}

        
        
    // let journalData = [];
            
            // API.getJournalEntries().then(entries => {
            //     journalData = entries
            //     console.log("response from fetch call", entries)
            // })
            
            // console.log(journalData)
            // const filteredArray = journalData.filter(entry => {
            //     return entry.mood === userMoodChoice
            // })
       

        // console.log("this is filtered array", filteredArray)    
// API.showFilterMood()     
    

    // addMoodFilter () {
    // const moodChoice = document.querySelector(".inputRadio") 
    // moodChoice.addEventListener("click", clickEvent => {
        // const userMoodChoice = clickEvent.target.value
        // for (const journalObj of API.journalEntries) {
        //     if (userMoodChoice === journalObj.mood) {
        //         this.clearEntryLog();
        //        
               
        //     }
        // }
       
    // })

    


export default displayMoodEntries