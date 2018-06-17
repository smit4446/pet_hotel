create table pets (
	id serial primary key,
	name varchar(50),
	breed varchar(50),
	color varchar(50),
	is_checked_in boolean
)

create table owners (
	id serial primary key,
	first_name varchar(50),
	last_name varchar(50)
)

CREATE TABLE pet_owners (
	id SERIAL PRIMARY KEY,
	pet_id int references pets on delete cascade,
	owner_id int references owners on delete cascade
)

insert into owners ("first_name", "last_name")
values ('Cookie', 'Fleck'), ('Meg', 'Swan'), ('Sherri', 'Ann'), ('Stefan', 'Vanderhoof'), ('Harlan', 'Pepper')


insert into pets ("name", "breed", "color", "is_checked_in")
values ('Beatrice', 'Weimaraner', 'brown', 'false'), ('Winky', 'Norwich Terrier', 'brown/black', 'false'), ('Hubert', 'Bloodhound', 'brown/black', 'false'), ('Miss Agnes', 'Shih Tzu', 'brown/black', 'false'), ('Tyrone', 'Shih Tzu', 'brown/black', 'false'), ('Rhapsody in White', 'Standard Poodle', 'white', 'false')

insert into pet_owners ("pet_id", "owner_id")
values (4,10), (5,9), (6,13), (7,12), (8,12), (9,11)

SELECT pets.id, pets.name, pets.breed, pets.color, pets.is_checked_in, owners.first_name, owners.last_name FROM pet_owners
	JOIN pets on pet_owners.pet_id = pets.id
    JOIN owners ON pet_owners.owner_id = owners.id
    GROUP BY owners.id, pets.id;
   
SELECT owners.id, count(pets.id) as pets, owners.first_name, owners.last_name FROM pet_owners
	JOIN pets on pet_owners.pet_id = pets.id
    JOIN owners ON pet_owners.owner_id = owners.id
    GROUP BY owners.id;