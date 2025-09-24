// console.log("jai Shree Ram");
function* numberGenerator(){
   yield 1
   yield 2
   yield 3
}
let gen=numberGenerator()
// console.log(gen);//Object [Generator] {}
console.log(gen.next().value);//1
console.log(gen.next().value);//2
console.log(gen.next().value);//3



