const greetings = ["Hello, There!", "Hello, Open Source!", "Welcome to the Web!", "Happy Coding!"];
let currentIndex = 0;
const audio = new Audio('click.wav')

function playSound() {
    audio.play();
}

function changeGreeting() {
    const greeting = document.getElementById('greeting');
    currentIndex = (currentIndex + 1) % greetings.length; // Loop back to the first greeting
    greeting.textContent = greetings[currentIndex];

    greeting.style.animation = 'none'
    void greeting.offsetWidth
    greeting.style.animation = 'fadeIn 0.5s ease-in-out';

    playSound()
}

function getRandomFact() {
    const factUrl = 'http://numbersapi.com/random/trivia'; // Numbers API for random trivia
    const greeting = document.getElementById('greeting');

    // Fetch a random fact
    fetch(factUrl)
        .then(response => response.text()) // API returns plain text
        .then(fact => {
            greeting.textContent = fact; // Update greeting with the fact
            greeting.style.animation = 'none'
            void greeting.offsetWidth
            greeting.style.animation = 'fadeIn 0.5s ease-in-out';
        })
        .catch(error => {
            greeting.textContent = 'Oops! Could not fetch a fun fact.';
            console.error('Error fetching fun fact:', error);
        });

    playSound()
}

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

typeGreeting('Hello, World!', 'greeting');
