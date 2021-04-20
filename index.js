let randomNumber1 = Math.floor(Math.random() * 6) + 1;  //numbers 1-6.

let randomDiceImage = "dice" + randomNumber1 + ".png"; //from dice1.png to dice6.png

let randomImageSource = "images/" + randomDiceImage;

let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src" , randomImageSource);


let randomNumber2 = Math.floor(Math.random() * 6) + 1;  //numbers 1-6.

let randomImageSource2 = "images/dice" + randomNumber2 + ".png";

document.querySelectorAll ("img")[1].setAttribute("src" , randomImageSource2);

// image2.setAttribute("src", randomImageSource); 

if  (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "✅Player 1 Wins";
}
else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins✅";
}
else  {
    document.querySelector("h1").innerHTML = "Draw";
}