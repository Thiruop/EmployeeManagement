import { pool } from '../Model/db.js';

// POST: Allow EmployeeID to be provided
export const PostEmployee = async (req, res) => {
    const { EmployeeID, EmployeeName, Department, Designation, Project, Type, Status } = req.body;
    const sql = `INSERT INTO employee (EmployeeID, EmployeeName, Department, Designation, Project, Type, Status)
                 VALUES (?, ?, ?, ?, ?, ?, ?)`;
    pool.query(sql, [EmployeeID, EmployeeName, Department, Designation, Project, Type, Status], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.status(201).json({ message: 'Employee created', employeeId: EmployeeID});
    });
};

export const GetEmployee = async (req, res) => {
    pool.query('SELECT * FROM employee', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });

};
// UPDATE: Allow EmployeeID to be updated
export const UpdateEmployee = async (req, res) => {
    const empId = req.params.id;
    const { EmployeeID, EmployeeName, Department, Designation, Project, Type, Status } = req.body;
    const sql = `UPDATE employee SET EmployeeID=?, EmployeeName=?, Department=?, Designation=?, Project=?, Type=?, Status=?
                 WHERE EmployeeID = ?`;
    pool.query(sql, [EmployeeID, EmployeeName, Department, Designation, Project, Type, Status, empId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' });
        res.json({ message: 'Employee updated' });
    });
};


export const DeleteEmployee = async (req, res) => {
    const empId = req.params.id;
    pool.query('DELETE FROM employee WHERE EmployeeID = ?', [empId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.affectedRows === 0) return res.status(404).json({ message: 'Employee not found' });
        res.json({ message: 'Employee deleted' });
    });
};

export const GetEmployeeById = async (req, res) => {
    const empId = req.params.id;
    pool.query('SELECT * FROM employee WHERE EmployeeID = ?', [empId], (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        if (results.length === 0) return res.status(404).json({ message: 'Employee not found' });
        res.json(results[0]);
    });
}