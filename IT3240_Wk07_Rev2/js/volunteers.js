/*
    Author: Richard Campos
    Date: IT3240 - Week 07
    File: volunteers.js
    Description: JavaScript for managing volunteer list with add, delete, clear, and sort functionality.
                 Uses array manipulation to maintain and display volunteer names.
    
    Changes: Week 07 - Implemented volunteer management system
             Added findById helper function for cleaner DOM access
             Created volunteerArray to store volunteer names
             Implemented displayVolunteers function to show numbered list
             Added addVolunteer function to capture and store new volunteers
             Added deleteVolunteer function to remove volunteers from list
             Added clearVolunteers function to reset the entire list
             Added sortVolunteers function to alphabetically sort names
             Implemented event handlers for all button interactions
*/

// Define the findById() function to find an HTML element by id
// Helper function to simplify document.getElementById() calls
const findById = function (id) { return document.getElementById(id); };

// Declare an empty array for the names
// This array stores all volunteer names in "Last, First" format
let volunteerArray = [];


/**
 * displayVolunteers()
 * Purpose: Display all volunteers from the array in a numbered list format
 * Updates the textarea with id="volunteer-list-area" with the current volunteer list
 */
const displayVolunteers = function () {   
    // Use findById() to get the HTML element for the display of the volunteer list
    // This textarea will show the formatted volunteer list
    let volunteerListArea = findById("volunteer-list-area");

    // Declare and initialize counter variable to 1 (value for number before name)
    // String to accumulate the formatted list output
    let displayString = "";

    /* Loop over the array of names and print them out as a numbered list in this format:
     	1. Jones, Anne
        2. Smith, Jim
        Each iteration adds one volunteer with line number and newline character */
    for (let i = 0; i < volunteerArray.length; i++) {
        // Add line number (i+1), period, space, volunteer name, and newline
        displayString += (i + 1) + ". " + volunteerArray[i] + "\n";
    }

    // Display the list in the textarea
    // Update the textarea value with the formatted volunteer list
    volunteerListArea.value = displayString;
};

/**
 * addVolunteer()
 * Purpose: Add a new volunteer to the array from form input
 * Captures first and last name, formats as "Last, First", adds to array, and updates display
 */

const addVolunteer = function () {
    // Get the data from the form and format: Last, First
    // Concatenates last name, comma-space, and first name into single string
    let volunteerString = findById("last-name-input").value + ", " + findById("first-name-input").value;

    // Store the data in an array
    // Push the formatted name string to the end of volunteerArray
    volunteerArray.push(volunteerString);
    
    // Display the volunteers and clear the add form
    // Refresh the display to show the newly added volunteer
    displayVolunteers();
    
    // Get the add form ready for next entry by clearing input fields
    // Clear first name input field
    findById("first-name-input").value = "";
    // Clear last name input field
    findById("last-name-input").value = "";
    // Set focus back to first name field for convenient data entry
    findById("first-name-input").focus();
};


/**
 * deleteVolunteer()
 * Purpose: Remove a volunteer from the array based on form input
 * Searches for matching name and removes first occurrence from array
 */
const deleteVolunteer = function () {
    // Get the name data from the form fields (hint: use the same format as from the add function)
    // Format as "Last, First" to match array entries
    let volunteerString = findById("last-name-input").value + ", " + findById("first-name-input").value;

    
    // Remove the string from the array (hint: loop through the entire list, compare the string with the item in the array)
    // Loop through volunteerArray to find matching name
    for (let i = 0; i < volunteerArray.length; i++) {
        // Check if current array item matches the input string
        if (volunteerArray[i] === volunteerString) {
            // Remove 1 element at index i using splice method
            volunteerArray.splice(i, 1);
            break; // Exit loop after deleting the first match to avoid index issues
        }
    }
	 
    // Display the volunteers and clear the add form
    // Refresh the display to reflect the deletion
    displayVolunteers();
    
    // Get the delete form ready for next entry
    // Clear first name input field
    findById("first-name-input").value = "";
    // Clear last name input field
    findById("last-name-input").value = "";
    // Set focus back to first name field
    findById("first-name-input").focus();
};

/**
 * clearVolunteers()
 * Purpose: Remove all volunteers from the list
 * Resets the volunteer array to empty and updates display
 */

const clearVolunteers = function () {
    // Delete the data from the arrays
    // Reset volunteerArray to empty array, removing all entries
    volunteerArray = [];
        
    // Redisplay the empty list
    // Update the textarea to show no volunteers
    displayVolunteers();

    // Set focus on the first_name input
    // Fixed 08/20/2024 - Focus on first name field for new entry
    findById("first-name-input").focus();
};

/**
 * sortVolunteers()
 * Purpose: Alphabetically sort the volunteer list
 * Uses JavaScript's built-in sort() method for alphabetical ordering
 */

const sortVolunteers = function () {
    // Sort the volunteers by name
    // JavaScript sort() performs alphabetical sort on string array
    volunteerArray.sort();
    
    // Display the sorted names
    // Refresh display to show volunteers in alphabetical order
    displayVolunteers();
};

/**
 * window.onload event handler
 * Purpose: Initialize the page by attaching event handlers to buttons
 * Runs automatically when the DOM is fully loaded
 */
// When the page is fully loaded, the buttons will be mapped to the JavaScript functions
window.onload = function () {
    // Note that only name of function to be called is used - no parentheses after func name
    // Attach addVolunteer function to add button click event
    findById("add-button").onclick = addVolunteer;
    // Attach deleteVolunteer function to delete button click event
	findById("delete-button").onclick = deleteVolunteer;
    // Attach clearVolunteers function to clear button click event
    findById("clear-button").onclick = clearVolunteers;
    // Attach sortVolunteers function to sort button click event
    findById("sort-button").onclick = sortVolunteers;
    // Set initial focus to first name input field for immediate data entry
    findById("first-name-input").focus();
};