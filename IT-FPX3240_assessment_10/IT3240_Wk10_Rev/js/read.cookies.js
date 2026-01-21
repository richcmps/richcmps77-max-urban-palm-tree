/* ASSESSMENT 10: read.cookies.js
   JavaScript for the confirm.html page.
   
   PURPOSE:
   - Reads cookie data written by registration.js after form submission
   - Displays registration information on the confirmation page
   - Parses cookie name-value pairs and formats them for user-friendly display
   
   FUNCTIONS:
   - displayCookieValues(): Reads all cookies and displays them in the output div
   - window.onload: Calls displayCookieValues() when page loads
 */

/**
 * ASSESSMENT 10: COMPLETED FUNCTION
 * Reads cookies, extracts name-value pairs, and displays them in the output area
 * 
 * This function:
 * 1. Locates the output div on the confirm.html page
 * 2. Retrieves all cookies from document.cookie
 * 3. Parses the cookie string into individual name-value pairs
 * 4. Displays each cookie in a readable list format
 * 
 * @requires div element with id "output" on the page
 * @side-effects Modifies innerHTML of output div to display cookie data
 */
const displayCookieValues = function() {
    // STEP 1: Locate the output area div on the confirm.html page
    const outputDiv = document.getElementById("output")
    
    // STEP 2: Get all cookies as a single string from document.cookie
    // Format: "cookie1=value1; cookie2=value2; cookie3=value3"
    const cookies = document.cookie
    
    // Check if there are any cookies
    if (cookies === "") {
        outputDiv.innerHTML = "<p>No registration data found.</p>"
        return
    }
    
    // STEP 3: Split the cookies string into individual cookie name-value pairs
    // Split on "; " to separate each cookie
    const cookieArray = cookies.split("; ")
    
    // Create a readable output format using HTML list
    let output = "<ul>"
    
    // STEP 4: Loop through each cookie and display its name and value
    cookieArray.forEach(cookie => {
        // Split each cookie on "=" to separate name from value
        const [name, value] = cookie.split("=")
        // Decode the value to convert encoded characters back to normal text
        const decodedValue = decodeURIComponent(value)
        // Add formatted list item with cookie name and value
        output += `<li><strong>${name}:</strong> ${decodedValue}</li>`
    })
    
    output += "</ul>"
    
    // Display the formatted cookies in the output div
    outputDiv.innerHTML = output
}

/**
 * ASSESSMENT 10: COMPLETED EVENT HANDLER
 * Window onload event handler - called when page has fully loaded
 * 
 * Ensures DOM is ready before attempting to access elements
 * Calls displayCookieValues() to show registration data from cookies
 */
window.onload = () => {
    // Call function to display cookie values when page has loaded
    // This ensures the output div exists before we try to populate it
    displayCookieValues()
}