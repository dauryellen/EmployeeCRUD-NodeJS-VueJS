/**
 * arquivo responsável pelas rotas da API
 */

const router = require("express-promise-router")();
const employeeController = require("../controllers/employee.controller");

// rota responsável por criar novo funcionário(a):(POST):localhost:3000/api/employees
router.post("/employees", employeeController.createEmployee);

// rota responsável por listar todos os funcionários(as):(GET):localhost:3000/api/employees
router.get("/employees", employeeController.listAllEmployees);

// rota responsável por listar um determinado funcionário por id:(GET):localhost:3000/api/employees/id
router.get("/employees/:id", employeeController.findEmployeeById);

module.exports = router;
