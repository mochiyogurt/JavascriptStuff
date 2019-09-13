const team = {
    _players: [
      {firstName: "Kyle", lastName: "Chung", age: 22},
      {firstName: "Marcus", lastName: "Smith", age: 21},
      {firstName: "Philip", lastName: "Wilson", age: 20}
    ],
    _games: [
      {opponent: 'Wolves', teamPoints: 42, opponentPoints: 27},
      {opponent: 'Lions', teamPoints: 37, opponentPoints: 39},
     {opponent: 'Bears', teamPoints: 38, opponentPoints: 35}
    ],
    
    get players(){
      return this._players;
    },
    
    get games(){
      return this._games;
    },
    
    addPlayer(firstName, lastName, age){
      let player = {
        firstName: firstName,
        lastName: lastName,
        age: age
      }
      
      this.players.push(player);
    },
    addGame(opponent, teamPoints, opponentPoints){
      let game = {
        opponent: opponent,
        teamPoints: teamPoints,
        opponentPoints: opponentPoints
      }
      
      this.games.push(game);
    }
  };
  
  team.addPlayer('Steph', 'Curry', 28);
  team.addPlayer('Lisa', 'Leslie', 44);
  team.addPlayer('Bugs', 'Bunny', 76);
  console.log(team.players);
  
  
  team.addGame('Wizards', 55, 48);
  team.addGame('Thunder', 35, 41);
  team.addGame('Winds', 30, 29);
  console.log(team.games);