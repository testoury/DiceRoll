var randomNum1 = Math.floor(Math.random() * 6) + 1 ;
var randomImg = "./images/dice"+ randomNum1 +".png";
var img1 = document.querySelectorAll("img")[0];
img1.setAttribute("src", randomImg);

var randomNum2 = Math.floor(Math.random() * 6) + 1 ;
var randomImg2 = "./images/dice"+ randomNum2 +".png";
var img2 = document.querySelectorAll("img")[1];
img2.setAttribute("src" , randomImg2);


function titleChange(dice1 , dice2 ){
    if(dice1 > dice2){
        return "PLayer 1 Wins"
    } else if(dice1 < dice2){
        return "Player 2 Wins"
    } else {
        return "its tie"
    }
}

var titleChan = document.querySelector("h1")
titleChan.innerHTML = titleChange(randomNum1 , randomNum2)