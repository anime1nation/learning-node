const DB = require('./database.json')
const {processdata} = require('./promise')
const {filtercondition} = require('./condition')
console.time()
const data =DB;
const findage = [35];


processdata(data,findage,filtercondition).then((values) => {
    values.flat().map((value) =>
      console.log(value.name)
    );
    console.timeEnd();
  })
  .catch((error) => console.log(error));





