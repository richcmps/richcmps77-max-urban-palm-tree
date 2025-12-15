//Function to replace the content and show output area. Called from HTML.
function replaceContent() {
	//declaring the variables
	let myRecipientName;
	//declaring the variable for host name
	let myHostName;
	
	//setting the variable to the input field's id named recipientNameInput's value
	myRecipientName = document.getElementById("recipient-input").value
	//reading the value from the host-input field and storing it in the host variable
	myHostName = document.getElementById("host-input").value

	//logging to devtools console
	console.log('Variable myRecipientName: ' + myRecipientName)
	//logging the host name variable to the console
	console.log('Variable myHostName: ' + myHostName)
	
	//setting the HTML code in the span id recipientNamePlaceholder with the variable 
	document.getElementById("recipient-placeholder").innerHTML = myRecipientName
	//replacing the host-placeholder text with the host's name
	document.getElementById("host-placeholder").innerHTML = myHostName

	//make output area visible by removing hidden class
	document.getElementById("outputArea").classList.remove("hidden")
} 