import express from 'express';
const router = express.Router();
import { PostEmployee, GetEmployee, UpdateEmployee, DeleteEmployee, GetEmployeeById } from '../Controller/EmployeeDetail.js';

router.post('/employee', PostEmployee);
router.get('/employees', GetEmployee);
router.put('/employee/:id', UpdateEmployee);
router.delete('/employee/:id', DeleteEmployee);
router.get('/employee/:id', GetEmployeeById);

export default router;