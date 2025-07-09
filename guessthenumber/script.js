

let score = document.querySelector('#spoint');
let Remaining = document.querySelector("#tremain");
let hint = document.querySelector("#hint");
let p = document.querySelector("#listOfguesses");
let userGuess = document.querySelector("#userGuess");

let points = 0;
let rattemps = 10;
let Won = false;

let Numb = Math.floor(Math.random() * 100 + 1);

function generateNumber(){
    Numb = Math.floor(Math.random() * 100 + 1);
}

function gameWon(){
    Won = true;
    alert(`🎉 Congratulations! You Won! 🏆 .The number was ${Numb}`);
    userGuess.value="";
    points +=100;
    endGame();
}   

function endGame(){
    generateNumber();
    userGuess.value="";
    hint.innerText="";
    p.innerHTML=`<span>No guesses yet</span>`;
    
    if(!Won){
        alert('💀 Game Over!');
        if(points<50) points=0;
        else points-=50
    }
    rattemps=10;
    Won=false;

    score.innerText=`${points}`
    Remaining.innerText=`${rattemps}`
}

function giveHint(guess){
    const diff = guess - Numb;
    if (diff >= 20) {
        hint.innerText = "Too High";
    } else if (diff <= -20) {
        hint.innerText = "Too Low";
    } else if (diff > 0) {
        hint.innerText = "Bit Lower";
    } else {
        hint.innerText = "Bit Higher";
    }
}


function someChanges(guess){
    //add guesses
    if(rattemps==9){
        p.innerHTML="";
    }
    let span = document.createElement("span");
    span.innerText=`${guess} `;
    p.appendChild(span);


    //earse the entry
    userGuess.value="";

    //hint
    giveHint(guess);

    //
    Remaining.innerText=`${rattemps}`;
}

function validateGuess(guess){
    rattemps--;
    if(guess == Numb){
        gameWon();
        return;
    }
    if(rattemps==0){
        endGame();
    }
    else{
        someChanges(guess);
    }
}


function checkGuess(){
    let guess = Number(userGuess.value);
    if(guess<1 || guess > 100){
        alert("Number must be with in the range 1 - 100");
        userGuess.value="";
        return;
    }
    validateGuess(guess);
}
