/**
 * arquivo responsável pelas rotas da API
 */

const router = require("express-promise-router")();
const employeeController = require("../controllers/employee.controller");

// rota responsável por criar novo funcionário(a):(POST):localhost:3000/api/employess
router.post("/employees", employeeController.createEmployee);

module.exports = router;
