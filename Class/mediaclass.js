class Media{
    constructor(title){
      this._title=title;
      this._isCheckedOut=false;
      this._ratings=[];
    }
    
    get title(){
      return this._title;
    }
    
    get isCheckedOut(){
      return this._isCheckedOut;
    }
    
    get ratings(){
      return this._ratings;
    }
    
    set isCheckedOut(value){
      this._isCheckedOut=value;
    }
    
    toggleCheckOutStatus(){
      this._isCheckedOut = !this._isCheckedOut;
    }
    
    getAverageRating(){
      let avg;
      let ratingsSum = this.ratings.reduce((accumulator, rating) => accumulator + rating);
        avg = ratingsSum/this._ratings.length;
      return avg;
    }
    
    addRating(rating)
    {
       this._ratings.push(rating);
    }
  }
  
  class Book extends Media{
    constructor(title,author, pages){
      super(title);
      this._author=author;
      this._pages=pages;
    }
    
    get author(){
      return this._author;
    }
    
    get pages(){
      return this._pages;
    }
    
  }
  
  class Movie extends Media{
    constructor(title, director){
      super(title);
      this._director=director;
      this._runTime=0;
    }
    
    get director(){
      return this._director;
    }
    
    get runTime(){
      return this._runTime;
    }
  }
  
  class CD extends Media{
    constructor(title, artist){
      super(title);
      this._artist=artist;
      this._songs=[];
    }
    
    get artist(){
      return this._artist;
    }
    
    get songs(){
      return this._songs;
    }
  }
  
  const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544);
  
  console.log(historyOfEverything.isCheckedOut);
  
  historyOfEverything.addRating(4);
  historyOfEverything.addRating(5);
  historyOfEverything.addRating(5);
  console.log(historyOfEverything.getAverageRating());
  
  const speed = new Movie('Jan de Bont', 'Speed', 116);
  speed.toggleCheckOutStatus();
  console.log(speed.isCheckedOut);
  speed.addRating(1);
  speed.addRating(1);
  speed.addRating(5);
  console.log(speed.getAverageRating());