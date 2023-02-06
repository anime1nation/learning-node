const DB = require("./database.json");
const { processdata } = require("./promise");
console.time();
const data = DB;
const findage = [35];
const findcountry = ['Rome']


processdata(data, findage, findcountry)
  .then((values) => {
    values
      .map((value) =>
        console.log(
          `Auther name whose age is greater than ${findage} and belong to country ${findcountry} are ${value.name}`
        )
      );
    console.timeEnd();
  })
  .catch((error) => console.log(error));
