const StaticServer = require("static-server");
const server = new StaticServer({
  rootPath: "./dist",
  port: 3000,
});
server.start(function () {
  console.log("server started at port", server.port);
});
