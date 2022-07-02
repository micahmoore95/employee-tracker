INSERT INTO departments (department_name)
VALUES
    ('Sales'),
    ('Engineer'),
    ('Finance'),
    ('Legal');

INSERT INTO roles (title, salary, department_id)
VALUES
    ('Salesperson', 50000, 1),
    ('Software Engineer', 90000, 2),
    ('Lawyer', 130000, 4),
    ('Jr Developer', 60000, 2),
    ('Accountant', 90000, 3),
    ('Account Manager', 70000, 3),
    ('Mechanical Engineer', 95000, 2),
    ('Sales Lead', 90000, 1),
    ('Software Engineer', 75000, 3);

INSERT INTO employees(first_name, last_name, role_id, manager_id)
VALUES
    ('Micah', 'Moore', 1, NULL),  
    ('Michael', 'John', 4, NULL),
    ('Ben', 'Mo', 6, NULL),

    ('Spalding', 'Wilson', 7, NULL),
    ('Lisa', 'Cris', 9,2),
    ('Cash', 'Maker', 8, 2),

    ('Nick', 'Kole', 3, 3),
    ('Java', 'Script', 2, 3),
    ('Julie', 'Node', 5, 3);