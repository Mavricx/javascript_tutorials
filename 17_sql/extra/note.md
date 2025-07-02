why database?

````markdown
# Database Management System (DBMS)

- Can store large data
- Features like security, scalability, etc.
- Easier to insert, update, or delete data

**DBMS**: Database Management System is a covering to database to perform actions more efficiently.

## SQL vs No-SQL

### SQL (Structured Query Language)

- Relational database (data stored in tables)
- Examples: MySQL, Oracle, PostgreSQL, etc.

### No-SQL

- Collection of databases that do not use SQL
- Non-relational database
- Data stored in documents, key-value pairs, graphs, etc.
- Examples: MongoDB, Cassandra, Neo4j, etc.

---

**Note**: All these are written as SQL code and not in formal language.

```sql
-- Create a database called college
CREATE DATABASE college;

-- More appropriate way to create a database if it doesn't exist
CREATE DATABASE IF NOT EXISTS college;

-- Delete the college database
DROP DATABASE college;

-- Use the college database from now on
USE college;

-- Create a table in the college database
CREATE TABLE students(
    roll_no INT,
    name VARCHAR(30),
    age INT
);

-- Insert these values into the students table
INSERT INTO students VALUES
(101, 'ADAM', 12),
(102, 'BOB', 14);

-- Show all the data in the students table
SELECT * FROM students;
```
````

## Data Types

| DATATYPE | DESCRIPTION                                                        | USAGE       |
| -------- | ------------------------------------------------------------------ | ----------- |
| CHAR     | String (0-255), can store characters of fixed length               | CHAR(50)    |
| VARCHAR  | String (0-255), can store characters up to given length            | VARCHAR(50) |
| BLOB     | String (0-65535), can store binary large object                    | BLOB(1000)  |
| INT      | Integer (-2,147,483,648 to 2,147,483,647)                          | INT         |
| TINYINT  | Integer (-128 to 127)                                              | TINYINT     |
| BIGINT   | Integer (-9,223,372,036,854,775,808 to 9,223,372,036,854,775,807)  | BIGINT      |
| BIT      | Can store x-bit values. x can range from 1 to 64                   | BIT(2)      |
| FLOAT    | Decimal number - with precision to 23 digits                       | FLOAT       |
| DOUBLE   | Decimal number - with 24 to 53 digits                              | DOUBLE      |
| BOOLEAN  | Boolean values 0 or 1                                              | BOOLEAN     |
| DATE     | Date in format of YYYY-MM-DD ranging from 1000-01-01 to 9999-12-31 | DATE        |
| YEAR     | Year in 4 digits format ranging from 1901 to 2155                  | YEAR        |

- TINYINT range is (-128 to 127)
- TINYINT UNSIGNED range is 0 to 255

`CREATE TABLE` defines the schema of a row/tuple which will be inserted with each insert statement.

## Constraints

Rules for data in the table:

- **NOT NULL**: Columns cannot have a null value
- **UNIQUE**: All values in column are different
- **DEFAULT**: Sets the default value of a column
- **CHECK**: It can limit the values allowed in a column

```sql
-- Example of constraints
CREATE TABLE teacher (
    id INT NOT NULL,
    PRIMARY KEY(id)
);

-- Example of foreign key constraint
CREATE TABLE student (
    cust_id INT,
    FOREIGN KEY(teacher_id) REFERENCES teachers(id)
);
```

## INSERT Command

```sql
-- Insert multiple users
INSERT INTO user (id, age, name, email, followers, following) VALUES
(1, 25, 'Alice', 'alice@example.com', 150, 200),
(2, 30, 'Bob', 'bob@example.com', 300, 250),
(3, 22, 'Charlie', 'charlie@example.com', 120, 180),
(4, 28, 'David', 'david@example.com', 400, 350),
(5, 35, 'Eve', 'eve@example.com', 600, 500);

-- Insert a single user
INSERT INTO user (id, age, name, email, followers, following) VALUES
(1, 25, 'Alice', 'alice@example.com', 150, 200);
```

## SELECT Command

```sql
-- Select all columns from user
SELECT * FROM user;

-- Select specific columns from user
SELECT id, name, email FROM user;

-- Select distinct ages from user
SELECT DISTINCT age FROM user;
```

## Clauses

Clauses define conditions to get specific results.

```sql
-- Example of WHERE clause
SELECT col1, col2 FROM table_name WHERE conditions;

-- Example queries
SELECT * FROM user WHERE followers > 200;
SELECT name, age FROM user WHERE followers > 200;
SELECT name, age FROM user WHERE age > 25;
```

## Operators

- **Arithmetic**: `+`, `-`, `*`, `/`, `%`
- **Comparison**: `=`, `!=`, `>`, `>=`, `<`, `<=`
- **Logical**: `AND`, `OR`, `NOT`, `IN`, `BETWEEN`, `ALL`, `LIKE`, `ANY`
- **Bitwise**: `&`, `|`

```sql
-- Example queries using operators
SELECT name, age, followers FROM user WHERE age > 15 AND followers > 200;
SELECT name, age, followers FROM user WHERE age BETWEEN 20 AND 30;
SELECT name, age, followers FROM user WHERE email IN ('david@example.com', 'eve@example.com');
SELECT name, age, followers FROM user WHERE age IN (22, 25);
SELECT name, age, followers FROM user WHERE age NOT IN (22, 25);
```

## LIMIT Clause

Shows a limited number of results to avoid overwhelming with large data.

```sql
-- Example of LIMIT clause
SELECT name, age, email FROM user WHERE age > 20 LIMIT 2;
```

## ORDER BY Clause

Sort results in ascending (ASC) or descending order (DESC).

```sql
-- Example of ORDER BY clause
SELECT name, age, followers FROM user ORDER BY followers ASC;
```

## Aggregate Functions

Aggregate functions perform a calculation on a set of values and return a single value.

- `COUNT()`: Returns the number of results
- `MAX()`: Returns the maximum value
- `MIN()`: Returns the minimum value
- `SUM()`: Returns the sum of all values
- `AVG()`: Returns the average of all values

```sql
-- Example queries using aggregate functions
SELECT MAX(marks) FROM student;
SELECT COUNT(age) FROM user WHERE age > 14;
SELECT MIN(age) FROM user;
SELECT SUM(followers) FROM user;
```

## GROUP BY Clause

Groups rows that have the same values into summary rows.

```sql
-- Example queries using GROUP BY clause
SELECT COUNT(age) FROM user GROUP BY age;
SELECT age, MAX(followers) FROM user GROUP BY age;
```

## HAVING Clause

Similar to WHERE clause but used after grouping.

```sql
-- Example query using HAVING clause
SELECT age, MAX(followers) FROM user WHERE age > 24 GROUP BY age HAVING MAX(followers) > 200 ORDER BY age DESC;
```

## UPDATE Command

Before using the update query, disable safe updates.

```sql
-- Disable safe updates
SET SQL_SAFE_UPDATES = 0;

-- Update query
UPDATE table_name SET col1 = val1, col2 = val2 WHERE condition;

-- Example update query
UPDATE user SET followers = 600 WHERE age = 16;
```

## DELETE Command

Deletes all rows that fit the certain condition. Without a delete condition, it will delete the whole table.

```sql
-- Example delete query
DELETE FROM user WHERE age = 35;
```

## ALTER Command

Change the schema of a table.

- **Add columns**:

  ```sql
  ALTER TABLE table_name ADD COLUMN col2 datatype constraints;
  -- Example
  ALTER TABLE user ADD COLUMN city VARCHAR(34) DEFAULT 'Delhi';
  ```

- **Drop column**:

  ```sql
  ALTER TABLE user DROP COLUMN age;
  ```

- **Rename table**:

  ```sql
  ALTER TABLE user RENAME TO instauser;
  ```

- **Change column (rename)**:

  ```sql
  ALTER TABLE table_name CHANGE COLUMN old_name new_name datatype new_constraints;
  -- Example
  ALTER TABLE user CHANGE COLUMN followers subs INT DEFAULT 0;
  ```

- **Modify column (modify datatype/constraints)**:
  ```sql
  ALTER TABLE table_name MODIFY col_name new_data_type new_constraints;
  -- Example
  ALTER TABLE user MODIFY subs INT DEFAULT 5;
  ```

## TRUNCATE Command

Deletes table's data but not the table itself.

```sql
-- Example truncate query
TRUNCATE TABLE user;
```

```

```

## JOINS in SQL

A **JOIN** in SQL is used to combine rows from two or more tables, based on a related column between them. This allows you to retrieve data that is spread across multiple tables in a relational database.

### Types of Joins

1. **INNER JOIN**  
  Returns only the records that have matching values in both tables.

2. **LEFT JOIN (or LEFT OUTER JOIN)**  
  Returns all records from the left table, and the matched records from the right table. If there is no match, the result is NULL from the right table.

3. **RIGHT JOIN (or RIGHT OUTER JOIN)**  
  Returns all records from the right table, and the matched records from the left table. If there is no match, the result is NULL from the left table.

4. **FULL JOIN (or FULL OUTER JOIN)**  
  Returns all records when there is a match in either left or right table. If there is no match, the result is NULL from the table without a match.

---

### INNER JOIN

The **INNER JOIN** keyword selects records that have matching values in both tables.

**Syntax:**

```sql
SELECT column_name(s)
FROM TableA
INNER JOIN TableB
ON TableA.column_name = TableB.column_name;
```

**Example:**

Suppose you have two tables:

- `customer`  
  | customer_id | name   |
  |-------------|--------|
  | 1           | Alice  |
  | 2           | Bob    |

- `payment`  
  | payment_id | customer_id | amount |
  |------------|-------------|--------|
  | 101        | 1           | 500    |
  | 102        | 2           | 300    |

To get all customers who have made a payment:

```sql
SELECT *
FROM customer AS c
INNER JOIN payment AS p
ON c.customer_id = p.customer_id;
```

**Result:**

| customer_id | name  | payment_id | customer_id | amount |
|-------------|-------|------------|-------------|--------|
| 1           | Alice | 101        | 1           | 500    |
| 2           | Bob   | 102        | 2           | 300    |

---

### Visual Representation

```
TableA         TableB
+----+-----+   +----+-------+
| id | ... |   | id | ...   |
+----+-----+   +----+-------+
| 1  | ... |   | 1  | ...   |
| 2  | ... |   | 2  | ...   |
| 3  | ... |   | 4  | ...   |
+----+-----+   +----+-------+

INNER JOIN result: Only rows with id 1 and 2 (present in both tables)
```

---

> **Tip:** Use table aliases (like `c` and `p` above) to make your queries shorter and more readable, especially when joining multiple tables.

---

### LEFT JOIN

The **LEFT JOIN** (or **LEFT OUTER JOIN**) returns all records from the left table, and the matched records from the right table. If there is no match, the result is NULL from the right table.

**Syntax:**

```sql
SELECT column_name(s)
FROM TableA
LEFT JOIN TableB
ON TableA.column_name = TableB.column_name;
```

**Example:**

Suppose you have:

- `customer`  
  | customer_id | name   |
  |-------------|--------|
  | 1           | Alice  |
  | 2           | Bob    |
  | 3           | Carol  |

- `payment`  
  | payment_id | customer_id | amount |
  |------------|-------------|--------|
  | 101        | 1           | 500    |
  | 102        | 2           | 300    |

To get all customers and their payments (if any):

```sql
SELECT *
FROM customer AS c
LEFT JOIN payment AS p
ON c.customer_id = p.customer_id;
```

**Result:**

| customer_id | name  | payment_id | customer_id | amount |
|-------------|-------|------------|-------------|--------|
| 1           | Alice | 101        | 1           | 500    |
| 2           | Bob   | 102        | 2           | 300    |
| 3           | Carol | NULL       | NULL        | NULL   |

---

### Visual Representation

```
TableA         TableB
+----+-----+   +----+-------+
| id | ... |   | id | ...   |
+----+-----+   +----+-------+
| 1  | ... |   | 1  | ...   |
| 2  | ... |   | 2  | ...   |
| 3  | ... |   | 4  | ...   |
+----+-----+   +----+-------+

LEFT JOIN result: rows with id 1, 2 (matched), and 3 (no match, NULLs from TableB)
```

---

### RIGHT JOIN

The **RIGHT JOIN** (or **RIGHT OUTER JOIN**) returns all records from the right table, and the matched records from the left table. If there is no match, the result is NULL from the left table.

**Syntax:**

```sql
SELECT column_name(s)
FROM TableA
RIGHT JOIN TableB
ON TableA.column_name = TableB.column_name;
```

**Example:**

Suppose you have:

- `customer`  
  | customer_id | name   |
  |-------------|--------|
  | 1           | Alice  |
  | 2           | Bob    |

- `payment`  
  | payment_id | customer_id | amount |
  |------------|-------------|--------|
  | 101        | 1           | 500    |
  | 102        | 2           | 300    |
  | 103        | 4           | 200    |

To get all payments and their customers (if any):

```sql
SELECT *
FROM customer AS c
RIGHT JOIN payment AS p
ON c.customer_id = p.customer_id;
```

**Result:**

| customer_id | name  | payment_id | customer_id | amount |
|-------------|-------|------------|-------------|--------|
| 1           | Alice | 101        | 1           | 500    |
| 2           | Bob   | 102        | 2           | 300    |
| NULL        | NULL  | 103        | 4           | 200    |

---

### Visual Representation

```
TableA         TableB
+----+-----+   +----+-------+
| id | ... |   | id | ...   |
+----+-----+   +----+-------+
| 1  | ... |   | 1  | ...   |
| 2  | ... |   | 2  | ...   |
|    |     |   | 4  | ...   |
+----+-----+   +----+-------+

RIGHT JOIN result: rows with id 1, 2 (matched), and 4 (no match, NULLs from TableA)
```

---

### FULL JOIN

The **FULL JOIN** (or **FULL OUTER JOIN**) returns all records when there is a match in either left or right table. If there is no match, the result is NULL from the table without a match.

**Syntax:**

```sql
SELECT column_name(s)
FROM TableA
FULL OUTER JOIN TableB
ON TableA.column_name = TableB.column_name;
```

**Example:**

Suppose you have:

- `customer`  
  | customer_id | name   |
  |-------------|--------|
  | 1           | Alice  |
  | 2           | Bob    |
  | 3           | Carol  |

- `payment`  
  | payment_id | customer_id | amount |
  |------------|-------------|--------|
  | 101        | 1           | 500    |
  | 102        | 2           | 300    |
  | 103        | 4           | 200    |

To get all customers and all payments, matching where possible:

```sql
SELECT *
FROM customer AS c
FULL OUTER JOIN payment AS p
ON c.customer_id = p.customer_id;
```

**Result:**

| customer_id | name  | payment_id | customer_id | amount |
|-------------|-------|------------|-------------|--------|
| 1           | Alice | 101        | 1           | 500    |
| 2           | Bob   | 102        | 2           | 300    |
| 3           | Carol | NULL       | NULL        | NULL   |
| NULL        | NULL  | 103        | 4           | 200    |

---

### Visual Representation

```
TableA         TableB
+----+-----+   +----+-------+
| id | ... |   | id | ...   |
+----+-----+   +----+-------+
| 1  | ... |   | 1  | ...   |
| 2  | ... |   | 2  | ...   |
| 3  | ... |   | 4  | ...   |
+----+-----+   +----+-------+

FULL JOIN result: rows with id 1, 2 (matched), 3 (only in TableA), and 4 (only in TableB)
```

---

