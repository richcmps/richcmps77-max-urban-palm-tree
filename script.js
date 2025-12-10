/*
    1. Add this script to the HTML file with web form by adding this before the closing
    </body> tag:

    <script src="script.js"></script>

    2. The <form> tag must look like this:

    <form id="webForm" action="#">

    3. Add this line after the closing </form> tag to read and display the input
       when the submit button is clicked:

       <p><div id="output"></div></p>
 */

document.getElementById('webForm').addEventListener('submit', function(event) {
    // prevent the form from submitting
    event.preventDefault();
    // access the overall form object
    const form = event.target;
    // get all input elements except the submit button
    const inputs = form.querySelectorAll('input:not([type="submit"]), textarea, select' );
    // declare outputText as an empty string
    let outputText = '';

    // go through form inputs and gather names and values
    inputs.forEach(input => {
        // Handle selected radio button and checkboxes
        if (input.type === 'radio' || input.type === 'checkbox') {
            // Only checked boxes/selected radio button displayed in output
            if (input.checked) {
                outputText += `${input.name || input.id || 'Unnamed'}: ${input.value}<br>`;
            }
        }
        // Handle other form inputs
        else {
            outputText += `${input.name || input.id || 'Unnamed'}: ${input.value}<br>`;
        }
    });

    // display the input values
    document.getElementById('output').innerHTML = outputText;
	// Make output visible by changing the display in its style
    document.getElementById('output').style.display = "block";
});