//These are codes in jsc
//write above each coding line on what it does
//self explanatory, it's a welcome message
function displayWelcome() {
    document.write("<h2> Welcome to the Galaxy Casino! Enjoy and Relax! <p>Where the luck is in the stars.</p> </h2>");
}
//it's telling the directions
function displayInstructions() {
    document.write("<br/><p> Roll the dice to play and win! </p> <p> Refresh to roll the dice. </p><br/><br/>");
}
//telling dice to pick random number 1-6
function play() {
    var die1 = Math.ceil(Math.random() * 6);

    var die2 = Math.ceil(Math.random() * 6);
//sum for the dice
    var sum = die1 + die2
//adds results
document.write("Die 1 = " + die1)
document.write("<br/>")
document.write("Die 2 =" + die2)
document.write("<br/>")
document.write("Sum =" + sum)
document.write("<br/>")
//won, lost, or tied
//user lost
if (sum == 7 || sum == 11) {
    document.write("You Lose Star Cadet!")
    document.write("<br/>")
}
//user won
else if (die1 == die2 && die1 % 2 == 0) {
    document.write("DOUBLES - you win Super Star!")
    document.write("<br/>")
}
//user tied
else {
    document.write("Roll Again Star Cadet.")
    document.write("<br/>")
}
}