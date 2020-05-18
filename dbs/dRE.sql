-- Drops the company_db if it exists currently --
DROP DATABASE IF EXISTS company_DB;
--Creates the db
CREATE DATABASE company_DB;
--Uses the db
USE company_DB;

--============CREATE TABLES: DEPARTMENT
CREATE TABLE department (
  --Creates unique ids for each item
    id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- Makes a string column called "empName" which cannot contain null --
  name VARCHAR(30) NOT NULL,
  --this sets records in a table as unique, increases performance on queries--
  PRIMARY KEY (id) 
); 

--============CREATE TABLES: ROLES
CREATE TABLE roles (
 -- merge ID from the Department table above
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
-- list the employee role
  title VARCHAR(30) NOT NULL,
-- list the employee salary
 salary DECIMAL (6, 2) NOT NULL,
-- list the employee department
  department_ID INTEGER (11) NOT NULL,

  PRIMARY KEY (id) 
);

--============CREATE TABLES: EMPLOYEE
CREATE TABLE employee (
  -- merge ID from the Department table above
  id INTEGER(11) AUTO_INCREMENT NOT NULL,
  -- list the employee FN
 first_Name VARCHAR(30) NOT NULL,
 -- list the employee LN
 last_Name VARCHAR(30) NOT NULL,
 -- list the employee role
 role_id INTEGER (11) NOT NULL,

 manager_id INTEGER (11) NOT NULL,

 PRIMARY KEY (id) 

);
