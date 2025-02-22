const term = document.querySelector('.term');
const definition = document.querySelector('.definition')
const checkButton = document.querySelector('.check');
const nextButton = document.querySelector('.next');


words = {'zijn': 'ben geweest', 'hebben': 'heb gehad'}

data = Object.entries(words)

function getRandomWord() {
    randomTerm = data[Math.floor(Math.random() * data.length)]
    term.innerHTML = `<h3>${randomTerm[0]}</h3>`;
    definition.innerHTML = `<h3>${randomTerm[1]}</h3>`;
}

checkButton.addEventListener('click', function() {
    definition.style.display = 'block';
    console.log("you clicked the check button")
})

nextButton.addEventListener('click', function() {
    getRandomWord();
    definition.style.display = 'none'; 
})

// getRandonWord()