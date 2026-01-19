/* JavaScript for the week 8 index.html file. The images that the script should cycle through
   are images/banner1.jpg, images/banner2.jpg, and images/banner3.jpg
 */

// Variable to track current image index
// CHANGE: Added currentImageIndex to keep track of which image is currently displayed
let currentImageIndex = 0;
// CHANGE: Added imageList array to store the paths of all banner images
let imageList = [];
// CHANGE: Added intervalId to store setInterval reference for pause/resume functionality
let intervalId = null;

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
 * Initializes the image switcher with custom configuration
 * @param {Array} imagePaths - Array of image file paths to cycle through
 * @param {string} targetSelector - CSS selector for the image element to update
 * @param {number} interval - Time in milliseconds between image switches
 * 
 * CHANGES MADE:
 * - Refactored to accept dynamic image paths as parameters for reusability
 * - Made function reusable across different pages with different image sets
 * - Accepts custom target selector and interval for flexibility
 * - Can be called from different pages with different configurations
 */
function initImageSwitcher(imagePaths, targetSelector = '#main-image img', interval = 3000) {
    // Validate that image paths were provided
    if (!imagePaths || imagePaths.length === 0) {
        console.error('No image paths provided to initImageSwitcher');
        return;
    }
    
    // Store the image paths in the global imageList
    imageList = imagePaths;
    
    // Preload all images to ensure smooth transitions
    // CHANGE: Call preloadImages to cache all images in browser memory
    preloadImages(imageList);
    
    // Get the image element to attach event listeners
    const targetImage = document.querySelector(targetSelector);
    
    if (!targetImage) {
        console.error('Target image element not found:', targetSelector);
        return;
    }
    
    // Start switching images at the specified interval
    // CHANGE: Store interval ID so we can pause/resume rotation
    intervalId = setInterval(switchImage, interval);
    
    // Add hover event listeners to pause/resume rotation
    // CHANGE: Pause rotation when mouse enters the image
    targetImage.addEventListener('mouseenter', function() {
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
        }
    });
    
    // CHANGE: Resume rotation when mouse leaves the image
    targetImage.addEventListener('mouseleave', function() {
        if (!intervalId) {
            intervalId = setInterval(switchImage, interval);
        }
    });
}

/**
 * Window onload function to initialize the image switcher
 * 
 * CHANGES MADE:
 * - Refactored to use the new reusable initImageSwitcher function
 * - Image paths can now be easily customized per page
 * - Configuration is centralized and easier to maintain
 */
window.onload = function() {
    /* Complete this code to get the list/array of images to cycle through. Preload the images
        and then start the process of switching the image every 3 seconds.  */
    
    // Define the array of images to cycle through for this page
    const bannerImages = ['images/banner1.jpg', 'images/banner2.jpg', 'images/banner3.jpg'];
    
    // Initialize the image switcher with custom configuration
    // CHANGE: Using reusable function that accepts dynamic parameters
    initImageSwitcher(bannerImages, '#main-image img', 3000);
}