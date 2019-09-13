drop table users;

create table users
(     id            serial4 not null
    , first_name    varchar(30) not null
    , last_name     varchar(50) not null
    , username      varchar(20) not null
    , "password"    varchar(100) not null
    , salary       	integer null
    , age       	integer null
    , CONSTRAINT users_pkey PRIMARY KEY (id)
);

insert into users (first_name, last_name, username, password, salary, age) VALUES ('Rashied','Abdoelkariem', 'rashied@123','$2a$12$su4C23jxPcF84rRsiI1MIus6BeNmmZR9zyVIO/KExNkw9iptZ/gPe', 3456, 30);
insert into users (first_name, last_name, username, password, salary, age)  VALUES ('Farzia', 'Abdoelkariem', 'farzia@123', '$2a$12$LG19zYVSKDgOvEnKUkt6..k.fnMKVMSUKbg4jNj/.p88rt5JcwU.O', 7823, 25);
insert into users (first_name, last_name, username, password, salary, age)  VALUES ('Zaid', 'Abdoelkariem', 'zaid@123', '$2a$12$3EhI4JSoy8rkyoBN/1uRqOPdbQC7R03yT3NZP59WJaqGq34JJt4Fu', 4234, 5);
