/* JavaScript for the week 8 index.html file. The images that the script should cycle through
   are images/banner1.jpg, images/banner2.jpg, and images/banner3.jpg
 */

// Variable to track current image index
let currentImageIndex = 0;
let imageList = [];

/**
 * Preloads an array of images to ensure they load smoothly when switching
 * @param {Array} images - Array of image file paths to preload
 */
function preloadImages(images) {
    // Loop through each image path and create Image objects to preload them
    for (let i = 0; i < images.length; i++) {
        let img = new Image();
        img.src = images[i];
    }
}

/**
 * Switches to the next image in the sequence
 * Cycles through the imageList array and updates the main image on the page
 */
function switchImage() {
    // Move to next image index, wrapping back to 0 when we reach the end
    currentImageIndex = (currentImageIndex + 1) % imageList.length;
    
    // Get the image element from the page
    let mainImage = document.querySelector('#main-image img');
    
    // Update the image source to the new image
    mainImage.src = imageList[currentImageIndex];
}

// This will run when the page is done loading
window.onload = function() {
    /* Complete this code to get the list/array of images to cycle through. Preload the images
        and then start the process of switching the image every 3 seconds.  */
    
    // Define the array of images to cycle through
    imageList = ['images/banner1.jpg', 'images/banner2.jpg', 'images/banner3.jpg'];
    
    // Preload all images to ensure smooth transitions
    preloadImages(imageList);
    
    // Start switching images every 3 seconds (3000 milliseconds)
    setInterval(switchImage, 3000);
}