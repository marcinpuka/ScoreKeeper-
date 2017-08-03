// --- Result section --- //
var spanOne = document.getElementById('spanOne');
var spanTwo = document.getElementById('spanTwo');


// --- Playing to section --- // 
var spanPlayTo = document.getElementById('spanPlayingTo');

// --- Select section --- // 

var select = document.getElementById("select");
select.addEventListener("change", function(){
    var setPlay = select.selectedIndex + 1;
    spanPlayTo.textContent = setPlay;
});

// --- Buttons section --- //

var btnOne = document.getElementById('btnOne');
var btnTwo = document.getElementsByClassName('btnTwo')[0];
var btnReset = document.getElementsByClassName('btnReset')[0];

// --- Event Listeners --- //

var playerOnePoints = 0; 
var playerTwoPoints = 0;

btnOne.addEventListener("click", function(){
    if (playerOnePoints <= spanPlayTo.innerHTML-1 && playerTwoPoints <= spanPlayTo.innerHTML-1) {
    playerOnePoints++;  
    spanOne.textContent = playerOnePoints;
    
}});

btnTwo.addEventListener("click", function(){
    if (playerTwoPoints <= spanPlayTo.innerHTML-1 && playerOnePoints <= spanPlayTo.innerHTML-1) {
    playerTwoPoints++;  
    spanTwo.textContent = playerTwoPoints;
    
}});

btnReset.addEventListener("click", function(){
    playerOnePoints = 0;
    spanOne.textContent = playerOnePoints;
    playerTwoPoints = 0;
    spanTwo.textContent = playerTwoPoints;
});

