# unit-4-game
Data to track: 
wins
losses 
user total points
goal score
value assigned to each crystal

1) assign a random number to each crystal
    - generate a random number as the goal (in between 19-120)
    - random number for each crystal = 1-12 (for that round)
2) if a crystal is pressed, the point total is shown on top of the crystal
    - the point total for that crystal is added to the users total points
3) if the user point total goes over the goal score, you lose
    - restart game/all variables, losses ++
4) if the user hits the exact point total, alert YOU WIN! 
    - restart game/all variables, wins ++
5) if the user is under the goal score, do nothing
