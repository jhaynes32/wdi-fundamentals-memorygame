
const cards = ["queen", "queen", "king", "king"]
const cardsInPlay = []


function checkForMatch() {
if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};

function flipCard(cardID) {
	if (cardsInPlay.length === 2 && (cardsInPlay[0]) === (cardsInPlay[1])) {
	alert("You found a match!");
} else { 
	alert("Sorry, try again."); 

console.log("User flipped" + cards[cardID]);


}
};

flipCard(0); 
flipCard(2);
checkForMatch();

var cardID = []
cardsInPlay.push(cards[cardID]);

