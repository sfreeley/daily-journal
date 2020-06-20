//defining a factory function responsible for generating journal entry object

const createJournalEntry = (date, concepts, entry, mood) => {
    const journalEntryObject = {
        date,
        concepts,
        entry,
        mood
    }
    return journalEntryObject;
}


export default createJournalEntry;