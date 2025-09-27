//  console.log("jai shree ram"); 
function outer(){
    let counter=4
    return function(){
        counter++;
        return counter;
    };
}
let increment=outer();
console.log(increment());

// example
function out(){
    let name ="vivek";
   function inn(){
      console.log(`my name is ${name}`); 
   }
   return inn;
}
let greet=out()
console.log(greet());

///Closure with Multiple Function

function createBank() {
  let balance = 1000;

  return {
    deposit: (amount) => balance += amount,
    withdraw: (amount) => balance -= amount,
    getBalance: () => balance
  };
}

let account = createBank();
console.log(account.deposit(500));  // 1500
console.log(account.withdraw(200)); // 1300
console.log(account.getBalance());  // 1300




    