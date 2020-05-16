use company_DB;
INSERT INTO department
    (name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');
INSERT INTO roles
    (title, salary, department_id)
VALUES
    ('Head of Sales', 130000, 1),
    ('Salesperson', 75000, 1),
    ('Lead Engineer', 140000, 2),
    ('Software Engineer', 110000, 2),
    ('Account Manager', 130000, 3),
    ('Accountant', 135000, 3),
    ('Legal Team Lead', 275000, 4),
    ('Lawyer', 200000, 4);
INSERT INTO employee
    (first_name, last_name, role_id, manager_id)
VALUES
    ('El Hajj Malik', 'Al Shabazz', 1, NULL),
    ('Medgar', 'Evers', 2, 1),
    ('Rosa', 'Parks', 3, NULL),
    ('Hugo', 'Chavez', 4, 3),
    ('Mamie', 'Till', 5, NULL),
    ('Nelson', 'Mandela', 6, 5),
    ('Bartolome', 'de las Casas', 7, NULL),
