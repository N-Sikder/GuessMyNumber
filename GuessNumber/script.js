//Take a random number between 1-20 !!
let randomNumber = Math.floor(Math.random() * 20) + 1;
console.log(randomNumber);

//Reload using play again button
let playAgain = document.querySelector('.btn.again').addEventListener('click', ()=>{
    location.reload();
    // Reset the input value to empty string
     document.getElementsByClassName('guess')[0].value = "";
})

//Counter value intiated outside the EventListener for implementing Closure
let count = 0;
let score = 0;

//HighScore value initiated outside the EventListener for implementing Closure
let highScore = sessionStorage.getItem('highScore') || 0;
document.getElementsByClassName('highscore')[0].innerHTML = highScore;

//Guess submit button
let guessNumber = document.getElementsByClassName("btn")[1];
guessNumber.addEventListener('click', ()=>{
    // Capture the current value of the input field
    let inputNum = parseInt(document.getElementsByClassName('guess')[0].value);
    console.log(inputNum);
    if(isNaN(inputNum) || inputNum> 20 || inputNum< 1){
        alert(`Please Enter a valid number between 1-20.`);
        document.getElementsByClassName('guess')[0].value = ""
        return;
    }

    //The decrementing scoring system that dosen't go below zero.
    count++;
    score = 21-count;
    if(score >= 0 ){
        document.getElementsByClassName("score")[0].innerHTML = score;
    }
    else{
        document.getElementsByClassName("score")[0].innerHTML = 0;
    }
    
    
    
    //Display message to indicate the random number
    if(inputNum > randomNumber){
        document.getElementsByClassName('message')[0].innerHTML = "Number is too high!";
        
    }
    else if(inputNum < randomNumber){
        document.getElementsByClassName('message')[0].innerHTML = "Number is too low!";
    }
    else{
        document.getElementsByClassName('message')[0].innerHTML = "You Guessed it!";

        //Display the number in center box
        document.getElementsByClassName('number')[0].innerHTML = inputNum;
       
       //Highscore check and implement
       if(score > highScore ){
        highScore = score;
        document.getElementsByClassName('highscore')[0].innerHTML = highScore;
        sessionStorage.setItem('highScore', highScore);
       }
       
        // Change the background color(Optional) & Added just make make it FANCY!
        var body = document.body;

        // Define colors to toggle between
        var color1 = "black";
        var color2 = "maroon";

        // Initialize a variable to keep track of the current color
        var currentColor = color1;

        // Function to toggle the background color
        function toggleBackgroundColor() {
            // Toggle between the two colors
            if (currentColor === color1) {
                body.style.backgroundColor = color2;
                currentColor = color2;
            } else {
                body.style.backgroundColor = color1;
                currentColor = color1;
            }
        }
            // Call the toggle function every 500 milliseconds (half a second)
            var blinkInterval = setInterval(toggleBackgroundColor, 500); 

    }
});
