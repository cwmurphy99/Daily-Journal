const loggedInUser = {
    id: 1,
    name: "Chris",
    dateJoined: 1630513631166,
    email: "theworldisyours@gmail.com",
    stateId: 35
}

export const getLoggedInUser = () => {
    return loggedInUser;
}
export const getUsers = () => {
    return fetch("http://localhost:8088/users")
        .then(response => response.json())
}

//CREATE AN EMPTY ARRAY THAT WILL BE USED TO HOLD A BACKUP OF THE JOURNAL DATA
let postCollection = [];

export const usePostCollection = () => {
  //Best practice: we don't want to alter the original state, so
  //make a copy of it and then return it
  //The spread operator makes this quick work
  return [...postCollection];
}
export const getPosts = () => {
  return fetch("http://localhost:8088/posts?_expand=mood")
    .then(response => response.json())
    .then(parsedResponse => {
      postCollection = parsedResponse;
      return parsedResponse;
    })
}

export const createPost = postObj => {
    return fetch("http://localhost:8088/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(postObj)
  
    })
        .then(response => response.json())
  }

  export const getMoods = () => {
    return fetch("http://localhost:8088/moods")
      .then(response => response.json())
      .then(parsedResponse => {
        postCollection = parsedResponse;
        return parsedResponse;
      })
  }

  export const deletePost = postId => {
    return fetch(`http://localhost:8088/posts/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
    .then(response => response.json())
  }