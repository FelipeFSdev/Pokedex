const express = require("express");

const routes = require("./router");
const app = express();

app.use(routes);
app.use(express.json());

app.listen(4000);