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
    $('#alert').text('');
    
    //determine win or loss
    function winnerWinner(){
            $('#alert').html('<h2>"Winner!"</h2>')
            wins++; 
            $('#winCount').text(wins);
            reset();
        }
            //adds the losses to the userTotal
        function youLose(){
            $('#alert').html('<h2>"LOSER!"</h2>')
            losses++;
            $('#lossCount').text(losses);
            reset()
        }
    
    // event lister for button click
    //add randomly assigned point value to userTotalPoints
    //determine if the user wins or loses
    $('.gem1').on('click', function(){
        userTotalPoints = eval(userTotalPoints) + eval(gem1);
        $('#totalPoints').text(userTotalPoints);
        determineWinLoss();
    })
    $('.gem2').on('click', function(){
        userTotalPoints = eval(userTotalPoints) + eval(gem2);
        $('#totalPoints').text(userTotalPoints);
        determineWinLoss();
    })
    $('.gem3').on('click', function(){
        userTotalPoints = eval(userTotalPoints) + eval(gem3);
        $('#totalPoints').text(userTotalPoints);
        determineWinLoss();
    })
    $('.gem4').on('click', function(){
        userTotalPoints = eval(userTotalPoints) + eval(gem4);
        $('#totalPoints').text(userTotalPoints);
        determineWinLoss();
    })

    //determines if the user wins or loses based off point total vs target score
    function determineWinLoss() {
        if (userTotalPoints == targetScore) {
            //if the user total hits the target, user is alerted that they win 
                winnerWinner();
            } else if (userTotalPoints > targetScore) {
                youLose();
            }
    }
    //reset all values
    //randomize all gem values again and set user total to 0
    function reset() {
        userTotalPoints = 0;
        targetScore = Math.floor(Math.random() * 101 + 19);
        $('#goalScore').text(targetScore);
        gem1 = Math.floor(Math.random()*11+1)
        gem2 = Math.floor(Math.random()*11+1)
        gem3 = Math.floor(Math.random()*11+1)
        gem4 = Math.floor(Math.random()*11+1)
        // $('#alert').html('');
    }
})
