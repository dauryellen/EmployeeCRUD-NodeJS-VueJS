/**
 * arquivo responsável por fazer a conexão com o arquivo server.js
 */

const express = require("express");
const cors = require("cors");

const app = express();

// rotas da api
const index = require("./routes/index");
const employeeRoute = require("./routes/employee.routes");

app.use(express.urlencoded({ extended: true }));
