export const Post = (postObject) => {
  return `
    <section class="post" id="postDisplay">
    <h3 class="post__timestamp">${Date(postObject.timestamp).toLocaleString().slice(3,15)}</h3>
    <h3 class="post__concepts">Concepts Covered: ${postObject.concept}</p>
    <h3 class="post__entry">Journal Entry: ${postObject.entry}</p>
    <h3 class="post__mood">Mood: ${postObject.mood.mood}</p>
    <div id="buttonContainer">
    <div id="editButton"><button id="edit__${postObject.id}">Edit</button></div>
    <div id="deleteButton"><button id="delete__${postObject.id}">Delete</button>
    </div>
    </section>
    `
}