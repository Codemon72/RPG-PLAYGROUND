// DOCUMENT REFERENCE VARIABLES //
const possibleChoices = document.querySelectorAll('button')
const attributesDiv = document.getElementById('attributes')
const careersDiv = document.getElementById('careers')

// ALL TABLES //
const attributesArray = ['Strength', 'Agility', 'Mind', 'Appeal']

const careersArray = [
  'Alchemist',
  'Assassin',
  'Barbarian',
  'Blacksmith',
  'Gladiator',
  'Hunter',
  'Magician',
  'Merchant',
  'Mercenary',
  'Minstrel',
  'Noble',
  'Physician',
  'Pilot',
  'Pirate',
  'Priest/Druid',
  'Serving Wench',
  'Scribe',
  'Slave',
  'Soldier',
  'Thief',
  'Torturer',
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
function getAttributes() {
  attributesDiv.innerHTML = rollAttributes()
}
function getCareers() {
  careersDiv.innerHTML = rollCareers()
}

// CHARACTER BUILDING BLOCKS //
function rollAttributes() {
  let pcAttributes = attributesArray.map((attr) => ({
    attribute: attr,
    level: 0,
  }))
  let currentTotal = 0

  while (currentTotal < 4) {
    let tempAttribute = randomMath(pcAttributes)
    if (tempAttribute.level < 3) {
      tempAttribute.level += 1
      currentTotal += 1
    }
  }

  return pcAttributes
    .map((attribute) => `${attribute.attribute} (${attribute.level})`)
    .join(', ')
}

function rollCareers() {
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
  console.log(pcCareers)
  return pcCareers.map((career) => `${career.name} (${career.rank})`).join(', ')
}
// [{attribute: 'Strength', level: 0},{attribute:  'Agility', level: 0}, {attribute: 'Mind', level: 0}, {attribute: 'Appeal', level: 0}]

// BUTTON FUNCTIONS //
possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    if (userChoice === 'attributes-btn') {
      getAttributes()
    }
    if (userChoice === 'career-btn') {
      getCareers()
    }
    console.log('User pressed btn: ' + userChoice)
  })
)
