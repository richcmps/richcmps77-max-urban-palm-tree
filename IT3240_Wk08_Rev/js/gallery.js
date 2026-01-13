/**
 * Displays a larger version of the clicked image along with details
 * @param {Event} e - The mouse event object containing information about the clicked image
 */
function showImage(e) {
    // Get the image element that was clicked
    let img = e.target;
    
    // Extract just the filename from the full image path
    // split('/') creates an array by splitting on '/', pop() gets the last element
    let fileName = img.src.split('/').pop();
    
    // Get the details text from the data-details attribute
    let detailsText = img.getAttribute('data-details');
    
    // Create HTML string to display the larger image and caption
    let htmlContent = `
        <img src="images/${fileName}" alt="${img.alt}" class="details-image">
        <p class="details-caption">${detailsText}</p>
    `;
    
    // Get the details section and insert the HTML content
    let detailsSection = document.getElementById('details');
    detailsSection.innerHTML = htmlContent;
}




/**
 * Clears the details section when the mouse moves off an image
 */
function clearImage() {
    // Get the details section and clear its content
    let detailsSection = document.getElementById('details');
    detailsSection.innerHTML = '';
}




// onload function to set up event listeners
window.onload = () => {
    // Find img elements on page and loop through them
    for(let image of document.getElementsByTagName("img")) {
        image.addEventListener("click", showImage)
        image.addEventListener("mouseout", clearImage)
    }
}