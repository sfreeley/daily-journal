//defining a factory function responsible for generating journal entry object

const generateJournalEntry = (date, concepts, entry, mood) => {
    const journalEntryObject = {
        date,
        concepts,
        entry,
        mood
    }
    return journalEntryObject;
}


export default generateJournalEntry;