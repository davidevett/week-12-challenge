DROP DATABASE IF EXISTS business_db;
CREATE DATABASE business_db;
\c business_db;

CREATE TABLE department (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id SERIAL PRIMARY KEY,
    title VARCHAR(30) UNIQUE NOT NULL,
    salary DECIMAL NOT NULL,
    department_id INTEGER NOT NULL,
    FOREIGN KEY (department_id) REFERENCES department(id)
);

CREATE TABLE employee (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INTEGER NOT NULL,
    manager_id INTEGER
    );

\i seeds.sql

-- Reset sequence values to the maximum ID + 1
SELECT setval('department_id_seq', (SELECT MAX(id) FROM department) + 1);
SELECT setval('role_id_seq', (SELECT MAX(id) FROM role) + 1);
SELECT setval('employee_id_seq', (SELECT MAX(id) FROM employee) + 1);