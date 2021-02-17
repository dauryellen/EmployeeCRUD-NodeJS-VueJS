/**
 * arquivo responsável pelas rotas da API
 */

const router = require("express-promise-router")();
const employeeController = require("../controllers/employee.controller");

// rota responsável por criar novo funcionário(a):(POST):localhost:3000/api/employees
router.post("/employees", employeeController.createEmployee);

// rota responsável por listar todos os funcionários(as):(GET):localhost:3000/api/employees
router.get("/employees", employeeController.listAllEmployees);

module.exports = router;
