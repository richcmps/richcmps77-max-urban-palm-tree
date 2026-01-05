// IT3240 - Week 07

// Define the findById() function to find an HTML element by id
const findById = function (id) { return document.getElementById(id); };

// Declare an empty array for the names
let volunteerArray = [];


const displayVolunteers = function () {   
    // Use findById() to get the HTML element for the display of the volunteer list
    let volunteerListArea = findById("volunteer-list-area");

    // Declare and initialize counter variable to 1 (value for number before name)
    let displayString = "";

    /* loop over the array of names and print them out as a numbered list in this format
     	1. Jones, Anne
        2. Smith, Jim  */
    for (let i = 0; i < volunteerArray.length; i++) {
        displayString += (i + 1) + ". " + volunteerArray[i] + "\n";
    }

    // Display the list in the textarea
    volunteerListArea.value = displayString;
};

const addVolunteer = function () {
    // get the data from the form and format: Last, First
    let volunteerString = findById("last-name-input").value + ", " + findById("first-name-input").value;

    // store the data in an array
    volunteerArray.push(volunteerString);
    
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the add form ready for next entry by clearing input fields
    findById("first-name-input").value = "";
    findById("last-name-input").value = "";
    findById("first-name-input").focus();
};


const deleteVolunteer = function () {
    // get the name data from the form fields (hint: use the same format as from the add function).
    let volunteerString = findById("last-name-input").value + ", " + findById("first-name-input").value;

    
    // remove the string from the array (hint, loop through the entire list, compare the string with the item in the array).
    for (let i = 0; i < volunteerArray.length; i++) {
        if (volunteerArray[i] === volunteerString) {
            volunteerArray.splice(i, 1);
            break; // Exit loop after deleting the first match
        }
    }
	 
    // display the volunteers and clear the add form
    displayVolunteers();
    
    // get the delete form ready for next entry
    findById("first-name-input").value = "";
    findById("last-name-input").value = "";
    findById("first-name-input").focus();
};

const clearVolunteers = function () {
    // delete the data from the arrays
    volunteerArray = [];
        
    // redisplay the empty list
    displayVolunteers();

    // set focus on the first_name input
    findById("first-name-input").focus(); // fixed 08/20/2024
};

const sortVolunteers = function () {
    // sort the volunteers by name
    volunteerArray.sort();
    
    // display the sorted names
    displayVolunteers();
};

// When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
    // Note that only name of function to be called is used - no parentheses after func name
    findById("add-button").onclick = addVolunteer;
	findById("delete-button").onclick = deleteVolunteer;
    findById("clear-button").onclick = clearVolunteers;
    findById("sort-button").onclick = sortVolunteers;
    findById("first-name-input").focus();
};