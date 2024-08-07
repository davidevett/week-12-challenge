INSERT INTO
    department (name)
VALUES
    ('Admin'),
    ('Finance'),
    ('HR'),
    ('IT');

INSERT INTO
    role (title, salary, department_id)
VALUES
    ('Administrator', 50000, 1),
    ('Finance Manager', 45000, 2),
    ('HR Manager', 40000, 3),
    ('IT Manager', 35000, 4),
    ('technician', 25000, 4),
    ('secretary', 20000, 1);
    
INSERT INTO
    employee (first_name, last_name, role_id, manager_id)
VALUES
    ('Janet', 'Dose', 1, null),
    ('John', 'Doe', 2, null),
    ('Jacob', 'Williamson', 3, null),
    ('Jane', 'Smith', 4, null),
    ('Michael', 'Johnson', 5, 4),
    ('David', 'Johnson', 6, 1);