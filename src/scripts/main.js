import { getPosts, getUsers, usePostCollection, createPost, getMoods } from "./data/DataManager.js";
import { MoodList, PostList } from "./feed/PostList.js";
import { NavBar } from "./nav/NavBar.js";
import { Footer } from "./nav/Footer.js";
import { PostEntry } from "./feed/PostEntry.js";


const showPostList = () => {
    //Get a reference to the location on the DOM where the list will display
    const postElement = document.querySelector(".postList");
    getPosts().then((allPosts) => {
        postElement.innerHTML = PostList(allPosts.reverse());
    })
}
const showUserList = () => {
    //Get a reference to the location on the DOM where the list can display
    const postElement = document.querySelector(".userList");
    getUsers().then((allUsers) => {
        //console.log("user info: ", allUsers);
    })
}
const showPostEntry = () => {
    //Get a reference to the location on the DOM where the nav will display
    const entryElement = document.querySelector(".entryForm");
    entryElement.innerHTML = PostEntry();
}
const showMoodList = () => {
    getMoods().then((allMoods) => MoodList(allMoods))
}


const startJournal = () => {
    showNavBar();
    showPostEntry();
    showPostList();
    showUserList();
    showFooter();
    showMoodList();
}

const applicationElement = document.querySelector(".dailyjournal");

//EVENT LISTENER FOR 'ON CLICK'
applicationElement.addEventListener("click", event => {
    //console.log("what was clicked: ", event.target)
    //USER CLICKS THE LOGOUT BUTTON => CONFIRMS LOGOUT
    if (event.target.id === "logout") {
        confirm("Are you sure you want to log out?")
    } else if (event.target.id === "directMessageIcon") {
        //USER CLICKS THE PEN ICON => ASKS FAVORITE COLOR
        prompt("What is your favorite color?")
    } else if (event.target.id === "pb-home") {
        //USER CLICKS THE PB ICON => PAGE RELOADS
        window.location.reload();
    } else if (event.target.id.startsWith("edit")) {
        //USER CLICKS THE EDIT BUTTON FOR A POST
        console.log("post clicked", event.target.id.split("--"))
        console.log("the id is", event.target.id.split("--")[1])
    }
})




//NAV BAR INFO
const showNavBar = () => {
    //Get a reference to the location on the DOM where the nav will display
    const navElement = document.querySelector("nav");
    navElement.innerHTML = NavBar();
}

applicationElement.addEventListener("click", event => {
    if (event.target.id === "newPost__cancel") {
        //clear the input fields
    }
})
applicationElement.addEventListener("click", event => {
    event.preventDefault();
    if (event.target.id === "newPost__submit") {
        const entry_date = document.querySelector("input[name='entry_date']").value
        const concept = document.querySelector("input[name='concepts_covered']").value
        const journal_entry = document.querySelector("textarea[name='journal_entry']").value
        const journal_mood = document.querySelector("select[name='journal_mood']").value
        //we have not created a user yet - for now, we will hard code `1`.
        //we can add the current time as well
        const postObject = {
            date: entry_date,
            concept: concept,
            entry: journal_entry,
            moodId: parseInt(journal_mood),
            userId: 1,
            timestamp: Date.now()
        }
        if (entry_date && concept && journal_entry && journal_mood) {
            // be sure to import from the DataManager
            createPost(postObject)
                .then(dbResponse => {
                    showPostList()
                });
        } else {
            alert("You forgot some info...");
        }
    }
})

//FOOTER INFO
applicationElement.addEventListener("change", event => {
    if (event.target.id === "yearSelection") {
        const yearAsNumber = parseInt(event.target.value)
        //console.log(`User wants to see posts since ${yearAsNumber}`)
        //invoke a filter function passing the year as an argument
        showFilteredPosts(yearAsNumber);
    }
})
const showFilteredPosts = (year) => {
    //get a copy of the post collection
    const epoch = Date.parse(`01/01/${year}`);
    //filter the data
    const filteredData = usePostCollection().filter(singlePost => {
        if (singlePost.timestamp >= epoch) {
            return singlePost
        } else {
            showPostList();
        }
    })
    const postElement = document.querySelector(".postList");
    postElement.innerHTML = PostList(filteredData);
}
const showFooter = () => {
    const navElement = document.querySelector("footer");
    navElement.innerHTML = Footer();
}

startJournal();








// EntryListComponent();


// document.addEventListener("click", (event) => {
// 	if (event.target.id.startsWith("edit")) {
// 		console.log("post clicked", event.target.id.split("--"))
// 		console.log("the id is", event.target.id.split("--")[1])
// 	}
// })

// document.addEventListener("click", (event) => {
// 	if (event.target.type === "button") {
// 		console.log("you clicked the button!", event);
// 	}
// })

// const showPostEntry = () => { 
//     //Get a reference to the location on the DOM where the nav will display
//     const entryElement = document.querySelector(".entryForm");
//     entryElement.innerHTML = PostEntry();
//   }

//   const startJournal = () => {
// 	  JournalEntryComponent();
// 	  getJournalEntries();
// 	  showPostEntry();
//   }


// document.addEventListener("click", event => {
// 	event.preventDefault();
// 	if (event.target.id === "newPost__submit") {
// 		console.log(event);
// 		//collect the input values into an object to post to the DB
// 		const entry_date = document.querySelector("input[name='entry_date']").value
// 		const concept = document.querySelector("input[name='concepts_covered']").value
// 		const journal_entry = document.querySelector("textarea[name='journal_entry']").value
// 		const journal_mood = document.querySelector("input[name='journal_mood']").value
// 		//we have not created a user yet - for now, we will hard code `1`.
// 		//we can add the current time as well
// 		const postObject = {
// 			date: entry_date,
// 			concept: concept,
// 			entry: journal_entry,
// 			mood: journal_mood,
// 			userId: 1,
// 			timestamp: Date.now()
// 		}
// 		if (entry_date && concept && journal_entry && journal_mood) {
// 			// be sure to import from the DataManager
// 			createPost(postObject)
// 				.then(dbResponse => {
// 					showPostList()
// 				});
// 		} else {
// 			alert("You forgot some info...");
// 		}
// 	}
// })

// startJournal();