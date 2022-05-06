const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')

const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0;
let hitPosition
let currentTime = 10
let timeId = null

// create a function to randomly add a mole to the squares
function randomSquare() {
    // get all the squares and remove the mole class
    squares.forEach(square => {
      square.classList.remove('mole')
    })
    // select random squares 
    let randomSquare = squares[Math.floor(Math.random()*9)]
    // add the mole class 
    randomSquare.classList.add('mole')
    // store the id of the square with the mole
    hitPosition = randomSquare.id
}
// add event listener to all squares so that we know if we hit a square with the mole
squares.forEach(square =>{
    square.addEventListener('mousedown', () => {
        if(square.id == hitPosition){
            result++
            score.textContent = result 
        }
    })
})

// call the randomSqure at intervals inside moveMole function
function moveMole(){
    timeId = setInterval(randomSquare, 1000)
}

moveMole()

function countDown(){
    // reduce the time by 1 
    currentTime--
    timeLeft.textContent = currentTime

    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timeId)
        alert('Game Over , your score is ' + result)
    }
}

let countDownTimerId = setInterval(countDown, 1000)