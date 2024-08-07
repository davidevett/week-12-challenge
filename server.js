const express = require('express');
const inquirer = require('inquirer');
const { Pool } = require('pg');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());


// Connect to database
const pool = new Pool(
    {
        // Enter PostgreSQL username
        user: 'postgres',
        // Enter PostgreSQL password
        password: '1181994Delta!!',
        host: 'localhost',
        database: 'business_db'
    },
    console.log('Connected to the business_db database!')
)

pool.connect();

inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'action',
            choices: ['View all employees', 'Add employee', 'View all Roles', 'add Roles', 'View Departments', 'Update Departments'],
        },

    ])
    .then((response) => {
        switch (response.action) {
            case 'View all employees':
                viewEmployees();
                break;
                
            case 'Add employee':
                addEmployee();
                break;
                
            case 'View all Roles':
                viewRoles();
                break;
                
            case 'Update Roles':
                addRoles();
                break;
                
            case 'View Departments':
                viewDepartments();
                break;
                
            case 'Update Departments':
                addDepartments();
                break;
                
            default:
                console.log('Invalid action. Please try again.');
        }
    });

    async function viewEmployees() {
        const result = await pool.query('SELECT * FROM employee');
        console.table(result.rows);
    }
    
    async function addEmployee() {
        const questions = [
            {
                type: 'input',
                message: 'Enter employee first name:',
                name: 'first_name',
            },
            {
                type: 'input',
                message: 'Enter employee last name:',
                name: 'last_name',
            },
            {
                type: 'input',
                message: 'Enter employee role ID:',
                name: 'role_id',
            },
            {
                type: 'input',
                message: 'Enter employee manager ID (leave blank for none):',
                name:'manager_id',
            },
        ];
        
        const answers = await inquirer.prompt(questions);
        
        const query = 'INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ($1, $2, $3, $4)';
        await pool.query(query, [answers.first_name, answers.last_name, answers.role_id, answers.manager_id]);
        
        console.log('Employee added successfully!');
        viewEmployees();
    };
    
    async function viewRoles() {
        const result = await pool.query('SELECT * FROM role');
        console.table(result.rows);
    };

    async function addRoles() {
        const questions = [
            {
                type: 'input',
                message: 'Enter role title:',
                name: 'title',
            },
            {
                type: 'input',
                message: 'Enter role salary:',
                name:'salary',
            },
            {
                type: 'input',
                message: 'Enter department ID:',
                name: 'department_id',
            },
        ];
        
        const answers = await inquirer.prompt(questions);
        
        const query = 'INSERT INTO role (title, salary, department_id) VALUES ($1, $2, $3)';
        await pool.query(query, [answers.title, answers.salary, answers.department_id]);
        
        console.log('Role added successfully!');
        viewRoles();
    };
    
    async function viewDepartments() {
        const result = await pool.query('SELECT * FROM department');
        console.table(result.rows);
    };

    async function addDepartments() {
        const questions = [
            {
                type: 'input',
                message: 'Enter department name:',
                name: 'name',
            },
        ];
        
        const answers = await inquirer.prompt(questions);
        
        const query = 'INSERT INTO department (name) VALUES ($1)';
        await pool.query(query, [answers.name]);
        
        console.log('Department added successfully!');
        viewDepartments();
    };
    
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
