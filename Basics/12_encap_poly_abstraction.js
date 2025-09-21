// console.log("jai shree Ram");
 // Encapsulation=>restict direct acces to the object data

class BankAccount{
   #balance=45454; // # restrict direct access
   deposit(amount){
    this.#balance+=amount
    return this.#balance  // without this code is working
   }
   getBalnce(){
    return `$ ${this.#balance}`
   }
}
let bal=new BankAccount()
console.log(bal.getBalnce());
bal.deposit(5000)//value chnaged  5000 add 
console.log(bal.getBalnce());


//Abstraction
//Hides implementation details and shows only functionality

class CoffeMAchine{
    start(){
     //call DB
     //filter value   
     return`Starting the machine`
    }
    brewcoffe(){
        //complex calculation
        return `Brewing cofee`
    }
    pressStart(){
     let msg1=   this.start()
      let msg2=  this.brewcoffe()
      return`${msg1}and ${msg2}`
    }
}
let myMachine=new CoffeMAchine()
// console.log(myMachine.start());
// console.log(myMachine.brewcoffe());
console.log(myMachine.pressStart());


//polymorphism
//Polymorphism literally means “many forms”.
//In programming, it allows objects of different classes to be treated through the same interface,
//  or the same method name to behave differently based on context.

class Bird{
    fly(){
        return`iam flying..`
    }
}
class Penguin extends Bird{
    fly(){
        return`penguin can not fly`
    }
}
 let bird= new Bird()
 console.log(bird.fly());
 let pengu=new Penguin()
 console.log(pengu.fly());
 
 // Static method=> method only access by calculator class

 class Calculator{
    static add(a,b){
        return a+b
    }
 }
//  let cal= new Calculator()
//  console.log(cal.add(2,3));
console.log(Calculator.add(4,55)); // we acces directly we dont need new keyword

//Getters and setters
/*What are get and set?

get → Used to access a property.

set → Used to modify a property.

They allow you to control how a property is read or written.

Helps in encapsulation, as internal data can be validated or processed before exposing it.*/
class Person {
  #name; // private field

  constructor(name) {
    this.#name = name;
  }

  // Getter
  get name() {
    return this.#name.toUpperCase();  // process before returning
  }

  // Setter
  set name(newName) {
    if(newName.length < 3) {
      console.log("Name is too short!");
    } else {
      this.#name = newName;
    }
  }
}

let p = new Person("Rahul");
console.log(p.name); // RAHUL (getter transforms it to uppercase)

p.name = "Al";       // Name is too short! (setter validates)
p.name = "Amit";     
console.log(p.name); // AMIT


 
 
class Employee{
    constructor(name,salary,work){
         this.name=name
         this._salary=salary
         this.wor=work
    }
    get salary(){
        return this._salary
    }
    set salary(value){

    }
}
let emp= new Employee("Alice",5555,"lock")
console.log(emp.salary );

/


