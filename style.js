//created variables to get box and div tags.
let playerText = document.getElementById('playerText')
let restartBtn = document.getElementById('restartBtn')
let boxes = Array.from(document.getElementsByClassName('box'))

//winning blocks backgrond color function
let winnerIndicator = getComputedStyle(document.body).getPropertyValue('--winning-blocks')

//functionality for game.
//created variable which will not allow X  to overwright O or O does not overwright X.
const O_Text = 'O'
const X_Text = 'X'
let currentPlayer = X_Text
let spaces = Array(9).fill(null)




//function to start game. 
const startGame = () => {
    boxes.forEach(box => box.addEventListener('click', boxClicked))
}
// we are adding x or o so boxes are not going to be empty
function boxClicked(e){
    const id = e.target.id

if (!spaces[id]){
    spaces[id] = currentPlayer
    e.target.innerText = currentPlayer

    if(playerHasWon() !==false){
        playerText = '${currentPlayer} has won!'
        let winning_blocks = playerHasWon()
        
        //adding background style on winning blocks 
        winning_blocks.map(box => boxes[box].style.backgroundColor = winnerIndicator)
        return
    }
    //this is if statment.
    currentPlayer = currentPlayer == X_Text ?  O_Text : X_Text
  }

}


//created winning combinations.




//with is function checking condition of winning combination (a can be 0,3,6; 0,1,2... b can be 1,4,7; 3,4,5...  c can be 2,5,8.. )
function playerHasWon() {
  for (const condition of winningCombos) {
    let [a, b, c] = condition

  if(spaces[a] &&(spaces[a] == spaces[b] && spaces[a] == spaces[c])){
     return [a,b,c]

  }
}

return false 
}



 restartBtn.addEventListener("click", restart)


//with this function it will clear space arrays in the boxes.
function restart() {
    spaces.fill(null)
        boxes.forEach(box => {
            box.innerText = ''
            box.style.backgroundColor=''

        })

        playerText = 'Tic Tac Toe'

        currentPlayer = X_Text
    }



startGame()
