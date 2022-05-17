const squares = document.querySelectorAll('.square')
// const mole = document.querySelector('.mole')
const timeLeft = document.querySelector('#time-left')
const score = document.querySelector('#score')

let result = 0;
let MolePosition
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
    // add the mole class to random selected square
    randomSquare.classList.add('mole')
    // store the id of the square with the mole
    MolePosition = randomSquare.id
}
// add event listener to all squares so that we know if we hit a square with the mole
squares.forEach(square =>{
    square.addEventListener('mousedown', () => {
        if(square.id == MolePosition){
            result++
            score.textContent = result 
        }
    })
})

// move the Mole randonly based on the give miliseconds
function moveMole(){
    timeId = setInterval(randomSquare, 1000)
}
// call the moveMole function
moveMole()

// count down timer function that ends game
function countDown(){
    // reduce the time by 1 
    currentTime--
    timeLeft.textContent = currentTime
    // end Game if timer elapses
    if(currentTime == 0){
        clearInterval(countDownTimerId)
        clearInterval(timeId)
        alert('Game Over , your score is ' + result)
    }
}


let countDownTimerId = setInterval(countDown, 1000)