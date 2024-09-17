CREATE DATABASE instagram;
use instagram;

create table user(
id int,
age int ,
name varchar(50) not null,
email varchar(30) unique,
followers int default 0,
following int,
constraint age_check check (age>=10),
primary key(id)
);

create table post(
id int,
content varchar(100),
user_id int,
foreign key (user_id) references user(id)
);

INSERT INTO user (id, age, name, email, followers, following) 
VALUES 
(1, 25, 'Alice', 'alice@example.com', 150, 200),
(2, 30, 'Bob', 'bob@example.com', 300, 250),
(3, 22, 'Charlie', 'charlie@example.com', 120, 180),
(4, 28, 'David', 'david@example.com', 400, 350),
(5, 35, 'Eve', 'eve@example.com', 600, 500);

-- select * from user;

select id , name ,email from user;
select distinct age from user;