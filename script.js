const greetings = ["Hello, GitHub!", "Hello, Open Source!", "Welcome to the Web!", "Happy Coding!"];
let currentIndex = 0;

function changeGreeting() {
    const greeting = document.getElementById('greeting');
    currentIndex = (currentIndex + 1) % greetings.length; // Loop back to the first greeting
    greeting.textContent = greetings[currentIndex];
}
