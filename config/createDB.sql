create Database if not exists Menu;

use Menu;

create table if not exists test(
    id int auto_increment primary key,
    name varchar(255) not null

);

insert into test (name) 
values
('Foods'),
('Drinks');
