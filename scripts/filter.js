import API from './data.js'
import entryDOM from './entryList.js'

let userMoodChoice ="";
let filteredMoodArray;

const displayMoodEntries = {

    clearEntryLog() {

        const clearEntry = document.querySelector(".entryLog")
        clearEntry.innerHTML = "";
        console.log("It's working to clear")
    },
    //???
    addMoodEventListener() {

        const moodListener = document.getElementsByName("radioMood")
        moodListener.forEach(button => {
            button.addEventListener("click", clickEvent => {
                userMoodChoice = clickEvent.target.value;
                console.log(userMoodChoice);

                filteredMoodArray = API.journalEntries.filter(entry => {
                    return userMoodChoice === entry.mood
                })
                console.log(filteredMoodArray)
                this.clearEntryLog();
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