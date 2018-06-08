var wins = 0;

var counter = 9;

var answer = "";

var possible = "abcdefghijklmnopqrstuvwxyz";

var guess = "";

var guessPrint = [];

var answerPrint = [];

var losses = 0;

function makeId() {

    answer += possible.charAt(Math.floor(Math.random() * 26));
}

function reset() {
    guessPrint = [];
    answer = "";
    counter = 9;
    makeId()
    console.log(answer)
}

    makeId();

    console.log(answer);

    

    document.onkeyup = function (event) {
    guess = event.key;
    console.log(event.key)
    
    if (answer == guess) {
        wins++;
        document.getElementById("win").innerHTML="Wins: " + wins;

        answerPrint.push(guess);

        alert("You win this round! Press any ENTER to keep playing");

        document.getElementById("winning-letters").innerHTML="Winning Letters: " + answerPrint + " ";

        reset();

    } else if (answer != guess) {
        
        counter--;
        
        document.getElementById("count").innerHTML="Guesses Left: " + counter;
        
        guessPrint.push(guess);
        
        document.getElementById("guesses").innerHTML="Letters Guessed: " + guessPrint;
        
        console.log(guessPrint);
        
        console.log(counter);
        if (counter == 0) {
        
            alert("You lose this round! Press any ENTER to keep playing");
        
            losses++;
        
            document.getElementById("lose").innerHTML="Losses:" + losses +" ";
        
            reset();
        }
    }

    console.log(wins);
    console.log(losses);
}

