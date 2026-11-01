// Comment 4. Button will count number of times user clicked the button.
// Comment 5. The count variable will be used to keep track of the number of clicks.
let count = 0;

// Comment 6. The button element is selected from the HTML document using its ID.
const button = document.getElementById('myButton');
const textBox = document.getElementById('myTextBox');

// Comment 7. Increment the count variable by 1 each time the button is clicked.
function updateCount() {
    // Comment 8. Increment the count variable by 1 each time the button is clicked.
    count++;
    // Comment 9. Update the text content of the textBox element to display the current count.
    // Make sure you used 'backticks', not a single quote. This is backtick --> `
    // Comment 10. Just to print out the count variable, you can use ${count} inside the backticks.
    textBox.textContent = `Button clicked ${count} times.`;
}

// Comment 11. Add an event listener to the button element that listens for a 'click' event.
button.addEventListener('click', updateCount);