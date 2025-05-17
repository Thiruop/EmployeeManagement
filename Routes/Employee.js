import express from 'express';
const router = express.Router();
import { PostEmployee, GetEmployee, UpdateEmployee, DeleteEmployee } from '../Controller/EmployeeDetail.js';

router.post('/employee', PostEmployee);
router.get('/employees', GetEmployee);
router.put('/employee/:id', UpdateEmployee);
router.delete('/employee/:id', DeleteEmployee);
export default router;