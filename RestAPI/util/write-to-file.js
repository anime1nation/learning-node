const fs = require("fs");
const path = require("path");

module.exports = (data) => {
    console.log("data",data)
  try {
    fs.writeFileSync(
      path.join(
        __dirname,
        "..",
        "data",
        "movies.json"),
        JSON.stringify(data)
    );
  } catch (err) {
    console.log(err);
  }
};
