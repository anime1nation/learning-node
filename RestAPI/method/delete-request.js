const wriiteToFile =require('../util/write-to-file')
module.exports = (req, res) => {
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
  }else if(baseUrl === "/api/movies/" && regexV4.test(id)){
    const index = req.movies.findIndex((movie)=>{
        return movie.id === id;
    });
    if(index === -1){
        res.statusCode=404;
        regexV4.write(
            JSON.stringify({title:"not found",message:"Movie not found"})

        );
        res.end();
    }else{
        req.movies.splice(index, 1);
        wriiteToFile(req.movies);
        res.writeHead(204,{"content-type":"application/json"});
        res.end(JSON.stringify(res.movies));
    }
  }else{
    res.writeHead(404,{"content-type":"application/json"});
    res.end(JSON.stringify({title:"Not found", message:"route not found"}))
}
};
