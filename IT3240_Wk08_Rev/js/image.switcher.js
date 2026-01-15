/* JavaScript for the week 8 index.html file. The images that the script should cycle through
   are images/banner1.jpg, images/banner2.jpg, and images/banner3.jpg
 */

// Variable to track current image index
// CHANGE: Added currentImageIndex to keep track of which image is currently displayed
let currentImageIndex = 0;
// CHANGE: Added imageList array to store the paths of all banner images
let imageList = [];

/**
 * Preloads an array of images to ensure they load smoothly when switching
 * @param {Array} images - Array of image file paths to preload
 * 
 * CHANGES MADE:
 * - Implemented image preloading to prevent delays during image transitions
 * - Uses Image() constructor to create image objects in browser cache
 * - Loops through all images in the array to preload them before display
 */
function preloadImages(images) {
    // Loop through each image path and create Image objects to preload them
    // CHANGE: Standard for loop iterates through the images array
    for (let i = 0; i < images.length; i++) {
        // CHANGE: Create new Image object for each banner image
        let img = new Image();
        // CHANGE: Setting src triggers the browser to download and cache the image
        img.src = images[i];
    }
}

/**
 * Switches to the next image in the sequence
 * Cycles through the imageList array and updates the main image on the page
 * 
 * CHANGES MADE:
 * - Implemented modulo operator for cycling through images continuously
 * - Used querySelector to target the specific image element
 * - Updates the image src attribute to display the next banner image
 */
function switchImage() {
    // Move to next image index, wrapping back to 0 when we reach the end
    // CHANGE: Use modulo (%) operator to create circular cycling (0,1,2,0,1,2...)
    currentImageIndex = (currentImageIndex + 1) % imageList.length;
    
    // Get the image element from the page
    // CHANGE: querySelector finds the img element inside the #main-image container
    let mainImage = document.querySelector('#main-image img');
    
    // Update the image source to the new image
    // CHANGE: Assign new image path from imageList array to the src attribute
    mainImage.src = imageList[currentImageIndex];
}

/**
 * Window onload function to initialize the image switcher
 * 
 * CHANGES MADE:
 * - Implemented window.onload to ensure DOM is fully loaded before execution
 * - Populated imageList array with paths to three banner images
 * - Called preloadImages() to cache all images before display
 * - Used setInterval() to automate image switching every 3 seconds
 */
window.onload = function() {
    /* Complete this code to get the list/array of images to cycle through. Preload the images
        and then start the process of switching the image every 3 seconds.  */
    
    // Define the array of images to cycle through
    // CHANGE: Populated imageList with three banner image paths
    imageList = ['images/banner1.jpg', 'images/banner2.jpg', 'images/banner3.jpg'];
    
    // Preload all images to ensure smooth transitions
    // CHANGE: Call preloadImages to cache all banner images in browser memory
    preloadImages(imageList);
    
    // Start switching images every 3 seconds (3000 milliseconds)
    // CHANGE: setInterval repeatedly calls switchImage every 3000ms for automatic rotation
    setInterval(switchImage, 3000);
}