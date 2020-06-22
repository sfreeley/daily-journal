import API from './data.js'
import entryDOM from './entryList.js'

let userMoodChoice;
const displayMoodEntries = {
    // userMoodChoice : "",
    clearEntryLog () {
        const clearEntry = document.querySelector(".entryLog")
        clearEntry.innerHTML = "";
    },

    addMoodEventListener (inputName) {
        const moodListener = document.getElementsByName("radioMood")
        for (inputName of moodListener) {
            inputName.addEventListener("click", clickEvent => {
            userMoodChoice = clickEvent.target.value
            this.clearEntryLog();
            API.showFilterMood().then(() => entryDOM.entryLog())
            })
         }
             
     }         

}
        
        
       
        
    

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