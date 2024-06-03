// DOCUMENT REFERENCE VARIABLES //
const possibleChoices = document.querySelectorAll('button')
const careerDiv = document.getElementById('career')

// ALL TABLES //

const careersArray = [
  'Alchemist',
  'Assassin',
  'Barbarian',
  'Beastmaster',
  'Beggar',
  'Blacksmith',
  'Dancer',
  'Executioner',
  'Farmer',
  'Gladiator',
  'Hunter',
  'Magician',
  'Merchant',
  'Mercenary',
  'Minstrel',
  'Noble',
  'Physician',
  'Priest',
  'Sailor',
  'Scribe',
  'Sky-Pilot',
  'Slave',
  'Soldier',
  'Temptress',
  'Thief',
  'Worker',
]

// BASIC FUNCTIONS //

// pick a random element from an array
function randomMath(input) {
  return input[Math.floor(Math.random() * input.length)]
}

// SPECIFIC FUNCTIONS //

function getCareer() {
  careerDiv.innerHTML = rollCareer()
  // showStats();
}

// CHARACTER BUILDING BLOCKS //

function rollCareer() {
  pcCareers = []
  while (pcCareers.length < 4) {
    let tempCareer = randomMath(careersArray)
    console.log(tempCareer)
    if (!pcCareers.includes(tempCareer)) {
      //run only if value not already in array
      pcCareers.push(tempCareer)
    }
  }
  return pcCareers
}

// BUTTON FUNCTIONS //
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    if (userChoice === 'career-btn') {
      getCareer()
    }
    console.log('User pressed btn: ' + userChoice)
  })
)
