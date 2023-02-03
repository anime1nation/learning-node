
function filtercondition(condition){
   if(condition === "age"){
   return (item)=>item.age
   }
//    else if(condition === "country"){
//     return (item)=>item.country
//    }
//    else if(condition === "city"){
//     return (item)=>item.city
//    }
}

module.exports = {
    filtercondition
}