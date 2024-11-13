const greetings = ["Hello, There!", "Hello, Open Source!", "Welcome to the Web!", "Happy Coding!"];
let currentIndex = 0;
const audio = new Audio('click.wav'); // Sound effect

// Play the button click sound
function playSound() {
    audio.play();
}

// Change the greeting in a loop
function changeGreeting() {
    const greeting = document.getElementById('greeting');
    currentIndex = (currentIndex + 1) % greetings.length; // Cycle through greetings
    greeting.textContent = greetings[currentIndex];

    // Trigger fade-in animation
    resetAnimation(greeting, 'fadeIn 0.5s ease-in-out');

    playSound();
}

// Fetch and display a random fun fact
function getRandomFact() {
    const factUrl = 'http://numbersapi.com/random/trivia'; // Numbers API for random trivia
    const greeting = document.getElementById('greeting');

    fetch(factUrl)
        .then(response => response.text()) // API returns plain text
        .then(fact => {
            greeting.textContent = fact; // Update greeting with the fact
            resetAnimation(greeting, 'fadeIn 0.5s ease-in-out');
        })
        .catch(error => {
            greeting.textContent = 'Oops! Could not fetch a fun fact.';
            console.error('Error fetching fun fact:', error);
        });

    playSound();
}

// Display text with a typing animation
function typeGreeting(text, elementId) {
    let i = 0;
    const element = document.getElementById(elementId);
    element.textContent = '';
    const interval = setInterval(() => {
        if (i < text.length) {
            element.textContent += text[i];
            i++;
        } else {
            clearInterval(interval);
        }
    }, 100);
}

// Utility to reset and apply animations
function resetAnimation(element, animation) {
    element.style.animation = 'none'; // Reset animation
    void element.offsetWidth; // Trigger reflow
    element.style.animation = animation; // Apply new animation
}

// Initialize the greeting with a typing effect
typeGreeting('Hello, World!', 'greeting');
