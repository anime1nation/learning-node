const requestBodyparser = require("../util/body-parser");
const writeToFile = require("../util/write-to-file");
module.exports = async (req, res) => {
  let baseUrl = req.url.substring(0, req.url.lastIndexOf("/") + 1);
  let id = req.url.split("/")[3];
  const regexV4 = new RegExp(
    /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i
  );
  if (!regexV4.test(id)) {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(
      JSON.stringify({ title: "Validation failed", message: "not a valid id" })
    );
  } else if (baseUrl === "/api/movies/" && regexV4.test(id)) {
    try {
      let body = await requestBodyparser(req);
      const index = req.movies.findIndex((movie) => {
        return movie.id === id;
      });
      if (index === -1) {
        res.statusCode = 404;
        regexV4.write(
          JSON.stringify({ title: "not found", message: "Movie not found" })
        );
        res.end();
      } else {
        req.movies[index] = { id, ...body };
        writeToFile(req.movies);
        res.writeHead(200, { "contsne-type": "application/json" });
        res.end(JSON.stringify(req.movies[index]));
      }
    } catch (err) {
      console.log(err);
      res.writeHead(400, { "content-type": "application/json" });
      res.end(
        JSON.stringify({
          title: "Validation failed",
          message: "request body is not valid",
        })
      );
    }
  } else {
    res.writeHead(404, { "content-type": "application/json" });
    res.end(JSON.stringify({ title: "Not found", message: "route not found" }));
  }
};
