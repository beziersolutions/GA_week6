//implement

/* 
.cards{
background-image:url(/path/to/back-of-card.png);
}


#king.selected,
king.matched{
background-image:url(/path/to/queen,png)
}
*/

/*
plays = 0

newgame
shufflecards
ismatch
handleendofgame
cheatgame


entry point
$('.cards').on('click', function(){

if 2 cards selected this new match
remove all selected classes
if not already matched
add selected class to this card
checkif it matches
increase number of plays
if matched cards = number of cards
game ended is true


on('click', newGame)
});
*/
cards.removeClass();
gamehasended = false;


var cards = $('.cards');
//shuffle(cards);

//entry point
$(function () {

    $('#start').click(function (event) {
        $('#game-cards').addClass('selected');
        console.log("class added");
    });

});

//load all and use each() jquery and append() 
/*
    function pickCard() {

        var cards = ["queen", "kinq"];

        var currentIndex = cards.length;
        var randomIndex;
        var temporaryValue;

        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }
        console.log("array value is " + array);
        return array;
    }



    function playGame(card1, card2) {


        if (car1 === card2) {
            console.log("match");
        } else {
            console.log("play again");
        }
    }*/