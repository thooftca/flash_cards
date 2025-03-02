// document.addEventListener("DOMContentLoaded", function () {
const term = document.querySelector('.term');
const definition = document.querySelector('.definition');
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');
const questionType = document.querySelector('.question-type'); // New element to indicate perfect/imperfect
const feedback = document.getElementById('feedback');

const data = Object.entries(words);
const pronouns = Object.entries(pronouns);
const hebbenzijn = Object.entries(hebbenzijn);

let currentCorrectAnswer = ""; 
let currentQuestionType = ""; // "perfect" or "imperfect"
let currentPronoun = "";      // 'ik', 'jij, ...
let hebbnzijn = "";
let score = 0; // Initialize score
let numLives = 3;
document.getElementById('heart-number').textContent = numLives;

function getRandomWord() {
    const randomTerm = data[Math.floor(Math.random() * data.length)];
    let pluralVerb = randomTerm[0];  

    // Randomly decide whether to ask for perfect or imperfect
    currentQuestionType = Math.random() < 0.5 ? "perfect" : "imperfect";
    currentCorrectAnswer = randomTerm[1][currentQuestionType];  

    term.innerHTML = `<h3>${pluralVerb}</h3>`;
    questionType.innerHTML = `<h4>Vervoeging: ${currentQuestionType === "perfect" ? "Voltooid Deelwoord (Perfectum)" : "Onvoltooid Verleden Tijd (Imperfectum)"}</h4>`;
    
    document.getElementById('user-answer').value = ''; // Clear input field
    feedback.innerText = ''; // Clear feedback text
    feedback.classList.remove('correct', 'incorrect'); // Remove styling
    definition.style.display = "none"; // Hide the definition initially
}

function updateScore() {
    document.getElementById('scoreBoard').innerText = `Score: ${score}`;
    document.getElementById('heart-number').textContent = numLives;
}

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value.trim().toLowerCase();

    if (!currentCorrectAnswer) {
        feedback.innerText = "Error: No verb selected!";
        feedback.classList.add("incorrect");
        return;
    }

    if (userAnswer === currentCorrectAnswer.toLowerCase()) {
        feedback.innerText = 'Correct! Great job!';
        feedback.classList.remove('incorrect');
        feedback.classList.add('correct');
        score++; // Increase score
    } else {
        feedback.innerText = `Incorrect. The correct answer is: ${currentCorrectAnswer}`;
        feedback.classList.remove('correct');
        feedback.classList.add('incorrect');
        numLives--;
        // if (numLives === 0) {
        //     displayFunnyGif(); // Show the funny GIF
        //  }
    }

    updateScore(); 
    
    definition.innerHTML = `<h3>${currentCorrectAnswer}</h3>`; // Show the correct answer
    definition.style.display = "block"; 
}

// Function to display the funny GIF - gif should be added to local directory
// function displayFunnyGif() {
//    document.getElementById('funny-gif').style.display = 'block'; // Show the GIF
//  }

checkButton.addEventListener('click', checkAnswer);
nextButton.addEventListener('click', getRandomWord);

// Start with a random word when the page loads
getRandomWord();
// });