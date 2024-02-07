create Database if not exists Menu;

use Menu;

create table if not exists products(
    id int auto_increment primary key,
    name varchar(255) not null,
    description VARCHAR(255),
    price DECIMAL(4, 2),
    is_active BOOLEAN DEFAULT true NOT NULL,
    image_url VARCHAR(255),
    category VARCHAR(255) check (category in ('burgers','drinks'))
);

insert into products (name, description, price, is_active, image_url, category) 
values
('Vanilla Burger','sweet and spicy',5.99, true,'http://vanilla','burgers'),
('Coca-Cola', 'zero', 1.99, true,'http://cola','drinks');
