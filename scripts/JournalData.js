/*
 *   Journal data for Daily Journal application
 *
 *      Holds the raw data about each entry and exports
 *      functions that other modules can use to filter
 *      the entries for different purposes.
 */

// This is the original data.
const journal = [
    {
        id: 1,
        date: "08/9/2021",
        concept: "Day One Orientation",
        entry: "We talked about pets, ice cream, and what hidden talents we have.",
        mood: "Ok"
    },
    {
        id: 2,
        date: "08/10/2021",
        concept: "Flexbox",
        entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain. I hate Steve.",
        mood: "Sad"
    },
    {
        id: 3,
        date: "08/26/2021",
        concept: "Project Presentation",
        entry: "Today we presented our projects based on where we want to travel.  I'd love to see Fiji, but I have COVID.",
        mood: "Hopeful"
    }
]

/*
    You export a function that provides a version of the
    raw data in the format that you want
*/
export const getJournalEntries = () => {
    const sortedByDate = journal.sort(
        (currentEntry, nextEntry) =>
            Date.parse(currentEntry.date) - Date.parse(nextEntry.date)
    )
    return sortedByDate
}