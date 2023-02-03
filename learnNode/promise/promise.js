
async function processdata(data,findage,check){
    const filtereddata = data.filter([check] > findage)
    return await new Promise((resolve,reject)=>{

        setTimeout(() => {
            if(filtereddata.length>0){
                resolve(filtereddata)
            }
            else{
                reject("notfound")
            }
            
        }, Math.floor(Math.random() * 1000));

    })
    
}




module.exports = {
    processdata
}