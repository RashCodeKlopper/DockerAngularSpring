DROP TABLE IF EXISTS accounts;
DROP TABLE IF EXISTS owners;
DROP TABLE IF EXISTS customer;
DROP TABLE IF EXISTS person;

CREATE TABLE owners
(     id          		serial4 NOT NULL
    , "name"    		varchar(60) NOT NULL
    , date_of_birth   	timestamp NOT NULL
    , address			varchar(100) NOT NULL
    , CONSTRAINT owners_pkey PRIMARY KEY (id)
);

INSERT INTO owners
("name", date_of_birth, address)
values
('Rashied Abdoelkariem', '1976-11-15 10:00:10', 'Brasserskade 102'),
('Arvind Kisoensingh', '1977-02-24 11:20:22', 'Winthontlaan 33'),
('Amil Makdoembaks', '1975-03-22 15:45:33', 'Bijlmerdreef 56');

CREATE TABLE accounts
(     id          		serial4 NOT NULL
    , owner_id          integer NOT NULL
    , date_created    	timestamp NOT NULL
    , account_type   	varchar(45) NOT NULL
    , CONSTRAINT accounts_pkey PRIMARY KEY (id)
    , CONSTRAINT accounts_fk_owners FOREIGN KEY (owner_id) REFERENCES owners(id)
);
CREATE INDEX accounts_owner_id_idx ON accounts USING btree (owner_id);

INSERT INTO accounts
(owner_id, date_created, account_type)
values
(1, '2019-09-20 12:01:01', 'Domestic'),
(1, '2019-09-20 13:02:02', 'Savings'),
(1, '2019-09-20 14:03:03', 'Foreign'),
(2, '2019-06-16 09:10:15', 'Domestic'),
(2, '2019-06-16 11:20:35', 'Savings'),
(3, '2019-05-23 14:57:22', 'Domestic');

CREATE TABLE customer (
                          id bigserial NOT NULL,
                          active bool NULL,
                          age int4 NULL,
                          "name" varchar(255) NULL,
                          CONSTRAINT customer_pkey PRIMARY KEY (id)
);

INSERT INTO customer
(active, age, name)
values
(false, 30, 'Rashied Abdoelkariem'),
(false, 29, 'Arvind Kisoensingh'),
(false, 35, 'Amil Makdoembaks');

CREATE TABLE person (
                        id serial NOT NULL,
                        first_name varchar(255) NOT NULL,
                        last_name varchar(255) NOT NULL,
                        CONSTRAINT person_pkey PRIMARY KEY (id)
);

INSERT INTO person
(first_name, last_name)
values
('Rashied', 'Abdoelkariem'),
('Arvind', 'Kisoensingh'),
('Amil', 'Makdoembaks');
