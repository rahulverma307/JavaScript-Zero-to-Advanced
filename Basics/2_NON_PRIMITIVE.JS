//NON-PRIMITIVE

 //1.OBJECTS
/*
 let username={
     firstname:"vivek",
     isLoggedin:true,
     "sports":"cricket"// for acces this we use different methods
 };

 username.firstname="Mr.R";//update value

 username.lastname="verma";//add new key and value

 console.log(username);//
console.log(username.lastname);//verma
  console.log(username['sports']);// use this for acces ="sports":"cricket"
 console.log(typeof username);//object
 

 //Object Property

 let student={
  name:"vivek",
  "class":"12th",
  Rollno:52,
  eamil:"rgg@gmail",
  "Marks grade":"80 a"
 }

 //1.Access
 console.log(student);
 console.log(student.Rollno);//52 dot method
 console.log(student["Marks grade"])// 80 a bracket method

 //2.add,update,delete
 student.branch="cse"//add
 student.Rollno=33//update
 delete student.class//delete

  console.log(student);
 console.log(student.Rollno);//33 dot method
 console.log(student["Marks grade"])// 80 a bracket method

 //3.important Methods

 console.log(Object.keys(student));//print only keys [ 'name', 'Rollno', 'eamil', 'Marks grade', 'branch' ]

 console.log(Object.values(student)); //print only value [ 'vivek', 33, 'rgg@gmail', '80 a', 'cse' ]

 console.log(Object.entries(student));//print all entries

 //4.spred method

 let obj1={
  1:"a",
  2:"b",
  3:"c"
 }
 let obj2={
  4:"d",
  5:"E",
  6:"f"
 }
 let merged={...obj1,...obj2}
 console.log(merged); //this combine several objects

 //5. check property existance

 console.log("Marks grade" in student);//true
 console.log(student.hasOwnProperty("branch"));//true
 



 //2.DATE

 let today=new Date()
 console.log(today);//2025-09-02T11:36:15.683Z

 // use  and practice all  properties

 console.log(today.getFullYear());//2
 console.log(today.getMonth());
 console.log(today.getDate());
 console.log(today.getDay());
 console.log(today.getHours());
 console.log(today.getTime());

 //formating

 console.log(today.toDateString());//Thu Sep 04 2025
 console.log(today.toISOString());//2025-09-04T09:24:02.037Z
 console.log(today.toLocaleDateString());// 9/4/2025
 
 //important question how to calculate two date

 let d1 = new Date("2025-09-01");
let d2 = new Date("2025-09-10");
let diff = (d2 - d1) / (1000 * 60 * 60 * 24);
console.log(diff); // 9

 

 //3.Arrays

 let name=["a","b","c",true,45]
 console.log(name);//[ 'a', 'b', 'c', true, 45 ]

 let anotherUser=["hitesh","luv",true]
 console.log(anotherUser[0]);//hitesh
 console.log(anotherUser[1]);//luv 
 console.log(anotherUser[2]);//TRUE

 let isValue =true//true always a =1
 console.log(isValue+1)//2

*/
let arr = ["a", "b", "c", true, 45];
console.log(arr.length); // 5

arr.push("x");   // add end [ 'a', 'b', 'c', true, 45, 'x' ]
//arr.pop();       // remove end
arr.unshift("z");// add start [ 'z', 'a', 'b', 'c', true, 45 ]
arr.shift();     // remove start
console.log(arr);

//tranformation

let nums = [1,2,3,4];
console.log(nums.map(x => x*2));      // [2,4,6,8]
console.log(nums.filter(x => x%2==0));// [2,4]
console.log(nums.reduce((a,b)=>a+b));// 10



 
 
 
 
 
 