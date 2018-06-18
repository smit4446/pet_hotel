create table owners (
	id serial primary key,
	first_name varchar(50),
	last_name varchar(50)
)

create table pets (
	id serial primary key,
	name varchar(50),
	owner_id int not null references owners on delete cascade,
	breed varchar(50),
	color varchar(50),
	is_checked_in varchar(10)
)

insert into owners ("first_name", "last_name")
values ('Cookie', 'Fleck'), ('Meg', 'Swan'), ('Sherri', 'Ann'), 
('Stefan', 'Vanderhoof'), ('Harlan', 'Pepper')

insert into pets ("name", "owner_id", "breed", "color", "is_checked_in")
values ('Beatrice', 1,'Weimaraner', 'brown', 'IN'), 
('Winky', 2,'Norwich Terrier', 'brown/black', 'IN'), 
('Hubert', 3, 'Bloodhound', 'brown/black', 'IN'), 
('Miss Agnes', 4, 'Shih Tzu', 'brown/black', 'IN'), 
('Tyrone', 4,'Shih Tzu', 'brown/black', 'IN'), 
('Rhapsody in White', 5,'Standard Poodle', 'white', 'IN')