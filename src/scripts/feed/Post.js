export const Post = (postObject) => {
  return `
    <section class="post">
    <h3 class="post__timestamp">${Date(postObject.timestamp).toLocaleString().slice(3,15)}</h3>
    <h3 class="post__concepts">Concepts Covered: ${postObject.concept}</p>
    <h3 class="post__entry">Journal Entry: ${postObject.entry}</p>
    <h3 class="post__mood">Mood: ${postObject.mood.mood}</p>
    <div><button id="edit--${postObject.id}">Edit</button></div>
    </section>
    `
}





// export const Post = (postObject) => {
//   return `
//     <section class="post">
//     <header>
//     <h2 class="post__title">${postObject.title}</h2>
//     </header>
//     <img class="post__image" src="${postObject.imageURL}" />
//     <h4 class="description">${postObject.description}</h4>
//     <p timestamp>${Date(postObject.timestamp).toLocaleString().slice(3, 15)}</p>
//     <p class="userId">User Id: ${postObject.userId}</p>
//     <div><button id="edit--${postObject.id}">Edit</button></div>
//     </section>
//     `
// }