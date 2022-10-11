



// Create a function that determines the computer choice.  It should return one of the three values: 'rock', 'paper', or 'scissors'
function computerChoice() {
    let computerChoiceNumber = Math.ceil(Math.random()*3);
    if(computerChoiceNumber == 1){
        return "scissors";
    }else if(computerChoiceNumber == 2){
    }else{
        return "rock";
    }
};


/* Create a function that compares the user's selection to the computer's selection.  It should then output the opponent's choice to #computerSelection and display who is the winner.

 */
function compare(me, opponent) {
// defining the variables of me and opponent //

document.querySelector('#computerSelection').innerText = opponent;

// if they are equal they tie //
if(me===opponent){
    return 'Tie';
} else if(me === 'rock') {

// if I am rock - what happens if opponent chooses paper or scissors //
    if (opponent === 'paper') {
        return 'My rock lost to paper :(';
    } else if (opponent === 'scissors') {
        return 'My rock crushed scissors! >:)';
    }

    // if I am paper - what happens if opponent chooses rock or scissors //
    } else if (me === 'paper') {

        if (opponent === 'rock') {
            return 'My paper beat rock :)';
        } else if (opponent === 'scissors') {
            return 'My paper got cut by scissors!';
        }
    // if I am scissors - what happens if opponent chooses rock or paper //    
    } else if (me === 'scissors') {
        if (opponent === 'rock') {
            return 'My scissor go crushed!';
        }
    }
    };




    // Bind a click event onto each of the three buttons.  It should run the compare function and then put the result to the #decsision id in the html

document.querySelector("#scissors").addEventListener('click',function(e){
    e.preventDefault();
    let computerPlayerChoice = computerChoice();
    compare("scissors", computerPlayerChoice)

})
