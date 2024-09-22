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

select name ,age ,followers from user
where age >15 and followers>200;
 
select name ,age ,followers from user
where age between 20 and 30;

select name , age , followers from user
where email in ("david@example.com","eve@example.com"); 

select name , age , followers from user
where age in (22,25);

select name ,age email  from user
where age not in (20,30);

select name, age, followers from user order by followers ASC;

select max(followers) from user;
select count(age) from user where age>14; 

select age,max(followers) 
         from user 
         where age >24
         group by age 
         having  max(followers) >200
         order by age desc;


select age, max(followers) from user  group by age;

select age,max(followers) 
from user 
where age >24
group by age 
having  max(followers) >200
order by age desc;



update user 
set followers=600
where age=22;


delete from user where age =35;

SET SQL_SAFE_UPDATEs=0;
select * from user;

alter table user add column city varchar (34) default "delhi";
alter table user drop column age;
alter table user rename to instauser;
alter table instauser rename to user;
alter table user modify subs int default 5;

INSERT INTO user (id, name, email, following) 
VALUES 
(9, 'Alice', 'pentagon@example.com', 200);
drop table post;
truncate table user;