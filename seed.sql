-- Drops the company_db if it exists currently --
DROP DATABASE IF EXISTS company_DB;
-- Creates the db
CREATE DATABASE company_DB;
-- Uses the db
USE company_DB;

-- ============CREATE TABLES: DEPARTMENT
CREATE TABLE department (
  -- Creates unique ids for each department
    dept_id INTEGER AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "dept_Name" which cannot contain null --
  dept_Name VARCHAR(30) NOT NULL,
  -- this sets records in a table as unique, increases performance on queries--
  PRIMARY KEY (dept_id) 
); 
-- ============CREATE TABLES: ROLES
CREATE TABLE roles (
 -- merge ID from the Department table above
  dept_id INTEGER AUTO_INCREMENT NOT NULL,
-- list the employee role
  title VARCHAR(30) NOT NULL,
-- list the employee salary
 salary DECIMAL (10, 2) NOT NULL,

  PRIMARY KEY (dept_id) 
);

-- ============CREATE TABLES: EMPLOYEE
CREATE TABLE employee (
  -- merge ID from the Department table above
  dept_id INTEGER AUTO_INCREMENT NOT NULL,
  -- list the employee FN
 first_name VARCHAR(30) NOT NULL,
 -- list the employee LN
 last_name VARCHAR(30) NOT NULL,
 -- list the employee role
 role_id VARCHAR (10) NOT NULL,

 PRIMARY KEY (dept_id) 

);

INSERT INTO department
    (dept_Name)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Finance'),
    ('Legal');
    
INSERT INTO roles
    (title, salary)
VALUES
    ('Head of Sales', 130000),
    ('Salesperson', 75000),
    ('Lead Engineer', 140000),
    ('Software Engineer', 110000),
    ('Account Manager', 130000),
    ('Accountant', 135000),
    ('Legal Team Lead', 275000),
    ('Lawyer', 200000);
    
INSERT INTO employee
    (first_name, last_name, role_id)
VALUES
    ('El Hajj Malik', 'Al Shabazz', 1),
    ('Medgar', 'Evers', 2),
    ('Rosa', 'Parks', 3),
    ('Hugo', 'Chavez', 4),
    ('Mamie', 'Till', 5),
    ('Nelson', 'Mandela', 6),
    ('Bartolome', 'de las Casas', 7);

SELECT * FROM department;

SELECT * FROM roles;

SELECT * FROM employee