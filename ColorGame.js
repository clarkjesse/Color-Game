// JavaScript source code
console.log("Connected");

var colors = [];
var numSquares = 6;
var pickedColor;
var squares = document.querySelectorAll(".square");
var h1 = document.querySelector("h1");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
    //mode buttons event listeners
    for (var i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener("click",
            function() {
                modeButtons[0].classList.remove("selected");
                modeButtons[1].classList.remove("selected");
                this.classList.add("selected");
                if (this.textContent === "Easy" ? numSquares = 3 : numSquares = 6);
                reset();
            });
    }
    
    for (var i = 0; i < squares.length; i++) {
        //add click listeners to squares
        squares[i].addEventListener("click",
            function() {
                //grab color of clicked square
                var clickedColor = this.style.backgroundColor;
                //compare color to pickedColor
                if (clickedColor === pickedColor) {
                    messageDisplay.textContent = "Correct!";
                    resetButton.textContent = "Play Again?";
                    changeColors(clickedColor);
                    h1.style.backgroundColor = clickedColor;
                } else {
                    this.style.backgroundColor = "#232323";
                    messageDisplay.textContent = "Try Again!";
                }
            });
    };
    reset();
}

function reset() {
    colors = generateRandomColors(numSquares);
    //pick a new random color from array
    pickedColor = pickColor();
    //change colorDisplay to match picked color
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Colors";

    messageDisplay.textContent = "";
    //change colors of squares
    for (var i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
}

function changeColors(color) {
    //loop through all squares
    for(var i = 0; i < squares.length; i++) {
        //change each color to match given color
        squares[i].style.backgroundColor = color;
        console.log(color);
    };
};

function pickColor(color) {
    var random = Math.floor(Math.random() * colors.length);
    console.log(random);
    return colors[random];
};

function generateRandomColors(num) {
    //make array
    var arr = [];
    //repeat num times
    for (i = 0; i < num; i++) {
        //get random color and push into arr
        arr.push(randomColor());
    }
    //return array
    return arr;
};

function randomColor() {
    //pick "red" from 0 - 255;
   var r =  Math.floor(Math.random() * 256);
    //pick "green" from 0 - 255;
   var g = Math.floor(Math.random() * 256);
    //pick "blue" from 0 - 255;
   var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
};

resetButton.addEventListener("click", function() {
    reset();
});
