/*
    Author: Richard Campos
    Date: December 15, 2025
    File: script.js
    Description: Form handling script for Camphora Rx web forms.
                 Handles both general forms and specialized invitation form processing.
    
    Changes: December 2025 - Enhanced script to handle invitation.html form
             Added recipient and host name variables
             Added event name and event date handling
             Implemented styled invitation message output
             Added date formatting for improved readability

    Usage Instructions:
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
    
    // get form values for invitation form fields
    // Added for invitation.html to capture recipient name
    const recipient = document.getElementById('recipient') ? document.getElementById('recipient').value : '';
    // Added for invitation.html to capture host name
    const host = document.getElementById('host') ? document.getElementById('host').value : '';
    // Added for invitation.html to capture optional event name
    const eventName = document.getElementById('event') ? document.getElementById('event').value : '';
    // Added for invitation.html to capture optional event date
    const eventDate = document.getElementById('date') ? document.getElementById('date').value : '';
    
    // declare outputText as an empty string
    let outputText = '';
    
    // Check if this is the invitation form (has recipient field)
    // Added to distinguish invitation form from other forms
    if (document.getElementById('recipient')) {
        // Format invitation message with styled div container
        // Added styling for professional invitation appearance
        outputText = `<div style="border: 2px solid #1e40af; padding: 20px; border-radius: 8px; background-color: #f8fafc; margin-top: 20px;">`;
        outputText += `<h3 style="color: #1e40af; margin-top: 0;">You're Invited!</h3>`;
        // Insert recipient name from form input
        outputText += `<p><strong>Dear ${recipient},</strong></p>`;
        outputText += `<p>You are cordially invited to join us`;
        
        // Add event name if provided (optional field)
        if (eventName) {
            outputText += ` for <strong>${eventName}</strong>`;
        }
        
        // Add event date if provided (optional field)
        if (eventDate) {
            // Format the date nicely for better readability
            // Added date formatting to convert YYYY-MM-DD to long format
            const dateObj = new Date(eventDate + 'T00:00:00');
            const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = dateObj.toLocaleDateString('en-US', options);
            outputText += ` on <strong>${formattedDate}</strong>`;
        }
        
        outputText += `.</p>`;
        outputText += `<p>We hope to see you there!</p>`;
        // Insert host name from form input as signature
        outputText += `<p><em>Sincerely,<br>${host}</em></p>`;
        outputText += `</div>`;
    } else {
        // Handle other forms (like contact form)
        // get all input elements except the submit button
        const inputs = form.querySelectorAll('input:not([type="submit"]), textarea, select');
        
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
    }

    // display the output
    document.getElementById('output').innerHTML = outputText;
    // Make output visible by changing the display in its style
    document.getElementById('output').style.display = "block";
});