// console.log("jia shree Ram");

function fetchUserSData(){
    return new Promise((resolve,reject)=>{
       setTimeout(() => {
           resolve({name:"chaicode",url:"https://chaicode.com"})
       }, 3000); 
    })
}
async function getUserData() {
    try{
          console.log('fetching user data... ');
         const userData= await fetchUserSData()
         console.log("User data fetched succesfully")
         console.log(userData);
    }catch(error){
     console.log("error fetching dta",error);
    }
}
getUserData()

/////

function Access_Cse_AI_Data(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
             resolve({name:"Rahul",cgpa:8.5,back:"py and dsa"})
        },4000);
    })
}
function Acces_ECE(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve({name:"priyes",cgpa:55,branche:"ECE"})
        }, 5000);
    })
}
async function CSEAI() {
    try {
        console.log("fetching data of cse ai student rahul..");
        // const classdataCSe=await Access_Cse_AI_Data();
        // const classdataECE=await Acces_ECE();
        // console.log(classdataCSe);
        // we acces both varaible in single line
        const [classdataCSe,classdataECE]=await Promise.all([Access_Cse_AI_Data(),Acces_ECE()])
        console.log(classdataCSe);
        console.log("fetching data of ECE student priyesh");
        console.log(classdataECE);
        console.log("data fetched succefully");
        
    } catch (error) {
        console.log(error);
        
    }
}

CSEAI()

/*fetching data of cse ai student rahul..
fetching data of ECE student priyesh
{ name: 'Rahul', cgpa: 8.5, back: 'py and dsa' }
{ name: 'priyes', cgpa: 55, branche: 'ECE' }
data fetched succefully*/
