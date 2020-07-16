//defining a factory function responsible for generating journal entry object

const createJournalEntry = (date, concepts, entry, moodChoice, moodsArray ) => {
    const getMoodId = moodsArray.find(moods => {
        let moodId = moods.id
       if(moods.label === moodChoice) {
           return Object.values(moodId)  
       }
    })
    
    // moodsArray
    // console.log(getMoodId)
    // getMoodId.id,
    
    const journalEntryObject = {
        date,
        concepts,
        entry,
        moodId: parseInt(getMoodId.id) 
        
    }
    return journalEntryObject;
}

export default createJournalEntry;
