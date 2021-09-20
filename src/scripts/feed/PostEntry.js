export const PostEntry = () => {
    return `
    <div class="newPost" id="newPost">
        <div>
            <input value=""
                   name="entry_date"
                   class="newPost__input"
                   type="date"
                   placeholder="Title" />
        </div>
        <div>
            <input value=""
                   name="concepts_covered"
                   class="newPost__input"
                   type="text"
                   placeholder="Brief synopsis of Concepts" />
        </div>

        <textarea name="journal_entry"
            class="newPost__input newPost__description"
            placeholder="Tell me about your day..."></textarea>

        <div class="journal__moods">
                  
        
        </div>
        <button id="newPost__submit">Save</button>
        <button id="newPost__cancel">Cancel</button>
    
    `
}


