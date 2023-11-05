 // Fetching Data From User
 let rock = document.getElementById('rock')
 let paper = document.getElementById('paper')
 let scissors = document.getElementById('scissors')
 let result = document.getElementById('display_result')
 let Comp_Choice = document.getElementById('Computer_Choice')
 let score = document.getElementById('display_score')
 let value = 0

 // Check Clicks and Decide whether User Wins or Not
 rock.onclick = () => {
     let computer = Math.floor(Math.random() * 3)
     if (computer == 0) {
         Comp_Choice.innerText = 'Computer Choice is also Rock'
         result.innerText = 'Draw'
         score.innerText = `Your Score: ${value}`
     } else if (computer == 1) {
         Comp_Choice.innerText = 'Computer Choice is Paper'
         result.innerText = 'You Lose'
         value--
         score.innerText = `Your Score: ${value}`
     } else {
         Comp_Choice.innerText = 'Computer Choice is Scissors'
         result.innerText = 'You Win'
         value++
         score.innerText = `Your Score: ${value}`
     }
 }
 paper.onclick = () => {
     let computer = Math.floor(Math.random() * 3)
     if (computer == 1) {
         Comp_Choice.innerText = 'Computer Choice is also Paper'
         result.innerText = 'Draw'
         score.innerText = `Your Score: ${value}`
     } else if (computer == 0) {
         Comp_Choice.innerText = 'Computer Choice is Rock'
         result.innerText = 'You Win'
         value++
         score.innerText = `Your Score: ${value}`
     } else {
         Comp_Choice.innerText = 'Computer Choice is Scissors'
         result.innerText = 'You Lose'
         value--
         score.innerText = `Your Score: ${value}`
     }
 }
 scissors.onclick = () => {
     let computer = Math.floor(Math.random() * 3)
     if (computer == 1) {
         Comp_Choice.innerText = 'Computer Choice is Paper'
         result.innerText = 'You Win'
         value++
         score.innerText = `Your Score: ${value}`
     } else if (computer == 0) {
         Comp_Choice.innerText = 'Computer Choice is Rock'
         result.innerText = 'You Lose'
         value--
         score.innerText = `Your Score: ${value}`
     } else {
         Comp_Choice.innerText = 'Computer Choice is also Scissors'
         result.innerText = 'Draw'
         score.innerText = `Your Score: ${value}`
     }
 }

 // Restart the Game
 function ClearValues() {
     value = 0
     score.innerText = ''
     Comp_Choice.innerText = ''
     result.innerText = ''
 }