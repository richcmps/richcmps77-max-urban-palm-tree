/**
 * Displays a larger version of the clicked image along with details
 * @param {Event} e - The mouse event object containing information about the clicked image
 * 
 * CHANGES MADE:
 * - Added event parameter to capture the clicked image element
 * - Implemented filename extraction using split() and pop() methods
 * - Added data-details attribute retrieval for image descriptions
 * - Created dynamic HTML content using template literals
 * - Inserted content into the 'details' section using innerHTML
 */
function showImage(e) {
    // Get the image element that was clicked
    // CHANGE: Use e.target to access the specific image that triggered the event
    let img = e.target;
    
    // Extract just the filename from the full image path
    // CHANGE: Use split('/').pop() to get only the filename without the full path
    // split('/') creates an array by splitting on '/', pop() gets the last element
    let fileName = img.src.split('/').pop();
    
    // Get the details text from the data-details attribute
    // CHANGE: Retrieve custom data-details attribute from the image element
    let detailsText = img.getAttribute('data-details');
    
    // Create HTML string to display the larger image and caption
    // CHANGE: Use template literals to build dynamic HTML content
    // CHANGE: Apply 'details-image' and 'details-caption' classes for styling
    let htmlContent = `
        <img src="images/${fileName}" alt="${img.alt}" class="details-image">
        <p class="details-caption">${detailsText}</p>
    `;
    
    // Get the details section and insert the HTML content
    // CHANGE: Target the 'details' section by ID and replace its content
    let detailsSection = document.getElementById('details');
    detailsSection.innerHTML = htmlContent;
}




/**
 * Clears the details section when the mouse moves off an image
 * 
 * CHANGES MADE:
 * - Implemented mouseout event handler to clear displayed details
 * - Targets the 'details' section and clears its HTML content
 * - Provides clean reset of the details area when user moves cursor away
 */
function clearImage() {
    // Get the details section and clear its content
    // CHANGE: Set innerHTML to empty string to remove displayed image and caption
    let detailsSection = document.getElementById('details');
    detailsSection.innerHTML = '';
}




/**
 * Window onload function to set up event listeners for gallery functionality
 * 
 * CHANGES MADE:
 * - Implemented window.onload to ensure DOM is fully loaded before attaching listeners
 * - Used for...of loop to iterate through all image elements efficiently
 * - Attached 'click' event listener to each image to trigger showImage()
 * - Attached 'mouseout' event listener to each image to trigger clearImage()
 * - This creates an interactive gallery where clicking shows details and moving away clears them
 */
window.onload = () => {
    // Find img elements on page and loop through them
    // CHANGE: Use getElementsByTagName to get all <img> elements in the document
    // CHANGE: Use for...of loop for cleaner iteration over the image collection
    for(let image of document.getElementsByTagName("img")) {
        // CHANGE: Add click event listener to display image details when clicked
        image.addEventListener("click", showImage)
        // CHANGE: Add mouseout event listener to clear details when mouse leaves image
        image.addEventListener("mouseout", clearImage)
    }
}