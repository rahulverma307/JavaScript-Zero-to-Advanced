// console.log("jia Shree Ram");

const person={
    name:"hites",
    greet(){
     console.log(`hi  i am ${this.name}`); 
    }
}
// person.greet()
const greetFuncton=person.greet
greetFuncton()//hi  i am undefined because this lost context

const boundgreet=person.greet.bind({name:"john"})
boundgreet( )



