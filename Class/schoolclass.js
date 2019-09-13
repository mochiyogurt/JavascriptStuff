class School{
    constructor(name, level, numberOfStudents){
          this._name=name;
      this._level=level;
      this._numberOfStudents=numberOfStudents;
    }
    
    get name(){
      return this._name;
    }
    
    get level(){
      return this._level;
    }
    
    get numberOfStudents(){
      return this._numberOfStudents;
    }
    
    set numberOfStudents(value){
      if(value.isNaN())
      {
           console.log("Invalid input: numberOfStudents must be set to a Number."); 
      }
      else
        {
          this._numberOfStudents = value;
        }
    }
    
    quickFacts(){
      return this._name +" educates "+this._numberOfStudents+" students at the "+this._level+" school level.";
    }
    
    static pickSubstituteTeacher(substituteTeachers)
   {
     const index= Math.floor(Math.random()*substituteTeachers.length);
     
     return substituteTeachers[index];
   }
  }
  
  class Primary extends School{
    constructor(name, numberOfStudents, pickupPolicy){
      super(name, 'primary', numberOfStudents);
      this._pickupPolicy=pickupPolicy;
    }
  }
  
  class Middle extends School{
    constructor(name, numberOfStudents){
      super(name, 'middle', numberofStudents);
      }
  }
  
  class High extends School{
    constructor(name, numberOfStudents, sportsTeams){
      super(name, 'high', numberOfStudents);
      this._sportsTeams=sportsTeams;
      }
    
    get sportsTeams(){
      return this._sportsTeams;
    }
    
    set sportsTeams(value){
      this._sportsTeams=value;
    }
  }
  
  const lorraineHansbury = new Primary('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');
  
  console.log(lorraineHansbury.quickFacts());
  
  console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));
  
  const alSmith = new High('AL E.Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field']);
  
  console.log(alSmith.sportsTeams);