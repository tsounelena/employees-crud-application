CREATE
    USER 'bestuser'@'localhost' IDENTIFIED BY 'bestuser';

GRANT ALL PRIVILEGES ON * . * TO
    'bestuser'@'localhost';
CREATE
    DATABASE  my_db;
USE
my_db;

CREATE TABLE departments
(
    id              int NOT NULL AUTO_INCREMENT,
    department_name varchar(20),
    PRIMARY KEY (id)
);

INSERT INTO my_db.departments (department_name)
VALUES ('DEV'),
       ('SALES'),
       ('HR');


CREATE TABLE employees
(
    id           int         NOT NULL AUTO_INCREMENT,
    surname      varchar(25) NOT NULL,
    name         varchar(25) NOT NULL,
    middle_name  varchar(25),
    position     varchar(25),
    birthday     date        NOT NULL,
    mobile_phone varchar(20),
    email        varchar(25),
    department   int,
    PRIMARY KEY (id),
    FOREIGN KEY (department) REFERENCES my_db.departments (id),
    unique check_duplicate (surname, name, birthday)
);

INSERT INTO my_db.employees (surname, name, middle_name, position, birthday, mobile_phone, email, department)
VALUES ('King', 'Stephen', 'Edwin', 'Writer', str_to_date('1947-09-21', '%Y-%m-%d'), '71234567878',
        'darkTower@gmail.com', 2),
       ('Kidman', 'Nicole', 'Mary', 'Actress', str_to_date('1967-06-20', '%Y-%m-%d'), '71234567879',
        'undoing@gmail.com', 3),
       ('Gates', 'Bill', 'Henry', 'Product', str_to_date('1955-10-28', '%Y-%m-%d'), '78881112233',
        'chipEveryone@micro.com', 1),
       ('Musk', 'Elon', 'Reeve', 'Creator', str_to_date('1971-06-28', '%Y-%m-%d'), '71111111111', 'hyRogozine@ilon.com',
        1);

CREATE TABLE users
(
    username varchar(15),
    password varchar(100),
    enabled  tinyint(1),
    PRIMARY KEY (username)
);


CREATE TABLE authorities
(
    username  varchar(15),
    authority varchar(25),
    FOREIGN KEY (username) references users (username)
);

INSERT INTO my_db.users (username, password, enabled)
VALUES ('admin', '$2a$10$.kupUaxvWlhiXpORVWsfnuf.J6PN/k1zjHCp50T5.3WtQiRwYAuLS', 1),
       ('manager', '$2a$10$2flR4oTeia85pQ/XG/FdZu6G3MvRnNnnUImJk.EwAurH0LTdJ.k.2', 1);

INSERT INTO my_db.authorities (username, authority)
VALUES ('admin', 'ROLE_ADMIN'),
       ('manager', 'ROLE_MANAGER');