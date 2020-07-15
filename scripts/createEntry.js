//defining a factory function responsible for generating journal entry object

const createJournalEntry = (date, concepts, entry, moodsArray) => {
    const getMoodId = moodsArray.find(moods => {
        let moodId = moods.id
       if(moods.label === moodChoice) {
           return Object.values(moodId)  
       }
    })
    console.log(getMoodId)
    
    const journalEntryObject = {
        date,
        concepts,
        entry,
        moodId: getMoodId.id,
        
    }
    return journalEntryObject;
}

export default createJournalEntry;

//in created object
// moodChoice: getMoodId
//pass this in as argument
// moodChoice