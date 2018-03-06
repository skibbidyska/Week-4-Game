var randomNumber = 0;
var userTotal = 0;
var wins = 0;
var losses = 0;

//sets up game
function initializeGame() {
    userTotal = 0;
    randomNumber = Math.floor(Math.random() * 102) + 19;
    $("#randomNumber").text(randomNumber);
    $("#wins").text(wins);
    $("#losses").text(losses);
    $("#userTotal").text(0);
    $(".gems").each(function () {
        $(this).attr("data-value", Math.floor(Math.random() * 12) + 1);
    });

};
//win condition
function win() {
    if (randomNumber === userTotal) {
        ++wins;
        initializeGame();
    }
};
//loss condition
function loss() {
    if (userTotal > randomNumber) {
        ++losses;
        initializeGame();
    }
};

initializeGame();

$(".gems").on("click", function () {
    var crystalValue = ($(this).attr("data-value"));
    crystalValue = parseInt(crystalValue);
    userTotal += crystalValue;
    $("#userTotal").text(userTotal);
    win();
    loss();
})


