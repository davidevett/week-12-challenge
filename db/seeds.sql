INSERT INTO
    department (id, name)
VALUES
    (1, 'Admin'),
    (2, 'Finance'),
    (3, 'HR'),
    (4, 'IT');

INSERT INTO
    role (id, title, salary, department_id)
VALUES
    (1, 'Administrator', 50000, 1),
    (2, 'Finance Manager', 45000, 2),
    (3, 'HR Manager', 40000, 3),
    (4, 'IT Manager', 35000, 4),
    (5, 'technician', 25000, 4),
    (6, 'secretary', 20000, 1);
    
INSERT INTO
    employee (id, first_name, last_name, role_id, manager_id)
VALUES
    (1, 'Janet', 'Dose', 1, null),
    (2, 'John', 'Doe', 2, null),
    (3, 'Jacob', 'Williamson', 3, null),
    (4, 'Jane', 'Smith', 4, null),
    (5, 'Michael', 'Johnson', 5, 4),
    (6, 'David', 'Johnson', 6, 1);