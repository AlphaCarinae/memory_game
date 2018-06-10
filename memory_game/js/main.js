console.log("Up and running!");
var cards = [
{
	rank: "queen",
	suit: "hearts",
	cardImage: "images/queen-of-hearts.png"
},
{
	rank: "queen",
	suit: "diamonds",
	cardImage: "images/queen-of-diamonds.png"
},
{
	rank: "king",
	suit: "hearts",
	cardImage: "images/king-of-hearts.png"
},
{
	rank: "king",
	suit: "diamonds",
	cardImage: "images/king-of-diamonds.png"
},
];
var cardsInPlay = [];



if (cardsInPlay.length === 2) {

	if (cardOne === cardTwo) {
		alert ("You found a match!");
	}
	else { alert("Sorry Try again!")};
};

var checkForMatch = function() {
		if (cardsInPlay[0] === cardsInPlay[1]) {
		alert ("You found a match!");
	}
	else { alert("Sorry Try again!")};
	};

var flipcard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank);
	cardsInPlay.push(cards[cardId].rank);

	console.log("User flipped " + cards[cardId].cardImage);

	console.log("User flipped " + cards[cardId].suit);

	if (cardsInPlay.length === 2) {

	checkForMatch()
	};
};

flipcard(0);
flipcard(2);