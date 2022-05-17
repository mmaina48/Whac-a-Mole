// get all the squares
const squares = document.querySelectorAll('.square');
// set timeLeft value
let timeLeft = 30;
// set start score value
let score = 0; 

let moveMolerId;
let countDownId;

// A function to randomly move throughout the grid
function MoveMole(){
    for(i=0; i<squares.length; i++){
        squares[i].classList.remove("mole")
    }
    let randomSelectedSquare = squares[Math.floor(Math.random()* 12)]
    randomSelectedSquare.classList.add('mole') 
}

// callback function to addEventListener and removeEventListener methods
function addScore(event){
    let clickedSquare = event.target
    if (clickedSquare.classList.contains('mole') === true){
        score++
        document.getElementById('resuit').innerHTML = score;
    }
}

// A function to add event listener to all the squares
function addListener(){
    squares.forEach(square => {
        square.addEventListener('click', addScore) //callback 
    })
}
// call addListener
addListener()

// A function to stop score count
function stopScoreCount(){
    squares.forEach(square =>{
        square.removeEventListener('click', addScore)
    })
}
// A function to count down time
function countDown() {
  timeLeft--
  document.getElementById('time-left').innerHTML = timeLeft;
  if (timeLeft === 0){
      stopCountDown()
      endGame() 
  }
}

// A fuction to call moveMove fxn at a set time interval
function startGame(){
    moveMolerId = setInterval(MoveMole, 1000) 
}

// A fuction to call countDown fxn at a set time interval
function startCountDown(){
    countDownId = setInterval(countDown, 1000)
}

// A function to stop timer count down
function stopCountDown(){
    clearInterval(countDownId)
}

// A function to stop the mole from moving
function stopMole(){
    clearInterval(moveMolerId)
}

// A function to pause game
function pauseGame(){
    stopMole()
    stopCountDown()
    stopScoreCount()
}

// A function to end the game
function endGame(){
    stopMole()
    stopCountDown()
    stopScoreCount()
    // timeLeft = 30;
    // score = 0;
    document.getElementById('time-left').innerHTML = timeLeft;
    document.getElementById('resuit').innerHTML = score;
    document.getElementById('time-left_1').innerHTML = timeLeft;
    document.getElementById('resuit_1').innerHTML = score;
    showResults();
}

function openModal(){
    document.getElementById('id01').style.display='block'
}

function closeModal(){
    document.getElementById('id01').style.display='none'
}

function resetScoreAndTimer(){
    timeLeft = 30;
    score = 0;
    document.getElementById('time-left').innerHTML = timeLeft;
    document.getElementById('resuit').innerHTML = score;
    document.getElementById('time-left_1').innerHTML = timeLeft;
    document.getElementById('resuit_1').innerHTML = score;
}


