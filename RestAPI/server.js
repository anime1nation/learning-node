const http = require("http");
const getReq =require('./method/get-request')
const postReq =require('./method/post-request')
const putReq =require('./method/put-request')
const deleteReq =require('./method/delete-request')
let movies = require('./data/movies.json')

// require("dotenv").config();

const PORT = process.env.PORT || 3001;

const server = http.createServer((req, res) => {
    req.movies=movies;
  switch (req.method) {
    case "GET":
      getReq(req, res);
      break;
    case "POST":
      postReq(req, res);
      break;
    case "PUT":
      putReq(req, res);
      break;
    case "DELETE":
      deleteReq(req, res);
      break;
    default:
      res.statusCode = 404;
      res.setHeader("Content-Type", "application/json");
      res.write(JSON.stringify({ title:"not found",message: "route not found" }));
      res.end();
  }
});

server.listen(PORT, () => {
  console.log(`server started on port: ${PORT}`);
});
