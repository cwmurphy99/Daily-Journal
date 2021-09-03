/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const JournalEntryComponent = (entry) => {
    return `
        <section class="journalEntryContainer" id="entry--${entry.id}" class="journalEntry">
            <div class="journalEntry">   
            <p>Date: ${entry.date}</p>
            <p>Concepts Covered: ${entry.concept}</p>
            <p>Journal Entry: ${entry.entry}</p>
            <p>Mood: ${entry.mood}</p>
            </div>
        </section>
    `
}




