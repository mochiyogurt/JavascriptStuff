const menu = {
    _courses : {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers(){
      return this._courses.appetizers;
    },
    get mains(){
      return this._courses.mains;
    },
    get desserts(){
      return this._courses.desserts;
    },
    set appetizers(appetizer){
      this._courses.appetizers = appetizers;
    },
    set mains(main){
      this._courses.mains = mains;
    },
    set desserts(dessert){
      this._courses.desserts = desserts;
    },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      };
    },
    addDishToCourse(courseName, dishName, dishPrice){
      const dish ={
        name: dishName,
        price: dishPrice
      }
      return this._courses[courseName].push(dish);
      
    },
    getRandomDishFromCourse(courseName){
      const dishes = this.courses[courseName];
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex];
    },
    generateRandomMeal(){
      const appetizer=this.getRandomDishFromCourse('appetizers');
      const main=this.getRandomDishFromCourse('mains');
      const dessert=this.getRandomDishFromCourse('desserts');
      const totalPrice = appetizer.price + main.price + dessert.price;
      return `Your meal is ${appetizer.name}, ${main.name}, and ${dessert.name} and the total price is ${totalPrice}`;
    }
};
  
  menu.addDishToCourse('appetizers', 'salad', 4.00);
  menu.addDishToCourse('appetizers', 'wings', 5.00);
  menu.addDishToCourse('appetizers', 'nachos', 4.50);
  menu.addDishToCourse('mains', 'steak', 22.00);
  menu.addDishToCourse('mains', 'salmon', 21.00);
  menu.addDishToCourse('mains', 'chicken', 19.50);
  menu.addDishToCourse('desserts', 'creme brulee', 5.00);
  menu.addDishToCourse('desserts', 'tiramisu', 4.00);
  menu.addDishToCourse('desserts', 'ice cream', 3.50);
  
  const meal = menu.generateRandomMeal();
  console.log(meal);

  console.log(menu._courses.mains);