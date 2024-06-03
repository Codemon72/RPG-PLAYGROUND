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

// generate a random number between 0 and max
function randomValue(max) {
  return Math.floor(Math.random() * (max + 1))
}

// SPECIFIC FUNCTIONS //
function getCareer() {
  careerDiv.innerHTML = rollCareer()
}

// CHARACTER BUILDING BLOCKS //
function rollCareer() {
  pcCareers = []
  maxTotalRanks = 4
  while (pcCareers.length < 4) {
    let tempCareer = randomMath(careersArray)
    console.log(tempCareer)
    if (!pcCareers.some((career) => career.name === tempCareer)) {
      // only runs if career.name not already in array

      let tempValue
      if (pcCareers.length === 3) {
        // if this is the last career, assign the remaining ranks to it
        tempValue = maxTotalRanks
      } else {
        // assign a random value from 0 to remaining ranks to the career
        tempValue = randomValue(maxTotalRanks)
      }

      pcCareers.push({ name: tempCareer, rank: tempValue })
      maxTotalRanks = maxTotalRanks - tempValue
    }
  }
  return pcCareers.map((career) => `${career.name} (${career.rank})`).join(', ')
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
