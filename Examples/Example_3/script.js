let count = 0;

const button = document.getElementById('myButton');
const textBox = document.getElementById('myTextBox');

function updateCount() {

    count++;

    // Comment 1. You can do a lot of things with javascript. 
    // For example, if count becomes 10, you can change the text to "You clicked 10 times!".
    if (count === 10) {
        textBox.textContent = "You clicked 10 times!";
    } else {
        textBox.textContent = `Button clicked ${count} times.`;
    }
}

button.addEventListener('click', updateCount);