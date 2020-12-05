// required express
const express = require("express");
// Set the port
const PORT = process.env.PORT || 8080;
// create instance of express
const app = express();
// allow for files in public to read on any server/webpage
app.use(express.static("public"));
// middleware
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static("public"));
// require handlebars
const exphbs = require("express-handlebars");
// middleware for handlebars
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");
// require routes for burgers
const routes = require("./controllers/burgerController");
// middleware for routes
app.use(routes);
// listen on the port
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
