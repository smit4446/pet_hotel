create table owners (
	id serial primary key,
	first_name varchar(50),
	last_name varchar(50)
)

create table pets (
	id serial primary key,
	image_path varchar(80),
	name varchar(50),
	owner_id int not null references owners on delete cascade,
	breed varchar(50),
	color varchar(50),
	is_checked_in varchar(10)
)

insert into owners ("first_name", "last_name")
values ('Cookie', 'Fleck'), ('Meg', 'Swan'), 
('Sherri', 'Ann'), ('Stefan', 'Vanderhoof'), 
('Harlan', 'Pepper')

insert into pets ("image_path", "name", "owner_id", "breed", "color", "is_checked_in")
values ('beatrice.jpg', 'Beatrice', 1,'Weimaraner', 'brown', 'IN'), 
('winky.jpg','Winky', 2,'Norwich Terrier', 'brown/black', 'IN'), 
('hubert.jpg','Hubert', 3, 'Bloodhound', 'brown/black', 'IN'), 
('miss-agnus.jpg', 'Miss Agnes', 4, 'Shih Tzu', 'brown/black', 'IN'), 
('tyrone.jpg', 'Tyrone', 4,'Shih Tzu', 'brown/black', 'IN'), 
('rhapsody.jpg', 'Rhapsody in White', 5,'Standard Poodle', 'white', 'IN')