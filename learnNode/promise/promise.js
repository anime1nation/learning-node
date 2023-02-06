const { conditionbyage, conditionbycountry, filterbycondition } = require("./condition");

function processdata(data, findage, findcountry) {
  const filterbyage = conditionbyage(findage);
  const filterbycountry = conditionbycountry(findcountry);
  return filterbycondition(data, filterbyage).then((filtereddata) => {
    return filterbycondition(filtereddata,filterbycountry)
  }).then((finaldata)=>{
    return Promise.resolve(finaldata)
  })
}

module.exports = {
  processdata,
};
