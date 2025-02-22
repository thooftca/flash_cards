const term = document.querySelector('.term');
const definition = document.querySelector('.definition')
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');


const data = Object.entries(words);

function getRandomWord() {
    randomTerm = data[Math.floor(Math.random() * data.length)]
    let verb = randomTerm[0];  // Plural form (the key)
    let perfectTense = randomTerm[1]["perfect"];  // Get the perfect tense
    term.innerHTML = `<h3>${verb}</h3>`;
    document.getElementById('user-answer').value = ''; // Clear input field
    definition.innerHTML = `<h3>${perfectTense}</h3>`;
}

// Function to check the user's answer
function checkAnswer() {
    const userAnswer = document.getElementById('user-answer').value.trim().toLowerCase();
    const correctAnswer = verbData[currentVerbIndex].correctConjugation.toLowerCase();
    const feedback = document.getElementById('feedback');

    if (userAnswer === correctAnswer) {
        feedback.innerText = 'Correct! Great job!';
        feedback.classList.remove('incorrect');
        feedback.classList.add('correct');
    } else {
        feedback.innerText = `Incorrect. The correct answer is: ${correctAnswer}`;
        feedback.classList.remove('correct');
        feedback.classList.add('incorrect');
    }
}

checkButton.addEventListener('click', function() {
    definition.style.display = 'block';
    console.log("you clicked the check button")
})

nextButton.addEventListener('click', function() {
    getRandomWord();
    definition.style.display = 'none'; 
})

document.getElementById('check-answer').addEventListener('click', checkAnswer);

// getRandonWord()