$(document).ready(function() {
    //initial game data/variables
    // var gameData = {
    //     wins: 0,
    //     losses: 0,
    //     userTotalPoints: [],
    //     targetScore: randomNumGenerator(19, 120),
    //     gemValues: []
    // }
    var wins = 0;
    var losses = 0;
    var userTotalPoints = 0;
    var targetScore = Math.floor(Math.random() * 101 + 19);
    var gem1 = Math.floor(Math.random()*11+1)
    var gem2 = Math.floor(Math.random()*11+1)
    var gem3 = Math.floor(Math.random()*11+1)
    var gem4 = Math.floor(Math.random()*11+1)

    //set variables to html tag
    $('#goalScore').text(targetScore);
    $('#winCount').text(wins);
    $('#lossCount').text(losses);
    $('#totalPoints').text(userTotalPoints);
    
    //determine win or loss
    function winnerWinner(){
            $('#alert').text('You WIN!!!')
            wins++; 
            $('#winCount').text(wins);
            reset();
        }
            //adds the losses to the userTotal
        function youLose(){
            $('#alert').text('You LOSE!')
            losses++;
            $('#winCount').attr('.loser')
            $('#lossCount').text(losses);
            reset()
        }
    
    // event lister for button click
    $('.gem1').on('click', function(){
        userTotalPoints = eval(userTotalPoints) + eval(gem1);
        $('#totalPoints').text(userTotalPoints);
            if (userTotalPoints == targetScore) {
                winnerWinner();
            } else if (userTotalPoints > targetScore) {
                youLose();
            }
    })
    $('.gem2').on('click', function(){
        userTotalPoints = eval(userTotalPoints) + eval(gem2);
        $('#totalPoints').text(userTotalPoints);
            if (userTotalPoints == targetScore) {
                winnerWinner();
            } else if (userTotalPoints > targetScore) {
                youLose();
            }
    })
    $('.gem3').on('click', function(){
        userTotalPoints = eval(userTotalPoints) + eval(gem3);
        $('#totalPoints').text(userTotalPoints);
            if (userTotalPoints == targetScore) {
                winnerWinner();
            } else if (userTotalPoints > targetScore) {
                youLose();
            }
    })
    $('.gem4').on('click', function(){
        userTotalPoints = eval(userTotalPoints) + eval(gem4);
        $('#totalPoints').text(userTotalPoints);
            if (userTotalPoints == targetScore) {
                winnerWinner();
            } else if (userTotalPoints > targetScore) {
                youLose();
            }
    })

    //reset all values
    function reset() {
        userTotalPoints = 0;
        targetScore = Math.floor(Math.random() * 101 + 19);
        $('#goalScore').text(targetScore);
        gem1 = Math.floor(Math.random()*11+1)
        gem2 = Math.floor(Math.random()*11+1)
        gem3 = Math.floor(Math.random()*11+1)
        gem4 = Math.floor(Math.random()*11+1)
        $('#alert').text('');
    }
})
