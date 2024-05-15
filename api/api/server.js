const jsonServer = require("json-server");
const fs = require("fs");
const path = require("path");

const server = jsonServer.create();

const filePath = path.join(__dirname.slice(0, -4) + "/db.json");
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);
const router = jsonServer.router(db);

const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(
  jsonServer.rewriter({
    "/api/customers": "/customers",
    "/api/customers/?customerId=id": "/customers/:id",
    "/api/products/?customerId=id": "/products/:id",
  })
);
server.use(router);
server.listen(3000, () => {
  console.log("JSON Server is running");
});

module.exports = server;
