function filterbycondition(database, conditiontofilter) {
  return new Promise((resolve, reject) => {
    const filtereddatabase = database.filter(conditiontofilter);
    setTimeout(() => {
      if (filtereddatabase.length > 0) {
        resolve(filtereddatabase);
      } else {
        reject("not found");
      }
    }, Math.floor(Math.random() * 1000));
  });
}

function conditionbyage(findage) {
  return (item) => item.age > findage;
}
function conditionbycountry(findcountry) {
    // console.log(findcountry)
  return (item) => item.country == findcountry;
}

module.exports = {
  conditionbyage,
  conditionbycountry,
  filterbycondition,
};
