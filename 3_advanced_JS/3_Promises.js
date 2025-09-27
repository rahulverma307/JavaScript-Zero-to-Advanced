// console.log("jai Shree Ram");
function fetchData(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            let succes=true
            if(succes){
                resolve("data fetched succesfully")
            }else{
                reject("Error fetching data")
            }
        }, 3000);
    })
}
fetchData()
    .then((data)=>{console.log(data)
        return `rahul`;
    })
    .then((value)=>{
        console.log(value);
 
    })
    .catch((error)=>{console.error(error);
    })

    //output is:- data fetched SuccesFully
